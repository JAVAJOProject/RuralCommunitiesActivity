import React from 'react';
import './EventSmallCards.css';
import EventSmallCard from './EventSmallCard';
import range from '../../../../../../utils/range';

export default function EventSmallCards({ contents }) {
  const keys = range(contents.length, 0);

  return (
    <div className="eventSmallCards">
      {contents.map((item, index) => (
        <EventSmallCard key={keys[index]} contents={item} />
      ))}
    </div>
  );
}
