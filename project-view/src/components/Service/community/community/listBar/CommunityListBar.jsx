import React from 'react';
import './CommunityListBar.css';

import Likes from '../../../common/Like/Likes';

export default function CommunityListBar({
  postId,
  postTypeId,
  likesNum,
  content,
  author,
  dateCreated,
}) {
  const dateT = new Date(dateCreated);
  const dateText = `${dateT.getFullYear()}-${
    dateT.getMonth() + 1
  }-${dateT.getDate()}`;
  return (
    <div className="communityListBar">
      <div>
        <Likes
          on={false}
          postId={postId}
          postTypeId={postTypeId}
          likesNum={likesNum}
          style={{ opacity: '80%', margin: 'auto' }}
        />
      </div>
      <p>{content}</p>
      <p>- {author}</p>
      <p>{dateText}</p>
    </div>
  );
}
