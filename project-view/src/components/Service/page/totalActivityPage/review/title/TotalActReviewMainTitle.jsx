import React from 'react';
import './TotalActReviewMainTitle.css';

export default function TotalActReviewMainTitle({ title, imgSrc }) {
  return (
    <div className="totalActReviewMainTitle">
      <p>{title}</p>
      <img src={imgSrc} alt="" />
    </div>
  );
}
