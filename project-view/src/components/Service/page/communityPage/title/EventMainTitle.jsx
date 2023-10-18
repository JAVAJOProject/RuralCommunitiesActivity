import React from 'react';
import './EventMainTitle.css';

export default function EventMainTitle({ text }) {
  return (
    <div className="eventMainTitleInList">
      <p>{text}</p>
    </div>
  );
}
