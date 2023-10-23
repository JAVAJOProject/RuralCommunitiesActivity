import React from 'react';
import './RatingTopBannerTitle.css';

export default function RatingTopBannerTitle({ bannerTitle }) {
  return (
    <div className="ratingTopBannerTitle">
      <p>{bannerTitle}</p>
    </div>
  );
}
