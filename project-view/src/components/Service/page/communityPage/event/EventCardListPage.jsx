import React, { useEffect, useState, useContext } from "react";
import { useImmer } from "use-immer";
import EventBigCards from "./CardList/EventBigCards";
import EventSmallCards from "./CardList/EventSmallCards";
import { fetchDataGET, fetchImgGET } from "../../../../../config/ApiService";
import { EventNavContext } from "./MiddleNav/EventNavContext/EventNav";
import PageNoBox from "../../../common/PageNo/PageNoBox";

export default function EventCardListPage() {
  const [contents, updateContents] = useImmer([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const { navState } = useContext(EventNavContext);
  const [totalPageNo, setTotalPageNo] = useState(1);

  useEffect(() => {
    async function fetchContents() {
      try {
        const eventData = await fetchDataGET(
          `/event/event-list/card/${requestPageNo}?isRecruiting=${navState.isRecruiting}`
        );
        const eventImgData = await fetchImgGET(
          eventData,
          "eventId",
          "/main/event-image"
        );
        updateContents((draft) => {
          draft.length = 0;
          eventData.forEach((item, index) => {
            draft.push({
              ...item,
              eventThumbnailImg: eventImgData[index],
            });
          });
        });

        const [perPostPageNo, totalPostNo] = await fetchDataGET(
          `/event/total-count?isRecruiting=${navState.isRecruiting}`
        );
        setTotalPageNo(Math.ceil(+totalPostNo / +perPostPageNo));
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [requestPageNo, navState.isRecruiting]);

  return (
    <div>
      <EventBigCards contents={contents.filter((_, index) => index < 2)} />
      <EventSmallCards contents={contents.filter((_, index) => index > 1)} />
      <PageNoBox
        curr={requestPageNo}
        total={totalPageNo}
        handlePageNo={setRequestPageNo}
      />
    </div>
  );
}
