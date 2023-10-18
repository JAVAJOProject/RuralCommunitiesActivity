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
    <div className={classes} style={style}>
      <img
        onClick={onClick}
        className={imgClassName}
        src={imgSrc}
        style={{ cursor: 'pointer' }}
      />
      <p style={{ fontSize }}>{(+content).toLocaleString()}</p>
    </div>
  );
}
