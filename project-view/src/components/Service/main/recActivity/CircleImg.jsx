import React from 'react';
import './CircleImg.css';

export default function CircleImg({ imgSrc, imgDesc, className }) {
  const classes = ['circle_small', className].join(' ');

  return (
    <div className={classes}>
      <img src={imgSrc} alt='' />
      <p>{imgDesc}</p>
    </div>
  );
}
