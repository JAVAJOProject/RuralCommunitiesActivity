import React from "react";
import ContentTitle from "./ContentTitle";
import CircleContent from "./recActivity/CircleContent";
import "./ContentBox.css";
import MainTotalActivities from "./totalActivity/MainTotalActivities";
import RecTownBox from "./recTown/RecTownBox";
import MainEventCard from "./event/MainEventCard";
import MainNoticeCard from "./notice/MainNoticeCard";
import MainEventPoster from "./event/MainEventPoster";

import MainNoticePlus from "./notice/MainNoticePlus";
import MainNoticeTable from "./notice/MainNoticeTable";

export default function ContentBox({ contents }) {
  return (
    <div>
      {contents?.recActivity && (
        <div className="mainContentBox">
          <ContentTitle contentTitles={contents?.recActivity} />
          <CircleContent contents={contents?.recActivity?.images} />
        </div>
      )}
      {contents?.totalActivity && (
        <div className="mainContentBox">
          <ContentTitle contentTitles={contents?.totalActivity} />
          <MainTotalActivities contents={contents?.totalActivity?.contents} />
        </div>
      )}
      {contents?.recTown && (
        <div className="mainContentBox">
          <ContentTitle contentTitles={contents?.recTown} />
          <RecTownBox contents={contents?.recTown?.contents} />
        </div>
      )}
      <div className="mainContentBox mainLastCard">
        {contents?.event && (
          <MainEventCard
            className="mainEventBox"
            title={contents?.event?.title}
          >
            <MainEventPoster imgSrc={contents?.event?.eventThumbnailImg} />
          </MainEventCard>
        )}
        {contents?.notice && (
          <MainNoticeCard
            className="mainNoticeBox"
            title={contents?.notice?.title}
          >
            <MainNoticePlus />
            <MainNoticeTable noticeData={contents?.notice?.data} />
          </MainNoticeCard>
        )}
      </div>
    </div>
  );
}
