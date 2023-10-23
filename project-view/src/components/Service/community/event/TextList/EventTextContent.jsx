import React from 'react';
import './EventTextContent.css';

export default function EventTextContent({ text }) {
  const { title, recruitStartDate, recruitEndDate, maxPeople } = text;

  let content;
  if (title === '인원') {
    content = maxPeople === 0 ? '-' : `${maxPeople}명`;
  } else if (title === '모집') {
    const startDate = recruitStartDate ? new Date(recruitStartDate) : '';
    const startDateText = startDate
      ? `${startDate.getMonth() + 1}/${startDate.getDate()}`
      : '';
    const endDate = recruitEndDate ? new Date(recruitEndDate) : '';
    const endDateText = endDate
      ? `${endDate.getMonth() + 1}/${endDate.getDate()}`
      : '';

    content = `${startDateText} ~ ${endDateText}`;
  }

  return (
    <div className="eventTextListTextBarContentBox">
      <p>
        {title} : {content}
      </p>
    </div>
  );
}
