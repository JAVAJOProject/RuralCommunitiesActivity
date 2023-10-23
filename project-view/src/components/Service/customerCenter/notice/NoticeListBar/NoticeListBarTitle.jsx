import React from 'react';
import './NoticeListBarTitle.css';

export default function NoticeListBarTitle({ text, style }) {
  return (
    <div
      className={
        'noticeListBarTitle' +
        (JSON.stringify(style) === '{}' ? '' : ' noticeListBarTitleMain')
      }
    >
      <p style={style}>{text}</p>
    </div>
  );
}