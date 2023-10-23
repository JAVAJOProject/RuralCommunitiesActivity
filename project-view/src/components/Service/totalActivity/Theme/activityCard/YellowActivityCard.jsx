import React from 'react';
import './YellowActivityCard.css';

export default function YellowActivityCard({
  children,
  className,
  style,
  onClick,
}) {
  const classes = [className, 'yellowActivityCard'].join(' ');

  return (
    <div className={classes} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
