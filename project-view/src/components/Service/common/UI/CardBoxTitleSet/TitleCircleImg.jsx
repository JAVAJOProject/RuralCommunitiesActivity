import React from 'react';
import './TitleCircleImg.css';

export default function TitleCircleImg({
  imgSrc,
  style,
  isDarken,
  imgHeight,
  borderRadius,
  isContain,
}) {
  return (
    <div className="titleCircleImg" style={style}>
      <img
        src={imgSrc}
        alt=""
        style={{
          mixBlendMode: isDarken ? 'darken' : 'none',
          height: imgHeight ? imgHeight : '4.46038rem',
          width: imgHeight ? 'auto' : '4.46038rem',
          borderRadius: borderRadius ? +borderRadius : 'auto',
          objectFit: isContain ? 'contain' : 'cover',
        }}
      />
    </div>
  );
}
