import React from 'react';
import RatingCategoryBox from './RatingCategoryBox';
import './RatingCategoryBoxSet.css';

export default function RatingCategoryBoxSet({ categoryCircleImg }) {
  return (
    <div className="ratingCategoryBoxSet">
      {categoryCircleImg.map((img) => (
        <RatingCategoryBox categoryCircleImg={img} />
      ))}
    </div>
  );
}
