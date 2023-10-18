import React from 'react';
import './NoticeListBarCategory.css';

export default function NoticeListBarCategory({ text }) {
  return (
    <div className="noticeListBarCategory">
      <p>{text}</p>
    </div>
  );
}