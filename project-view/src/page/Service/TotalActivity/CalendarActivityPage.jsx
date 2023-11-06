import React, { useState } from 'react';
import { useImmer } from 'use-immer';

import TotalActivityCalendar from '../../../components/Service/totalActivity/Calendar/TotalActivityCalendar';
import TotalActivityCalendarContents from '../../../components/Service/totalActivity/Calendar/TotalActivityCalendarContents';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';

import testImg from '../../../view_img/Service/mainPage/testImg/circleTest5.jpg';

const testDateContents = [
  { day: 1, count: 5 },
  { day: 2, count: 15 },
  { day: 3, count: 5 },
  { day: 4, count: 0 },
  { day: 5, count: 5 },
  { day: 6, count: 1 },
  { day: 7, count: 5 },
  { day: 8, count: 3 },
  { day: 9, count: 2 },
  { day: 10, count: 7 },
  { day: 11, count: 10 },
  { day: 12, count: 15 },
  { day: 13, count: 10 },
  { day: 14, count: 12 },
  { day: 15, count: 15 },
  { day: 16, count: 20 },
  { day: 17, count: 8 },
  { day: 18, count: 36 },
  { day: 19, count: 20 },
  { day: 20, count: 25 },
  { day: 21, count: 27 },
  { day: 22, count: 40 },
  { day: 23, count: 45 },
  { day: 24, count: 155 },
  { day: 25, count: 55 },
  { day: 26, count: 45 },
  { day: 27, count: 50 },
  { day: 28, count: 30 },
  { day: 29, count: 99 },
  { day: 30, count: 100 },
  { day: 31, count: 0 },
];

const testDataContents = [
  {
    aPostId: 1,
    aName: '체험 이름',
    aThumbnailImg: testImg,
    aFavoriteCnt: 245530,
    aOneLiner: '체험 한 줄 소개',
  },
  {
    aPostId: 2,
    aName: '체험 이름',
    aThumbnailImg: testImg,
    aFavoriteCnt: 245530,
    aOneLiner: '체험 한 줄 소개',
  },
  {
    aPostId: 3,
    aName: '체험 이름',
    aThumbnailImg: testImg,
    aFavoriteCnt: 245530,
    aOneLiner: '체험 한 줄 소개',
  },
  {
    aPostId: 4,
    aName: '체험 이름',
    aThumbnailImg: testImg,
    aFavoriteCnt: 245530,
    aOneLiner: '체험 한 줄 소개',
  },
  {
    aPostId: 5,
    aName: '체험 이름',
    aThumbnailImg: testImg,
    aFavoriteCnt: 245530,
    aOneLiner: '체험 한 줄 소개',
  },
  {
    aPostId: 6,
    aName: '체험 이름',
    aThumbnailImg: testImg,
    aFavoriteCnt: 245530,
    aOneLiner: '체험 한 줄 소개',
  },
];

export default function CalendarActivityPage() {
  const [dateContents, updateDateContents] = useImmer(testDateContents); //날짜당 개수
  const [contents, updateContents] = useImmer(testDataContents); // 카드형으로 뜨는 체험
  const [selectedDate, setSelectedDate] = useState(null); //날짜 선택시 필터링을 위한 상태값(개수 선택마다 바뀜, 기본값 null, 같은 값 다시 선택시 null)

  return (
    <>
      <TotalActivityCalendar
        contents={dateContents}
        selectedDate={selectedDate}
        handleSelectedDate={setSelectedDate}
      />
      <TotalActivityCalendarContents dataList={contents} />
      <div style={{ marginBottom: '-3rem' }}>
        <PageNoBox curr={1} total={6} />
      </div>
    </>
  );
}
