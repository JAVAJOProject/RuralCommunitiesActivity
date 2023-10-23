import React from 'react';
import './EventFirstBoxText.css';

export default function EventFirstBoxText({ title, content }) {
  return (
    <div className="eventFirstBoxText">
      <p>
        {title} : {content}
      </p>
    </div>
  );
}
