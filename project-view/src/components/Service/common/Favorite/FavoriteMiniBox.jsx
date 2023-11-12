import React from 'react';
import '../MiniBox.css';

export default function MiniBox({
  className,
  imgSrc,
  content,
  fontSize,
  imgClassName,
  style,
  // 임시
  onClick,
}) {
  const classes = [className, 'miniBox'].join(' ');

  return (
    <div className={classes} style={style} onClick={(e)=>{e.stopPropagation()}}>
      <img
        onClick={onClick}
        className={imgClassName}
        src={imgSrc}
        style={{ cursor: 'pointer' }}
      />
      <p style={{ fontSize, cursor: 'auto' }}>{(+content).toLocaleString()}</p>
    </div>
  );
}