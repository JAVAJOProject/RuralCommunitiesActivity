import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import { fetchDataGET, fetchImgGET } from "../../../../config/ApiService";

import CardListContentBox from "../../../../components/Service/common/UI/CardListContentBox";
import CardBoxTitleSet from "../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet";
import MypageMemberEventCard from "../../../../components/Service/mypage/Experiencer/Event/MypageMemberEventCard";
import PageNoBox from "../../../../components/Service/common/PageNo/PageNoBox";

import titleImg from "../../../../view_img/Service/myPage/experiencer/event.jpg";

const defaultContents = {
  titles: {
    title: "이벤트 참여 목록",
    imgSrc: titleImg,
    backgroundColor: "#EAD8CE",
    imgHeight: "3.2rem",
  },
  cardContents: ["참여일", "참여 장소", "모집 마감", "응모 결과"],
};

export default function MypageMemberEventPage() {
  const [event, updateEvent] = useImmer([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const { titles, cardContents } = defaultContents;

  async function fetchContents() {
    try {
      const eventData = await fetchDataGET(
        `/mypage/member/event/list/page/${currentPage}`
      );
      const eventImg = await fetchImgGET(
        eventData,
        "eventId",
        "/main/event-image"
      );

      updateEvent((draft) => {
        draft.length = 0;
        eventData.forEach((item, index) => {
          draft.push({ ...item, eventThumbnailImg: eventImg[index] });
        });
      });
      const [perPagePostCount, totalPostNo] = fetchDataGET(
        "/mypage/member/event/total-page"
      );
      setMaxPage(Math.ceil(+totalPostNo / +perPagePostCount));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchContents();
  }, [currentPage]);

  return (
    <main className="appMain">
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={titles.imgSrc}
          text={titles.title}
          circleColor={titles.backgroundColor}
          imgHeight={titles.imgHeight}
          borderRadius="0"
        />
        {event.length > 0 &&
          event.map((item) => (
            <MypageMemberEventCard
              key={item.eventId}
              cardContents={cardContents}
              contents={item}
            />
          ))}
      </CardListContentBox>
      <PageNoBox
        curr={currentPage}
        total={maxPage}
        handlePageNo={setCurrentPage}
      />
    </main>
  );
}
