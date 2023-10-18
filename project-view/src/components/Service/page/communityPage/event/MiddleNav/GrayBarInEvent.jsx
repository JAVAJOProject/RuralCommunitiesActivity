import React from 'react';
import './GrayBarInEvent.css';

export default function GrayBarInEvent({ onClick, activeCard }) {
  return (
    <div
      className={
        'grayBarInEvent' +
        (activeCard ? ' grayBarInEventCard' : ' grayBarInEventList')
      }
      onClick={onClick}
    ></div>
  );
}
