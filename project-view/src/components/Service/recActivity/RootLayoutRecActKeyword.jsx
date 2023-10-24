import React, { createContext, useEffect, useState } from 'react';
import KeywordMainTitle from './keyword/KeywordMainTitle';

import keywordImg from '../../../view_img/Service/recActivity/keywordClick.jpg';
import subtitleImg from '../../../view_img/Service/recActivity/title.svg';
import KeywordBoxSet from './keyword/KeywordBoxSet';
import CardListContentBox from '../common/UI/CardListContentBox';
import CardBoxTitleSet from '../common/UI/CardBoxTitleSet/CardBoxTitleSet';
import RecActOrderBox from './order/RecActOrderBox';
import { Outlet } from 'react-router-dom/dist';
import KeywordAndOrder from './filterContext/KeywordAndOrder';
import PageNoBox from '../common/PageNo/PageNoBox';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../config/ApiService';

export const RecActRequestPageNoContext = createContext({});

const contents = {
  mainTitle: {
    mainTitle: '키워드 추천',
    subtitle: '끌리는 키워드를 클릭해보세요',
    imgSrc: keywordImg,
  },
  subtitle: {
    text: '',
    imgSrc: subtitleImg,
    circleColor: '#FFAB48',
  },
  order: [
    { text: '최신순', requestOrderType: 'date' },
    { text: '좋아요순', requestOrderType: 'likes' },
    { text: '조회순', requestOrderType: 'viewCount' },
  ],
};

export default function RootLayoutRecActKeyword() {
  const [keywords, updateKeywords] = useImmer([]);
  const [totalPostNo, setTotalPostNo] = useState(0);
  const [totalPageNo, setTotalPageNo] = useState(1);
  const [requestPageNo, setRequestPageNo] = useState(1);

  useEffect(() => {
    async function fetchContents() {
      const keywordList = await fetchDataGET(
        '/recommendation/activity-keyword'
      );
      updateKeywords((draft) => [...keywordList]);

      const [perPagePostCount, totalCount] = await fetchDataGET(
        '/recommendation/total-count'
      );
      setTotalPostNo(+totalCount);
      setTotalPageNo(Math.ceil(+totalCount / +perPagePostCount));
    }
    fetchContents();
  }, []);
  const { mainTitle, subtitle, order } = contents;
  subtitle.text = `전체 ${totalPostNo}건`;

  return (
    <RecActRequestPageNoContext.Provider value={requestPageNo}>
      <KeywordAndOrder>
        <KeywordMainTitle contents={mainTitle} />
        <KeywordBoxSet keywords={keywords} />
        <CardListContentBox>
          <CardBoxTitleSet
            imgSrc={subtitle.imgSrc}
            text={subtitle.text}
            circleColor={subtitle.circleColor}
            isDarken={false}
          />
          <RecActOrderBox orders={order} />
          <div style={{ clear: 'both' }}>
            <Outlet />
          </div>
        </CardListContentBox>
        <PageNoBox
          curr={requestPageNo}
          total={totalPageNo}
          handlePageNo={setRequestPageNo}
        />
      </KeywordAndOrder>
    </RecActRequestPageNoContext.Provider>
  );
}
