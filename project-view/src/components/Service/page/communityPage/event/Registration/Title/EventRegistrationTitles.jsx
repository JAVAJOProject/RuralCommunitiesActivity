import React from 'react';
import EventRegistrationMainTitle from './EventRegistrationMainTitle';
import EventRegistrationSubtitle from './EventRegistrationSubtitle';

export default function EventRegistrationTitles({ titles }) {
  const { main, sub } = titles;

  return (
    <div>
      <EventRegistrationMainTitle title={main} />
      <EventRegistrationSubtitle title={sub} />
    </div>
  );
}
