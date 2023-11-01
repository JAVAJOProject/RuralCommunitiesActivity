import React from 'react';
import './RecActRegionTitle.css'

export default function RecActRegionTitle({ mainTitle, subtitle, imgSrc }) {
  return (
    <div className='recActRegionTitle'>
      <div>
        <h2>{mainTitle}</h2>
        <img src={imgSrc} alt="" />
      </div>
      <p>{subtitle}</p>
    </div>
  );
}
