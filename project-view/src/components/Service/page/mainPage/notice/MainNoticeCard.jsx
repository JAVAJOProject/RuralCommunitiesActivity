import React from 'react';
import './MainNoticeCard.css';

export default function MainNoticeCard({ title, children, className }) {
  const classes = [className, 'noticeCard'].join(' ');

  return (
    <div className={classes}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
