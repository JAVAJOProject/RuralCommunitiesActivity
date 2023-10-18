import React from 'react';
import SearchingBox from '../../../../common/UI/SearchingBox/SearchingBox';
import RatingTopTown from './RatingTopTown';
import './RatingMiddleBox.css'

export default function RatingMiddleBox({ topTownInfo }) {
  const { topText, imgSrc, bottomText } = topTownInfo;

  return (
    <div className='ratingMiddleBox'>
      <RatingTopTown
        topText={topText}
        bottomText={bottomText}
        imgSrc={imgSrc}
      />
      <SearchingBox />
    </div>
  );
}
