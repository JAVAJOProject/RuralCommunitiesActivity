import React from 'react';
import './EventFirstBoxCircleImg.css';

export default function EventFirstBoxCircleImg({ imgSrc }) {
  return (
    <div className="eventFirstBoxCircleImgBox">
      <img src={imgSrc} alt="" />
    </div>
  );
}
