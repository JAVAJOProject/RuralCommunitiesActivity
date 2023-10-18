import React from 'react';
import './EventSubtitle.css';

export default function EventSubtitle({ text }) {
  return (
    <div className="eventSubtitleInList">
      <p>{text}</p>
    </div>
  );
}
