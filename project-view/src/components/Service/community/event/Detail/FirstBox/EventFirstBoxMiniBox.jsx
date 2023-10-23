import React from 'react';
import EventFirstBoxCircleImg from './EventFirstBoxCircleImg';
import EventFirstBoxText from './EventFirstBoxText';
import './EventFirstBoxMiniBox.css';

export default function EventFirstBoxMiniBox({ imgSrc, title, content, type }) {
  const {
    recruitStartDate,
    recruitEndDate,
    startDate,
    endDate,
    maxPeople,
    addr,
  } = content;

  let text;
  if (type === 'recruitDate' && (recruitStartDate || recruitEndDate)) {
    const startDateT = new Date(recruitStartDate);
    const endDateT = new Date(recruitEndDate);

    const startDateText = startDateT
      ? `${startDateT.getMonth() + 1}/${startDateT.getDate()}`
      : '';
    const endDateText = endDateT
      ? `${endDateT.getMonth() + 1}/${endDateT.getDate()}`
      : '';
    text = `${startDateText} ~ ${endDateText}`;
  } else if (type === 'date' && (startDate || endDate)) {
    const startDateT = new Date(startDate);
    const endDateT = new Date(endDate);

    const startDateText = startDateT
      ? `${startDateT.getMonth() + 1}/${startDateT.getDate()}`
      : '';
    const endDateText = endDateT
      ? `${endDateT.getMonth() + 1}/${endDateT.getDate()}`
      : '';
    text = `${startDateText} ~ ${endDateText}`;
  } else if (type === 'maxPeople' && !Number.isNaN(maxPeople)) {
    text = +maxPeople ? `${maxPeople}명` : '-';
  } else if (type === 'addr' && addr) {
    text = addr ? addr : '-';
  } else {
    text = '';
  }

  return (
    <div className="eventFirstBoxMiniBox">
      <EventFirstBoxCircleImg imgSrc={imgSrc} />
      <EventFirstBoxText title={title} content={text} />
    </div>
  );
}
