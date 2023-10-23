import React from 'react';
import NoticeContentUI from './NoticeContentUI';
import './NoticeContentText.css';

export default function NoticeContentText({ text }) {
  return (
    <NoticeContentUI
      style={{
        padding: '3rem 4rem',
        whiteSpace: 'pre-line',
      }}
    >
      <p className="noticeContentText">{text}</p>
    </NoticeContentUI>
  );
}
