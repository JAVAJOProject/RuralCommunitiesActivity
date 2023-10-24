import React, { useContext, useEffect } from "react";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import { fetchDataGET, fetchImgGET } from "../../../config/ApiService";

import RecGreenBoxCard from "../../../components/Service/recActivity/keywordFiltered/RecGreenBoxCard";
import RecCardImg from "../../../components/Service/recActivity/keywordFiltered/RecCardImg";
import RecCardContentsBox from "../../../components/Service/recActivity/keywordFiltered/RecCardContentsBox";
import { KeywordAndOrderContext } from "../../../components/Service/recActivity/filterContext/KeywordAndOrder";
import { RecActRequestPageNoContext } from "../../../components/Service/recActivity/RootLayoutRecActKeyword";

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
        "recAPostId",
        "/main/recommendation-activity-image"
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
  }, [filterState, requestPageNo]);

  return (
    <>
      {contents.length > 0 &&
        contents.map((item, index) => (
          <RecGreenBoxCard
            key={item.recAPostId}
            style={{ display: "flex", position: "relative" }}
            handleClick={() => {
              navigate(`/app/recommendation/detail/${item.recAPostId}`);
            }}
          >
            <RecCardImg imgSrc={item.recAThumbnailImg} isLeft={index !== 1} />
            <RecCardContentsBox contents={item} isLeft={index !== 1} />
          </RecGreenBoxCard>
        ))}
    </>
  );
}
