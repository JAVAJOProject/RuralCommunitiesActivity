import React from 'react';
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
import OnlyLikesImg from '../../common/Like/OnlyLikesImg';

const memoImages = [
  {
    style: {
      backgroundImage: `url(${img1})`,
      width: '17.5rem',
      height: '17.5rem',
    },
    contentStyle: {
      width: '12.5rem',
      WebkitLineClamp: '5',
      marginTop: '3rem',
      marginBottom: '-0.6rem',
      marginLeft: '-0.4rem',
    },
    spaceStyle: {
      marginLeft: '1.5rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img2})`,
      width: '20rem',
      height: '20rem',
    },
    contentStyle: {
      width: '9rem',
      fontSize: '0.9rem',
      WebkitLineClamp: '5',
      marginTop: '1rem',
      marginBottom: '-0.3rem',
      marginLeft: '0.7rem',
    },
    spaceStyle: {
      marginLeft: '2.5rem',
    },
    likesType: 'img',
    heartSpace: '1.8rem',
  },
  {
    style: {
      backgroundImage: `url(${img3})`,
      width: '20rem',
      height: '20rem',
    },
    contentStyle: {
      width: '14rem',
      fontSize: '1rem',
      marginTop: '2rem',
      marginLeft: '0.2rem',
      WebkitLineClamp: '6',
    },
    spaceStyle: {
      marginLeft: '2.5rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img4})`,
      width: '25rem',
      height: '25rem',
    },
    contentStyle: {
      marginTop: '1.5rem',
      WebkitLineClamp: '6',
      fontSize: '1rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img5})`,
      width: '14rem',
      height: '14rem',
    },
    contentStyle: {
      width: '10rem',
      fontSize: '0.9rem',
      marginTop: '3rem',
      marginBottom: '-0.6rem',
      marginLeft: '0',
    },
    spaceStyle: {
      marginLeft: '2.7rem',
    },
    likesType: 'img',
    heartSpace: '-0.3rem',
  },
  {
    style: {
      backgroundImage: `url(${img6})`,
      width: '23rem',
      height: '23rem',
    },
    contentStyle: {
      marginTop: '2rem',
      marginLeft: '1rem',
      marginBottom: '-0.6rem',
      WebkitLineClamp: '6',
      fontSize: '0.9rem',
    },
    spaceStyle: {
      marginLeft: '0.1rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img7})`,
      width: '12rem',
      height: '12rem',
    },
    contentStyle: {
      fontSize: '0.7rem',
      width: '8rem',
      marginTop: '1.4rem',
      marginLeft: '2rem',
      marginBottom: '-0.6rem',
    },
    spaceStyle: {
      marginLeft: '0.8rem',
    },
    likesType: 'img',
    heartSpace: '2.2rem',
  },
  {
    style: {
      backgroundImage: `url(${img8})`,
      width: '30rem',
      height: '30rem',
    },
    contentStyle: {
      width: '16rem',
      WebkitLineClamp: '6',
      marginTop: '3rem',
    },
    spaceStyle: {
      marginLeft: '4rem',
    },
  },
  {
    style: {
      backgroundImage: `url(${img9})`,
      width: '13.5rem',
      height: '13.5rem',
    },
    contentStyle: {
      fontSize: '0.8rem',
      width: '7rem',
      marginTop: '0',
      marginBottom: '-0.6rem',
      marginLeft: '2.6rem',
    },
    spaceStyle: {
      marginLeft: '0.5rem',
    },
    likesType: 'img',
    heartSpace: '2rem',
  },
  {
    style: {
      backgroundImage: `url(${img10})`,
      width: '17.5rem',
      height: '24rem',
    },
    contentStyle: {
      marginTop: '2rem',
      width: '9rem',
      marginLeft: '-0.5rem',
      fontSize: '0.9rem',
      WebkitLineClamp: '5',
      marginBottom: '-0.6rem',
    },
    spaceStyle: {
      marginLeft: '2rem',
    },
    likesType: 'img',
    heartSpace: '0.3rem',
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
      style={memoImages[cardImgId - 1].style ?? {}}
      className="communityMemberCard"
      onClick={() => {
        navigate(`../../detail/${postId}`);
        window.scrollTo(0, 0);
      }}
    >
      <p style={memoImages[cardImgId - 1].contentStyle ?? {}}>{content}</p>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {memoImages[cardImgId - 1].likesType === 'img' ? (
          <OnlyLikesImg
            on={false}
            postId={postId}
            postTypeId={postTypeId}
            likesNum={likesNum}
            style={{
              opacity: '80%',
              width: '2rem',
              height: '2rem',
              lineHeight: '2rem',
              textAlign: 'center',
              backgroundColor: '#fff',
              padding: '0.3rem',
              borderRadius: '0.3rem',
              marginLeft: memoImages[cardImgId - 1].heartSpace,
            }}
          />
        ) : (
          <Likes
            on={false}
            postId={postId}
            postTypeId={postTypeId}
            likesNum={likesNum}
            style={{ opacity: '80%', width: '5.5rem' }}
            fontSize={'0.8rem'}
          />
        )}
        <div style={memoImages[cardImgId - 1].spaceStyle ?? {}}>
          <p>- {author}</p>
          <p>{dateCreated}</p>
        </div>
      </div>
    </div>
  );
}
