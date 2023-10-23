import React from 'react';
import './MainSmallCard.css';

export default function MainSmallCard({ children, className }) {
  const classes = [className, 'mainSmallCard'].join(' ');
  return <div className={classes}>{children}</div>;
}
