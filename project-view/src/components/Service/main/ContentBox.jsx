import React from 'react';
import ContentTitle from './ContentTitle';
import CircleContent from './recActivity/CircleContent';
import './ContentBox.css';
import MainTotalActivities from './totalActivity/MainTotalActivities';
import RecTownBox from './recTown/RecTownBox';
import MainEventCard from './event/MainEventCard';
import MainNoticeCard from './notice/MainNoticeCard';
import MainEventPoster from './event/MainEventPoster';

import MainNoticePlus from './notice/MainNoticePlus';
import MainNoticeTable from './notice/MainNoticeTable';

export default function ContentBox({ contents }) {
  const { recActivity, totalActivity, recTown, event, notice } = contents;

  return (
    <div>
      <div className="mainContentBox">
        <ContentTitle contentTitles={recActivity} />
        {recActivity?.recAPostId && (
          <CircleContent contents={recActivity.images} />
        )}
      </div>
      <div className="mainContentBox">
        <ContentTitle contentTitles={totalActivity} />
        {totalActivity?.contents?.aName && (
          <MainTotalActivities contents={totalActivity.contents} />
        )}
      </div>
      <div className="mainContentBox">
        <ContentTitle contentTitles={recTown} />
        {recTown?.contents?.recTTitle && (
          <RecTownBox contents={recTown.contents} />
        )}
      </div>
      <div className="mainContentBox mainLastCard">
        <MainEventCard className="mainEventBox" title={event.title}>
          {event?.eventThumbnailImg && (
            <MainEventPoster imgSrc={event.eventThumbnailImg} />
          )}
        </MainEventCard>
        <MainNoticeCard className="mainNoticeBox" title={notice.title}>
          <MainNoticePlus />
          {notice?.data && <MainNoticeTable noticeData={notice.data} />}
        </MainNoticeCard>
      </div>
    </div>
  );
}
