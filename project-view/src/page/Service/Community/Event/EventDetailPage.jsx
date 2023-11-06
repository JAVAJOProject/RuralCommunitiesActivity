import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import {
  fetchDataGET,
  fetchOneContentGET,
} from '../../../../config/ApiService';

import EventFirstBox from '../../../../components/Service/community/event/Detail/FirstBox/EventFirstBox';
import EventDetailTitle from '../../../../components/Service/community/event/Detail/Title/EventDetailTitle';
import EventImageBox from '../../../../components/Service/community/event/Detail/ImageBox/EventImageBox';
import EventContentBox from '../../../../components/Service/community/event/Detail/ContentBox/EventContentBox';
import ApplyBtnSet from '../../../../components/Service/community/event/Detail/UI/ApplyBtnSet/ApplyBtnSet';

import recruitImg from '../../../../view_img/Service/common/recruit.jpg';
import participateImg from '../../../../view_img/Service/common/participate.jpg';
import maxPeopleImg from '../../../../view_img/Service/common/headCount.jpg';
import placeImg from '../../../../view_img/Service/common/locationPin.png';

const defaultContents = [
  { title: '모집기간', imgSrc: recruitImg },
  { title: '참여기간', imgSrc: participateImg },
  { title: '인원', imgSrc: maxPeopleImg },
  { title: '장소', imgSrc: placeImg },
];

export default function EventDetailPage() {
  const { eventId } = useParams();
  const [eventContents, updateEventContents] = useImmer({});
  const [eventImages, updateEventImages] = useImmer([]);

  useEffect(() => {
    async function fetchContents() {
      try {
        const data = await fetchOneContentGET(`/event/event-detail/${eventId}`);
        const images = await fetchDataGET(
          `/event/event-image/${data.eventImgId}`
        );
        updateEventContents((draft) => {
          draft.postTypeId = data.postTypeId;
          draft.postId = data.eventId;
          draft.postTitle = data.eventName;
          draft.favoriteCnt = data.eventFavoriteCnt;
          draft.viewCnt = data.eventViewCnt;
          draft.recruitStartDate = data.eventRecruitStartDate;
          draft.recruitEndDate = data.eventRecruitEndDate;
          draft.startDate = data.eventStartDate;
          draft.endDate = data.eventEndDate;
          draft.maxPeople = data.eventMaxPeople;
          draft.addr = data.eventAddr;
          draft.contentText = data.eventContent;
          draft.applyBtnTypeId = data.eventRecruitTypeId;
        });
        updateEventImages((draft) => [...images]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [eventId]);

  return (
    <div>
      <EventDetailTitle contents={eventContents} />
      <EventFirstBox defaultContents={defaultContents} data={eventContents} />
      <EventImageBox images={eventImages} />
      <EventContentBox content={eventContents} />
      <ApplyBtnSet
        content={eventContents}
        applyLink={`/app/community/event/apply/${eventId}`}
      />
    </div>
  );
}
