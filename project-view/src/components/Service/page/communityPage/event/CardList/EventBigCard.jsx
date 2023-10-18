import React from 'react';
import './EventBigCard.css';
import EventBigCardImg from './EventBigCardImg';
import EventBigCardText from './EventBigCardText';
import { useNavigate } from 'react-router-dom';

export default function EventBigCard({ contents }) {
  const navigate = useNavigate();
  const {
    eventId,
    postTypeId,
    eventRecruitTypeId,
    eventName,
    eventThumbnailImg,
    eventFavoriteCnt,
    ...rest
  } = contents;

  return (
    <div
      className="eventBigCard"
      onClick={() => {
        navigate(`/app/community/event/board/detail/${eventId}`, {
          state: { boardType: 'card' },
        });
      }}
    >
      <EventBigCardImg
        imgSrc={eventThumbnailImg}
        favoritesNum={eventFavoriteCnt}
        eventId={eventId}
        postTypeId={postTypeId}
      />
      <EventBigCardText
        eventTitle={eventName}
        eventContents={rest}
        type={eventRecruitTypeId}
        eventId={eventId}
      />
    </div>
  );
}
