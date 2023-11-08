import React from 'react';
import './CommunityDetailContent.css';

import Likes from '../../../common/Like/Likes';
import Viewings from '../../../common/Viewings';

export default function CommunityDetailContent({
  content,
  postId,
  postTypeId,
  likesNum,
  viewsNum,
  author,
  dateCreated,
}) {
  let dateText = '';
  if (dateCreated) {
    const dateT = new Date(dateCreated);
    dateText = `${dateT.getFullYear()}-${
      dateT.getMonth() + 1
    }-${dateT.getDate()}`;
  }
  return (
    <div className="communityDetailContent">
      <p>{content}</p>
      <div>
        <div>
          <Likes
            on={false}
            postId={+postId}
            postTypeId={+postTypeId}
            likesNum={+likesNum}
          />
          <Viewings viewings={+viewsNum} />
        </div>
        <div>
          <p>- {author}</p>
          <p>{dateText}</p>
        </div>
      </div>
    </div>
  );
}
