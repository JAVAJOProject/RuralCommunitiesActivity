import React from 'react';
import './EventTextBarImg.css';

export default function TextBarImg({ imgSrc }) {
  return (
    <div className="eventTextListTextBarImgBox">
      <img src={imgSrc} alt="" />
    </div>
  );
}
