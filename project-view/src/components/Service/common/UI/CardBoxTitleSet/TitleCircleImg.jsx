import React from 'react';
import './TitleCircleImg.css';

export default function TitleCircleImg({ imgSrc, style, isDarken }) {
  style.mixBlendMode = isDarken ? 'darken' : 'none';

  return (
    <div className="titleCircleImg" style={style}>
      <img src={imgSrc} alt="" />
    </div>
  );
}
