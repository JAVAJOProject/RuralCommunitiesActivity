import React from 'react';
import './MainSmallContent.css';

export default function MainSmallContent({ title, content }) {
  return (
    <div className="mainSmallContent">
      <p className='mainSmallTitle'>{title}</p>
      <p className='mainSmallSubtitle'>{content}</p>
    </div>
  );
}
