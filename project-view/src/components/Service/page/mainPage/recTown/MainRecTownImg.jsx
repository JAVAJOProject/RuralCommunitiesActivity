import React from 'react';
import './MainRecTownImg.css';

export default function MainRecTownImg({ imgSrc, className }) {
  const classes = [className, 'mainRecTownImg'].join(' ');

  return (
    <div className={classes}>
      <img src={imgSrc} />
    </div>
  );
}
