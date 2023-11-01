import React from 'react';
import './RecTownGuideTitle.css'

export default function RecTownGuideTitle({ imgSrc, mainTitle, subtitle }) {
  return (
    <div className='recTownGuideTitle'>
      <div>
        <img src={imgSrc} alt="" />
        <h2>{mainTitle}</h2>
      </div>
      <p>{subtitle}</p>
    </div>
  );
}
