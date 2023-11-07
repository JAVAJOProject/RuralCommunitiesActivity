import React from 'react';
import './CommunitySellerCard.css';

import Likes from '../../common/Like/Likes';

export default function CommunitySellerCard({
  postId,
  postTypeId,
  content,
  author,
  dateCreated,
  likesNum,
}) {
  return (
    <div className="communitySellerCard">
      <p>{content}</p>
      <div>
        <Likes
          on={false}
          postId={postId}
          postTypeId={postTypeId}
          likesNum={likesNum}
          style={{ opacity: '80%', width: '5.5rem' }}
          fontSize={'0.8rem'}
        />
        <div>
          <p>- {author}</p>
          <p>{dateCreated}</p>
        </div>
      </div>
    </div>
  );
}
