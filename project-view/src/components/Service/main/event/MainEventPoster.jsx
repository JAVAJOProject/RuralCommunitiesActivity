import React from 'react';
import './MainEventPoster.css';

export default function MainEventPoster({ imgSrc, className }) {
  const classes = [className, 'mainEventPoster'].join(' ');

  return (
    <div className={classes}>
      <img src={imgSrc} />
    </div>
  );
}
