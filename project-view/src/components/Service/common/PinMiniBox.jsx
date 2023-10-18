import React from 'react';
import './MiniBox.css';

export default function PinMiniBox({
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
      <img onClick={onClick} className={imgClassName} src={imgSrc} />
      <p style={{ fontSize }}>{content}</p>
    </div>
  );
}
