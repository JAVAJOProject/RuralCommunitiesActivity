import React from 'react';
import './MainEventCard.css';

export default function MainEventCard({ title, children, className }) {
  const classes = ['eventCard', className].join(' ');

  return (
    <div className={classes}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
