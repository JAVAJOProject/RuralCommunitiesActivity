import React from 'react';
import './EventTextTitle.css';

export default function EventTextTitle({ text }) {
  const title = '' + text;

  return (
    <div className="eventTextTitle">
      <p>{title.length > 17 ? title.substr(0, 17) + '...' : title}</p>
    </div>
  );
}
