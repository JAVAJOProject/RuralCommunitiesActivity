import React from 'react';
import './MainBigCard.css';

export default function MainBigCard({ children, className }) {
  const classes = [className, 'mainBigCard'].join(' ');
  return <div className={classes}>{children}</div>;
}
