import React from 'react';
import './EventTextBar.css';
import OnlyFavoritesImg from '../../../common/Favorite/OnlyFavoritesImg';
import EventTextBarImg from './EventTextBarImg';
import EventTextContent from './EventTextContent';

import EventTextTitle from './EventTextTitle';
import EventApplyBtn from '../Buttons/EventApplyBtn';
import { useNavigate } from 'react-router-dom';

const contentType = {
  recruit: '모집',
  maxPeople: '인원',
};

export default function EventTextBar({ contents }) {
  const navigate = useNavigate();
  const {
    eventId,
    postTypeId,
    eventRecruitTypeId,
    eventName,
    eventThumbnailImg,
    eventRecruitStartDate,
    eventRecruitEndDate,
    eventMaxPeople,
    eventFavoriteCnt
  } = contents;

  return (
    <div
      className="eventTextListTextBarBox"
      onClick={() => {
        navigate(`/app/community/event/board/detail/${eventId}`, {
          state: { boardType: 'list' },
        });
      }}
    >
      <OnlyFavoritesImg on={false} postId={+eventId} postTypeId={+postTypeId} favoritesNum={+eventFavoriteCnt} />
      <EventTextBarImg imgSrc={eventThumbnailImg} />
      <EventTextTitle text={eventName} />
      <EventTextContent
        text={{
          title: contentType.recruit,
          recruitStartDate: eventRecruitStartDate,
          recruitEndDate: eventRecruitEndDate,
        }}
      />
      <EventTextContent
        text={{ title: contentType.maxPeople, maxPeople: eventMaxPeople }}
      />
      <EventApplyBtn
        size="small"
        type={eventRecruitTypeId}
        link={`/app/community/event/apply/${eventId}`}
      />
    </div>
  );
}