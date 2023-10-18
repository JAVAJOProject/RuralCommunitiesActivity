import React from 'react';
import './MypageCardRectImg.css'

export default function MypageCardRectImg({ imgSrc }) {
  return (
    <div className='mypageCardRectImg'>
      <img src={imgSrc} alt="" />
    </div>
  );
}
