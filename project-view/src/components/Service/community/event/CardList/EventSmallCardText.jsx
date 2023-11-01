import React from 'react';
import './EventSmallCardText.css';
import EventSmallCardTextList from './EventSmallCardTextList';
import EventApplyBtn from '../Buttons/EventApplyBtn';

const listTitle = ['모집기간', '참여기간', '모집인원'];

export default function EventSmallCardText({
  eventTitle,
  eventContents,
  type,
  eventId,
}) {
  const {
    eventRecruitStartDate,
    eventRecruitEndDate,
    eventStartDate,
    eventEndDate,
    eventMaxPeople,
  } = eventContents;
  const titleText = '' + eventTitle;

  return (
    <div className="eventSmallCardTextBox">
      <h3 className="eventSmallCardTextTitle">
        {titleText.length > 16 ? titleText.substr(0, 16) + '...' : titleText}
      </h3>
      <ul>
        <EventSmallCardTextList
          title={listTitle[0]}
          content={[eventRecruitStartDate, eventRecruitEndDate]}
        />
        <EventSmallCardTextList
          title={listTitle[1]}
          content={[eventStartDate, eventEndDate]}
        />
        <EventSmallCardTextList
          title={listTitle[2]}
          content={[eventMaxPeople]}
        />
      </ul>
      <EventApplyBtn
        size={'small'}
        type={type}
        link={`/app/community/event/apply/${eventId}`}
      />
    </div>
  );
}
