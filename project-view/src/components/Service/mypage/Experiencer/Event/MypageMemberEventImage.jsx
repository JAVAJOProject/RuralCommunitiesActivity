import React from 'react';
import './MypageMemberEventImage.css'

export default function MypageMemberEventImage({ imgSrc }) {
  return (
    <div className='mypageMemberEventImage'>
      <img src={imgSrc} alt="" />
    </div>
  );
}
