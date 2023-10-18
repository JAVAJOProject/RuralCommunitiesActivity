import React from 'react';
import './RatingTopBannerCircleImg.css';

export default function RatingTopBannerCircleImg({ gradeSrc, gradeText }) {
  return (
    <div className='ratingTopBannerCircle'>
      <div className="ratingTopBannerCircleImg">
        <img src={gradeSrc} alt="" />
      </div>
      <p>{gradeText}</p>
    </div>
  );
}
