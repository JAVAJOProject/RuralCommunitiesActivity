import React from 'react';
import './EventBigCards.css';
import EventBigCard from './EventBigCard';

export default function EventBigCards({ contents }) {
  return (
    <div className="eventBigCards">
      {contents.map((item) => (
        <EventBigCard key={item.eventId} contents={item} />
      ))}
    </div>
  );
}
