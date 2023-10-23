import React from 'react';
import EventMainTitle from './EventMainTitle';
import EventSubtitle from './EventSubtitle';
import './EventTitleSet.css';

export default function EventTitleSet({ text }) {
  const { mainTitleText, subtitleText } = text;

  return (
    <div className="eventTitleSet">
      <EventMainTitle text={mainTitleText} />
      <EventSubtitle text={subtitleText} />
    </div>
  );
}
