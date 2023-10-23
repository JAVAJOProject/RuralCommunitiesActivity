import React from 'react';
import './EventDetailTitleText.css';

export default function EventDetailTitleText({ text }) {
  return (
    <div className="eventDetailTitleText">
      <p>{text}</p>
    </div>
  );
}
