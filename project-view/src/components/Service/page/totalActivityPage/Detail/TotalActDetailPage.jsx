import React from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import EventFirstBox from '../../communityPage/event/Detail/FirstBox/EventFirstBox';
import EventDetailTitle from '../../communityPage/event/Detail/Title/EventDetailTitle';
import EventImageBox from '../../communityPage/event/Detail/ImageBox/EventImageBox';
import EventContentBox from '../../communityPage/event/Detail/ContentBox/EventContentBox';

import recruitImg from '../../../../../view_img/Service/common/recruit.jpg';
import participateImg from '../../../../../view_img/Service/common/participate.jpg';
import maxPeopleImg from '../../../../../view_img/Service/common/headCount.jpg';
import placeImg from '../../../../../view_img/Service/common/locationPin.png';

import testImg1 from '../../../../../view_img/Service/mainPage/testImg/totalActivityTest1.jpg';
import testImg2 from '../../../../../view_img/Service/mainPage/testImg/totalActivityTest2.jpg';
import testImg3 from '../../../../../view_img/Service/mainPage/testImg/totalActivityTest3.jpg';
import TotalBtnBox from './buttons/TotalBtnBox';
import DetailMapApi from './map/DetailMapApi';
import { useNavigate } from 'react-router-dom/dist';

const defaultContents = [
  { title: '모집기간', imgSrc: recruitImg },
  { title: '참여기간', imgSrc: participateImg },
  { title: '인원', imgSrc: maxPeopleImg },
  { title: '장소', imgSrc: placeImg },
];

const testContents = {
  postTypeId: 1,
  postId: 1,
  postTitle: '전통 요리 체험',
  favoriteCnt: 534245,
  viewCnt: 978456,
  recruitStartDate: '2023-09-28',
  recruitEndDate: '2023-10-05',
  startDate: '2023-10-07',
  endDate: '2023-10-14',
  maxPeople: 50,
  addr: '울산광역시 남구 중앙로 201',
  contentText: `<파밍로드: 농행원정대 모집(~10/15)>

지원하기  ➡️  https://goo.gl/forms/fRa4WS2uDPufnCRR2
지금까지 이런 원정은 단 한번도 없었다! 
세상에서 가장 특별한 버스여행 '#농촌로드트립
강원/경상/전라/충청 4개권역 농촌에서 만나는 특색있는 농부들의 이야기를 보고 듣고 전하는 #농행원정대
드디어 모집 시작합니다!

◆모집개요◆
○ 모집 대상: 농업 농촌에 관심있는 청년 누구나 (전공무관/학년무관)
○ 모집 인원: 총 22명
○ 모집 기간: 2017년 9월 28일(목) ~ 2017년 10월 15일(일) 18일간
◆활동 기간◆ 
○ 여행 일정: 11월 4일(토) - 11월 10일(금) 총 6박 7일
○ 사전 모임: 10월 21일(토) - 10월 22일(일) 총 1박 2일
◆활동 내용◆
○ 총 6박7일 농촌버스 전국일주 참가
○ 농업 농촌 관련 미디어 콘텐츠 제작
○ 농업인의날을 알리는 홍보 미션 수행
◆활동 혜택◆
○ 농업인의날 행사추진위원회 수료증 제공
○ 활동 기간 체재비 전액 지원
○ 농업 농촌 관련 단체 및 기업 대표 강의 
○ 관련 분야 및 지역청년들과의 네트워킹
◆지원 방법◆
○ 첨부된 URL을 통한 온라인 지원서 작성 후 제출
>>신청링크: https://goo.gl/forms/fRa4WS2uDPufnCRR2
◆합격자 발표◆ 
○ 10월 18일(수) / SMS를 통한 개별 통보
◆주최/주관◆
○ 주최: 농림축산식품부
○ 주관: 농업인의날 행사추진위원회
 모든 원정대원은 사전모임과 활동에 참석 가능해야 합니다.
 농행원정대의 모든 프로그램은 <농업인의 날> 특집 다큐멘터리로 제작되어 방송될 예정입니다.
 추가 공지사항은 페이스북을 통해 계속 안내 드릴 예정입니다.
 문의사항은 페이스북 메시지나 070-4858-2191로 연락 주시기 바랍니다!`,
  applyBtnTypeId: '',
};

export default function TotalActDetailPage() {
  const navigate = useNavigate();
  const { aPostId } = useParams();
  const [contents, updateContents] = useImmer(testContents);
  const [images, updateImages] = useImmer([testImg1, testImg2, testImg3]);

  return (
    <div>
      <EventDetailTitle contents={contents} />
      <EventFirstBox defaultContents={defaultContents} data={contents} />
      <DetailMapApi addr={contents.addr} locationName={contents.postTitle} />
      <EventImageBox images={images} />
      <EventContentBox content={contents} />
      <TotalBtnBox
        isReservation={true}
        handleNavigate={() => {
          navigate(-1);
        }}
      />
    </div>
  );
}
