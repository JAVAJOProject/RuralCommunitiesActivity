import React from 'react';
import './CommunityListBar.css';

import Likes from '../../../common/Like/Likes';
import { useNavigate } from 'react-router-dom';

export default function CommunityListBar({
  postId,
  postTypeId,
  likesNum,
  content,
  author,
  dateCreated,
}) {
  const navigate = useNavigate();

  const dateT = new Date(dateCreated);
  const dateText = `${dateT.getFullYear()}-${
    dateT.getMonth() + 1
  }-${dateT.getDate()}`;
  return (
    <div
      className="communityListBar"
      onClick={() => {
        navigate(`../../detail/${postId}`);
      }}
    >
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
          style={{ opacity: '80%', margin: 'auto' }}
        />
      </div>
      <p>{content}</p>
      <p>- {author}</p>
      <p>{dateText}</p>
    </div>
  );
}
