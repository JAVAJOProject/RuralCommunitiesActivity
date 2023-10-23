import React from 'react';
import './EventBigCardText.css';
import EventBigCardTextList from './EventBigCardTextList';
import EventApplyBtn from '../Buttons/EventApplyBtn';

const listTitle = ['모집기간', '참여기간', '모집인원'];

export default function EventBigCardText({
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
    <div className="eventBigCardTextBox">
      <h3 className="eventBigCardTextTitle">
        {titleText.length > 19 ? titleText.substr(0, 19) + '...' : titleText}
      </h3>
      <ul>
        <EventBigCardTextList
          title={listTitle[0]}
          content={[eventRecruitStartDate, eventRecruitEndDate]}
        />
        <EventBigCardTextList
          title={listTitle[1]}
          content={[eventStartDate, eventEndDate]}
        />
        <EventBigCardTextList title={listTitle[2]} content={[eventMaxPeople]} />
      </ul>
      <EventApplyBtn size={'big'} type={type} postId={eventId} />
    </div>
  );
}