import React from 'react';
import EventDetailTitleText from './EventDetailTitleText';
import EventDetailTitleCountBox from './EventDetailTitleCountBox';
import './EventDetailTitle.css';

export default function EventDetailTitle({ contents }) {
  const { postTitle, favoriteCnt, viewCnt, postId, postTypeId } = contents;

  return (
    <div className="eventDetailTitle">
      <EventDetailTitleText text={postTitle} />
      {+postTypeId === 4 || +postTypeId === 6 ? (
        <EventDetailTitleCountBox
          favoritesNum={favoriteCnt}
          viewNum={viewCnt}
        />
      ) : (
        <EventDetailTitleCountBox likesNum={favoriteCnt} viewNum={viewCnt} />
      )}
    </div>
  );
}
