import React from 'react';
import NoticeContentUI from './NoticeContentUI';
import './NoticeContentImg.css';

export default function NoticeContentImg({ images }) {
  return (
    <NoticeContentUI>
      <div className="noticeContentImg">
        {images.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
    </NoticeContentUI>
  );
}
