import React from 'react';
import './TotalActReviewCard.css';

export default function TotalActReviewCard({ children, className, style }) {
  const classes = ['totalActReviewCard', className].join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
