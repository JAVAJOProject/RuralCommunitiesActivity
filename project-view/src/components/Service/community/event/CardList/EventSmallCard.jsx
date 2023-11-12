import React from 'react';
import './EventSmallCard.css';
import EventSmallCardImg from './EventSmallCardImg';
import EventSmallCardText from './EventSmallCardText';
import { useNavigate } from 'react-router-dom';

export default function EventSmallCard({ contents }) {
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
      className="eventSmallCard"
      onClick={() => {
        navigate(`/app/community/event/board/detail/${eventId}`, {
          state: { boardType: 'card' },
        });
        window.scrollTo(0, 0);
      }}
    >
      <EventSmallCardImg
        on={false}
        imgSrc={eventThumbnailImg}
        favoritesNum={+eventFavoriteCnt}
        eventId={+eventId}
        postTypeId={+postTypeId}
      />
      <EventSmallCardText
        eventTitle={eventName}
        eventContents={rest}
        type={eventRecruitTypeId}
        eventId={+eventId}
      />
    </div>
  );
}