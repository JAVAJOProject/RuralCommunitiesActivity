import React from 'react';
import RatingTopBannerCircleImg from './RatingTopBannerCircleImg';
import './RatingTopBannerCircleImgBox.css'

export default function RatingTopBannerCircleImgBox({ gradeCircleContents }) {
  return (
    <div className='ratingTopBannerCircleImgBox'>
      {gradeCircleContents.map((item) => (
        <RatingTopBannerCircleImg
          gradeSrc={item.imgSrc}
          gradeText={item.imgText}
        />
      ))}
    </div>
  );
}
