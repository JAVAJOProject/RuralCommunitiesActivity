import React from 'react';
import './RecCardImg.css';

export default function RecCardImg({ imgSrc, isLeft }) {
  return (
    <div className={'recCardImg' + (isLeft ? '' : ' recCardImgRight')}>
      <img src={imgSrc} alt="" />
    </div>
  );
}
