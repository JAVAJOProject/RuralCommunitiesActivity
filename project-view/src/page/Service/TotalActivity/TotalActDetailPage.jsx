import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom/dist';
import { fetchDataGET, fetchOneContentGET } from '../../../config/ApiService';

import EventFirstBox from '../../../components/Service/community/event/Detail/FirstBox/EventFirstBox';
import EventDetailTitle from '../../../components/Service/community/event/Detail/Title/EventDetailTitle';
import EventImageBox from '../../../components/Service/community/event/Detail/ImageBox/EventImageBox';
import EventContentBox from '../../../components/Service/community/event/Detail/ContentBox/EventContentBox';
import TotalBtnBox from '../../../components/Service/totalActivity/Detail/buttons/TotalBtnBox';
import DetailMapApi from '../../../components/Service/totalActivity/Detail/map/DetailMapApi';

import recruitImg from '../../../view_img/Service/common/recruit.jpg';
import participateImg from '../../../view_img/Service/common/participate.jpg';
import placeImg from '../../../view_img/Service/common/locationPin.png';
import maxPeopleImg from '../../../view_img/Service/common/headCount.jpg';

const defaultContents = [
  { title: '모집기간', imgSrc: recruitImg },
  { title: '참여기간', imgSrc: participateImg },
  { title: '인원', imgSrc: maxPeopleImg },
  { title: '장소', imgSrc: placeImg },
];

export default function TotalActDetailPage() {
  const navigate = useNavigate();
  const { aPostId } = useParams();
  const [activityContents, updateActivityContents] = useImmer({});
  const [activityImages, updateActivityImages] = useImmer([]);

  useEffect(() => {
    async function fetchContents() {
      try {
        const data = await fetchOneContentGET(
          `/totalActivityContent/one/${aPostId}`
        );
        const images = await fetchDataGET(
          `/img/totalActivityImage/list/${data.aImgId}`
        );
        updateActivityContents((draft) => {
          draft.postId = data.aPostId;
          draft.addr = data.aAddr;
          draft.postTitle = data.aName;
          draft.recruitStartDate = '';
          draft.recruitEndDate = data.aReservationDeadline;
          draft.startDate = data.aStartDate;
          draft.endDate = data.aEndDate;
          draft.maxPeople = data.aMaxPeople;
          draft.viewCnt = data.aViewCnt;
          draft.favoriteCnt = data.aFavoriteCnt;
          draft.contentText = data.aPostContent;
        });
        updateActivityImages((draft) => [...images]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [aPostId]); //aPostId가 바뀌면 상태 업데이트(클릭하면)

  return (
    <div>
      <EventDetailTitle contents={activityContents} />
      <EventFirstBox
        defaultContents={defaultContents}
        data={activityContents}
      />
      {activityContents.aReservationDeadline}
      {activityContents.addr && activityContents.postTitle && (
        <DetailMapApi
          addr={activityContents.addr}
          locationName={activityContents.postTitle}
        />
      )}
      <EventImageBox images={activityImages} />
      <EventContentBox content={activityContents} />
      <TotalBtnBox
        postId={aPostId}
        isReservation={true}
        handleNavigate={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}
