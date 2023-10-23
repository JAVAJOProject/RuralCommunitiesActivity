import React from 'react';
import './TotalActReviewRating.css';

export default function TotalActReviewRating({ ratingNum }) {
  return (
    <div className="totalActReviewRating">
      <p>{'★'.repeat(ratingNum)}</p>
    </div>
  );
}
