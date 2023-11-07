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
}) {
  return (
    <div className="communityDetailContent">
      <p>{content}</p>
      <div>
        <Likes
          on={false}
          postId={+postId}
          postTypeId={+postTypeId}
          likesNum={+likesNum}
        />
        <Viewings viewings={+viewsNum} />
      </div>
    </div>
  );
}
