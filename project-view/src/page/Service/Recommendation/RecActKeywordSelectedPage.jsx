import React, { useContext, useEffect, useState } from 'react';
import RecGreenBoxCard from '../../../components/Service/recActivity/keywordFiltered/RecGreenBoxCard';
import RecCardImg from '../../../components/Service/recActivity/keywordFiltered/RecCardImg';

import RecCardContentsBox from '../../../components/Service/recActivity/keywordFiltered/RecCardContentsBox';
import { useNavigate } from 'react-router-dom/dist';
import { KeywordAndOrderContext } from '../../../components/Service/recActivity/filterContext/KeywordAndOrder';
import { useImmer } from 'use-immer';
import { fetchDataGET, fetchImgGET } from '../../../config/ApiService';
import { RecActRequestPageNoContext } from '../../../components/Service/recActivity/RootLayoutRecActKeyword';

export default function RecActKeywordSelectedPage() {
  const navigate = useNavigate();
  const { filterState } = useContext(KeywordAndOrderContext);
  const { requestPageNo } = useContext(RecActRequestPageNoContext);
  const [contents, updateContents] = useImmer([]);

  useEffect(() => {
    async function fetchContents() {
      let data;
      if (filterState.keyword) {
        data = await fetchDataGET(
          `/recommendation/activity-keyword/${filterState.keyword}/${requestPageNo}?requestOrderType=${filterState.order}`
        );
      } else {
        data = await fetchDataGET(
          `/recommendation/activity-list/${requestPageNo}?requestOrderType=${filterState.order}`
        );
      }
      const images = await fetchImgGET(
        data,
        'recAPostId',
        '/main/recommendation-activity-image'
      );

      updateContents((draft) => {
        draft.length = 0;
        data.forEach((item, index) => {
          draft.push({
            ...item,
            recAThumbnailImg: images[index],
          });
        });
      });
    }
    fetchContents();
  }, []);

  return (
    <>
      {contents.map((item, index) => (
        <RecGreenBoxCard
          key={item.postId}
          style={{ display: 'flex', position: 'relative' }}
          handleClick={() => {
            navigate(`/app/recommendation/detail/${item.postId}`);
          }}
        >
          <RecCardImg imgSrc={item.imgSrc} isLeft={index !== 1} />
          <RecCardContentsBox contents={item} isLeft={index !== 1} />
        </RecGreenBoxCard>
      ))}
    </>
  );
}
