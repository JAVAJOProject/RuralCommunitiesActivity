import React from 'react';
import EventDetailTitleText from './EventDetailTitleText';
import EventDetailTitleCountBox from './EventDetailTitleCountBox';
import './EventDetailTitle.css';

export default function EventDetailTitle({ contents }) {
  const { postTitle, favoriteCnt, viewCnt, postId, postTypeId } = contents;

  return (
    <div className="eventDetailTitle">
      <EventDetailTitleText text={postTitle} />
      <EventDetailTitleCountBox favoritesNum={favoriteCnt} viewNum={viewCnt} />
    </div>
  );
}
