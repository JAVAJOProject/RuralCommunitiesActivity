import React from 'react';
import './TitleCircleImg.css';

export default function TitleCircleImg({ imgSrc, style, isDarken }) {
  return (
    <div className="titleCircleImg" style={style}>
      <img src={imgSrc} alt="" style={{mixBlendMode: isDarken ? 'darken' : 'none'}} />
    </div>
  );
}
