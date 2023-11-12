import React from 'react';
import './RecCardContentsBox.css';

import RecCardTitle from './RecCardTitle';
import EventDetailTitleCountBox from '../../community/event/Detail/Title/EventDetailTitleCountBox';
import RecCardContentsLine from './RecCardContentsLine';
import RecCardContentsText from './RecCardContentsText';

export default function RecCardContentsBox({ contents }) {
  const { postId, postTypeId, title, likesCnt, viewCnt, textContents } = contents;

  return (
    <div className="recCardContentsBox">
      <div>
        <RecCardTitle title={title} />
        <EventDetailTitleCountBox
          on={false}
          postId={postId}
          postTypeId={postTypeId}
          likesNum={+likesCnt}
          viewNum={+viewCnt}
        />
      </div>
      <RecCardContentsLine />
      <RecCardContentsText text={textContents} />
    </div>
  );
}
