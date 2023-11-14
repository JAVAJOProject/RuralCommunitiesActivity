import React from 'react';
import NoticeContentText from './NoticeContentText';
import NoticeContentImg from './NoticeContentImg';
import './NoticeContent.css';

export default function NoticeContent({ images, content }) {
  return (
    <div className="noticeContent">
      {images?.length > 0 && <NoticeContentImg images={images} />}
      <NoticeContentText text={content} />
    </div>
  );
}
