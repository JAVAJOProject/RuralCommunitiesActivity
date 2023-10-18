import React from 'react';
import './RatingCategoryCircleImg.css';

export default function RatingCategoryCircleImg({ imgSrc, imgStyle }) {
  return (
    <div className="ratingCategoryCircleImg">
      <img src={imgSrc} alt="" style={imgStyle} />
    </div>
  );
}
