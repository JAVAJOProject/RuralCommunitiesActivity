import React from 'react';
import EventDetailTitleText from './EventDetailTitleText';
import EventDetailTitleCountBox from './EventDetailTitleCountBox';
import './EventDetailTitle.css';

export default function EventDetailTitle({ contents }) {
  const { postTitle, postId, viewCnt, postTypeId } = contents;
  const favoriteCnt = contents?.favoriteCnt;
  const likeCnt = contents?.likeCnt;

  return (
    <div className="eventDetailTitle">
      <EventDetailTitleText text={postTitle} />
      {+postTypeId === 4 || +postTypeId === 6 ? (
        <EventDetailTitleCountBox
          favoritesNum={favoriteCnt}
          viewNum={viewCnt}
        />
      ) : (
        <EventDetailTitleCountBox likesNum={likeCnt} viewNum={viewCnt} />
      )}
    </div>
  );
}
