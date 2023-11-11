import React, { useState } from 'react';
import './CommunityMemberCard.css';
import { useNavigate } from 'react-router-dom';

import Likes from '../../common/Like/Likes';

import img1 from '../../../../view_img/Service/community/community/memo1.png';
import img2 from '../../../../view_img/Service/community/community/memo2.png';
import img3 from '../../../../view_img/Service/community/community/memo3.png';
import img4 from '../../../../view_img/Service/community/community/memo4.png';
import img5 from '../../../../view_img/Service/community/community/memo5.png';
import img6 from '../../../../view_img/Service/community/community/memo6.png';
import img7 from '../../../../view_img/Service/community/community/memo7.png';
import img8 from '../../../../view_img/Service/community/community/memo8.png';
import img9 from '../../../../view_img/Service/community/community/memo9.png';
import img10 from '../../../../view_img/Service/community/community/memo10.png';

const memoImages = [
  {
    style: {
      backgroundImage: `url(${img1})`,
      width: '17.5rem',
      height: '17.5rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img2})`,
      width: '20rem',
      height: '20rem',
    },
  },
  {
    style: { backgroundImage: `url(${img3})`, width: '20rem', height: '20rem' },
  },
  {
    style: {
      backgroundImage: `url(${img4})`,
      width: '25rem',
      height: '25rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img5})`,
      width: '14rem',
      height: '14rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img6})`,
      width: '23rem',
      height: '23rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img7})`,
      width: '12rem',
      height: '12rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img8})`,
      width: '30rem',
      height: '30rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img9})`,
      width: '13.5rem',
      height: '13.5rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img10})`,
      width: '17.5rem',
      height: '24rem',
    },
  },
];

export default function CommunityMemberCard({
  postId,
  postTypeId,
  cardImgId,
  content,
  author,
  dateCreated,
  likesNum,
}) {
  const navigate = useNavigate();

  return (
    <div
      style={memoImages[cardImgId - 1].style}
      className="communityMemberCard"
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
