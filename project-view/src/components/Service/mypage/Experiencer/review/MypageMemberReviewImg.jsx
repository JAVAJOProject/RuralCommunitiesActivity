import React from 'react';
import './MypageMemberReviewImg.css';

export default function MypageMemberReviewImg({ imgSrc }) {
  return (
    <div className='mypageMemberReviewImg'>
      <img src={imgSrc} alt="" />
    </div>
  );
}