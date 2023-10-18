import React from 'react';
import './RatingTopBannerContent.css';

export default function RatingTopBannerContent({ bannerContent }) {
  return (
    <div className="ratingTopBannerContent">
      <p>{bannerContent}</p>
    </div>
  );
}
