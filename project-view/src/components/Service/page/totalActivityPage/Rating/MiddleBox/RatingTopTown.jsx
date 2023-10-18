import React from 'react';
import './RatingTopTown.css';

export default function RatingTopTown({ topText, bottomText, imgSrc }) {
  return (
    <div className="ratingTopTown">
      <p>{topText}</p>
      <img src={imgSrc} alt="" />
      <p>{bottomText}</p>
    </div>
  );
}
