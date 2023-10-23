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

export default function ContentBox({contents}) {
  const { recActivity, totalActivity, recTown, event, notice } = contents;

  return (
    <div>
      <div className="mainContentBox">
        <ContentTitle contentTitles={recActivity} />
        <CircleContent contents={recActivity.images} />
      </div>
      <div className="mainContentBox">
        <ContentTitle contentTitles={totalActivity} />
        <MainTotalActivities contents={totalActivity.contents} />
      </div>
      <div className="mainContentBox">
        <ContentTitle contentTitles={recTown} />
        <RecTownBox contents={recTown.contents} />
      </div>
      <div className="mainContentBox mainLastCard">
        <MainEventCard className="mainEventBox" title={event.title}>
          <MainEventPoster imgSrc={event.eventThumbnailImg} />
        </MainEventCard>
        <MainNoticeCard className="mainNoticeBox" title={notice.title}>
          <MainNoticePlus />
          <MainNoticeTable noticeData={notice.data} />
        </MainNoticeCard>
      </div>
    </div>
  );
}
