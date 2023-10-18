import React from 'react';
import './NoticeContentUI.css';

export default function NoticeContentUI({ children, style, className }) {
  const classes = ['noticeContentUI', className].join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
