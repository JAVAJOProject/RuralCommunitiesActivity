import React from 'react';
import EventDetailTitleText from './EventDetailTitleText';
import EventDetailTitleCountBox from './EventDetailTitleCountBox';
import './EventDetailTitle.css';

export default function EventDetailTitle({ contents }) {
  const { postTitle, postId, postTypeId, viewCnt } = contents;
  const favoriteCnt = contents?.favoriteCnt;
  const likeCnt = contents?.likeCnt;

  return (
    <div className="eventDetailTitle">
      <EventDetailTitleText text={postTitle} />
      {+postTypeId === 1 || +postTypeId === 4 ? (
        <EventDetailTitleCountBox
          on={false}
          postId={+postId}
          postTypeId={+postTypeId}
          favoritesNum={+favoriteCnt}
          viewNum={+viewCnt}
        />
      ) : (
        <EventDetailTitleCountBox
          on={false}
          postId={+postId}
          postTypeId={+postTypeId}
          likesNum={+likeCnt}
          viewNum={+viewCnt}
        />
      )}
    </div>
  );
}
