import React from 'react';
import './CommunitySellerCard.css';

import Likes from '../../common/Like/Likes';
import { useNavigate } from 'react-router-dom';

export default function CommunitySellerCard({
  postId,
  postTypeId,
  content,
  author,
  dateCreated,
  likesNum,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="communitySellerCard"
      onClick={() => {
        navigate(`../../detail/${postId}`);
        window.scrollTo(0, 0);
      }}
    >
      <p>{content}</p>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
