import React from 'react';
import RatingCategoryCard from './RatingCategoryCard';
import RatingCategoryCircleImg from './RatingCategoryCircleImg';
import RatingCategoryTextBox from './RatingCategoryTextBox';

export default function RatingCategoryBox({ categoryCircleImg }) {
  const { title, imgStyle, imgSrc } = categoryCircleImg;

  return (
    <RatingCategoryCard>
      <RatingCategoryCircleImg imgStyle={imgStyle} imgSrc={imgSrc} />
      <RatingCategoryTextBox text={title} />
    </RatingCategoryCard>
  );
}
