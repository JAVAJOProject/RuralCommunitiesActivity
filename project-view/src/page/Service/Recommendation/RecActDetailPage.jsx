import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom/dist';

import EventDetailTitle from '../../../components/Service/community/event/Detail/Title/EventDetailTitle';
import EventImageBox from '../../../components/Service/community/event/Detail/ImageBox/EventImageBox';
import EventContentBox from '../../../components/Service/community/event/Detail/ContentBox/EventContentBox';

import recruitImg from '../../../view_img/Service/common/recruit.jpg';
import participateImg from '../../../view_img/Service/common/participate.jpg';
import maxPeopleImg from '../../../view_img/Service/common/headCount.jpg';
import placeImg from '../../../view_img/Service/common/locationPin.png';
import TotalBtnBox from '../../../components/Service/totalActivity/Detail/buttons/TotalBtnBox';
import RecActSellerInfoBox from '../../../components/Service/recActivity/Detail/RecActSellerInfoBox';
import DetailMapApi from '../../../components/Service/totalActivity/Detail/map/DetailMapApi';

import testImg1 from '../../../view_img/Service/mainPage/testImg/totalActivityTest1.jpg';
import testImg2 from '../../../view_img/Service/mainPage/testImg/totalActivityTest2.jpg';
import testImg3 from '../../../view_img/Service/mainPage/testImg/totalActivityTest3.jpg';

const defaultContents = {
  firstBox: [
    { title: '모집기간', imgSrc: recruitImg },
    { title: '참여기간', imgSrc: participateImg },
    { title: '인원', imgSrc: maxPeopleImg },
    { title: '장소', imgSrc: placeImg },
  ],
  sellerInfo: {
    title: '위 체험을 제공하는 빛길 지키미의 정보 보기',
    content: {
      tel: '연락처',
      site: '홈페이지',
      mail: '메일',
      location: '위치',
      info: '시설 정보',
    },
  },
};

const testContents = {
  postTypeId: 1,
  recAPostId: 1,
  recAId: null,
  // recAId: 1,
  recALikeCnt: 534245,
  recAViewCnt: 978456,
  recATitle: '추천 체험 제목',
  recAContent: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,

  aAddr: '분당',
  aReservationDeadline: '2023-10-05',
  aStartDate: '2023-10-07',
  aEndDate: '2023-10-14',
  aMaxPeople: 50,

  applyBtnTypeId: '',
  sId: 1,
  sTel: '010-1234-1234',
  sSite: 'http://www.wooril.javajo/',
  sEmail: 'wooril@javajo.com',
  sAddr: '서울 강남구 테헤란로',

  info: '주차장, 텃밭, 바베큐주차장, 텃밭, 바베큐, 주차장, 텃밭, 바베큐주차장, 텃밭, 바베큐',
};

export default function RecActDetailPage() {
  const navigate = useNavigate();
  const { recAPostId } = useParams();
  const [contents, updateContents] = useImmer({});
  const [images, updateImages] = useImmer([testImg1, testImg2, testImg3]);
  const { firstBox, sellerInfo } = defaultContents;

  useEffect(() => {
    updateContents((draft) => {
      draft.postTypeId = testContents.postTypeId;
      draft.postId = testContents.recAPostId;
      draft.postTitle = testContents.recATitle;
      draft.likeCnt = testContents.recALikeCnt;
      draft.viewCnt = testContents.recAViewCnt;
      draft.recruitEndDate = testContents.aReservationDeadline;
      draft.startDate = testContents.aStartDate;
      draft.endDate = testContents.aEndDate;
      draft.maxPeople = testContents.aMaxPeople;
      draft.addr = testContents.aAddr;
      draft.contentText = testContents.recAContent;
      draft.applyBtnTypeId = testContents.recAId;
    });
    updateImages((draft) => [...images]);
  }, [recAPostId]);

  return (
    <div style={{ marginTop: '3.5rem' }}>
      {contents?.postTitle && <EventDetailTitle contents={contents} />}
      {contents?.addr && contents?.postTitle && (
        <DetailMapApi addr={contents.addr} locationName={contents.postTitle} />
      )}
      {images.length > 0 && <EventImageBox images={images} />}
      {contents?.postId && <EventContentBox content={contents} />}
      {contents?.sId && (
        <RecActSellerInfoBox sellerInfo={sellerInfo} contents={contents} />
      )}
      <TotalBtnBox
        isReservation={contents?.recAId ?? false}
        handleNavigate={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}
