import React from 'react';
import './MainBigContent.css';

export default function MainBigContent({ title, content }) {
  return (
    <div className="mainBigContent">
      <p className='mainBigTitle'>{title}</p>
      <p className='mainBigSubtitle'>{content}</p>
    </div>
  );
}
