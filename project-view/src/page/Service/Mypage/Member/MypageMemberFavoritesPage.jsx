import React, { useState } from 'react';

import favoritesActImg from '../../../../view_img/Service/myPage/experiencer/favoriteAct.jpg';
import favoritesEventImg from '../../../../view_img/Service/myPage/experiencer/favoriteEvent.jpg';
import MypageMemberFavoritesTypeSet from '../../../../components/Service/mypage/Experiencer/Favorites/MypageMemberFavoritesTypeSet';

import testImg from '../../../../view_img/Service/mainPage/testImg/totalActivityTest1.jpg';

const defaultContents = {
  activityTitle: {
    title: '체험 찜',
    imgSrc: favoritesActImg,
    backgroundColor: '#F8F8F8',
  },
  eventTitle: {
    title: '이벤트 찜',
    imgSrc: favoritesEventImg,
    backgroundColor: '#FFFDE8',
  },
};

const testContents = [
  {
    postId: 1,
    thumbnailImg: testImg,
    postTitle: '체험 이름',
    oneLiner: '체험 한줄 소개 체험 한줄 소개 체험 한줄 소개',
  },
  {
    postId: 2,
    thumbnailImg: testImg,
    postTitle: '체험 이름',
    oneLiner: '체험 한줄 소개 체험 한줄 소개 체험 한줄 소개',
  },
  {
    postId: 3,
    thumbnailImg: testImg,
    postTitle: '체험 이름',
    oneLiner: '체험 한줄 소개 체험 한줄 소개 체험 한줄 소개',
  },
  {
    postId: 4,
    thumbnailImg: testImg,
    postTitle: '체험 이름',
    oneLiner: '체험 한줄 소개 체험 한줄 소개 체험 한줄 소개',
  },
  {
    postId: 5,
    thumbnailImg: testImg,
    postTitle: '체험 이름',
    oneLiner: '체험 한줄 소개 체험 한줄 소개 체험 한줄 소개',
  },
  {
    postId: 6,
    thumbnailImg: testImg,
    postTitle: '체험 이름',
    oneLiner: '체험 한줄 소개 체험 한줄 소개 체험 한줄 소개',
  },
];

export default function MypageMemberFavoritesPage() {
  const [requestPageNoActivity, setRequestPageNoActivity] = useState(1);
  const [totalPageNoActivity, setTotalPageNoActivity] = useState(1);
  const [requestPageNoEvent, setRequestPageNoEvent] = useState(1);
  const [totalPageNoEvent, setTotalPageNoEvent] = useState(1);

  const { activityTitle, eventTitle } = defaultContents;

  return (
    <main className="appMain">
      <MypageMemberFavoritesTypeSet
        defaultContents={activityTitle}
        dbContents={testContents}
        requestPageNo={requestPageNoActivity}
        totalPageNo={totalPageNoActivity}
        handleRequestPageNo={setRequestPageNoActivity}
      />
      <MypageMemberFavoritesTypeSet
        defaultContents={eventTitle}
        dbContents={testContents}
        requestPageNo={requestPageNoEvent}
        totalPageNo={totalPageNoEvent}
        handleRequestPageNo={setRequestPageNoEvent}
      />
    </main>
  );
}
