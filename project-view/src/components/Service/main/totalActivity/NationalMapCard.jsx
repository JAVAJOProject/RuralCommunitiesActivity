import React from 'react';
import './NationalMapCard.css';

export default function NationalMapCard({ className, children }) {
  const classes = ['nationalMapCard', className].join(' ');
  return <div className={classes}>{children}</div>;
}
