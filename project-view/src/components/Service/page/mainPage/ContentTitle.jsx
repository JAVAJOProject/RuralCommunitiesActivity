import React from 'react';
import './ContentTitle.css';

export default function ContentTitle({ contentTitles }) {
  const { mainTitle, subtitle } = contentTitles;

  return (
    <div className="contentTitle">
      <div className="mainTitle">{mainTitle}</div>
      <div className='subtitles'>
        {subtitle.map((title) => (
          <div className="subtitle">{title}</div>
        ))}
      </div>
    </div>
  );
}
