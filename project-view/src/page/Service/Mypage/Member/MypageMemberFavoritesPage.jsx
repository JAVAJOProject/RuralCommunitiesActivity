import React, { useEffect, useState } from 'react';

import MypageMemberFavoritesTypeSet from '../../../../components/Service/mypage/Experiencer/Favorites/MypageMemberFavoritesTypeSet';

import favoritesActImg from '../../../../view_img/Service/myPage/experiencer/favoriteAct.jpg';
import favoritesEventImg from '../../../../view_img/Service/myPage/experiencer/favoriteEvent.jpg';

import testImg from '../../../../view_img/Service/mainPage/testImg/totalActivityTest1.jpg';
import { fetchDataGET, fetchImgGET } from '../../../../config/ApiService';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';
import titleImg from '../../../../view_img/Service/myPage/experiencer/event.jpg';
import { useImmer } from 'use-immer';

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

  const [favoriteEvent, updateFavoriteEvent] = useImmer([]);
  const { activityTitle, eventTitle } = defaultContents;

  async function fetchEventContents() {
    try {
      const favoriteEventData = await fetchDataGET(
        `/mypage/member/favorite/list/event/${requestPageNoEvent}`
      );
      const favoriteEventImg = await fetchImgGET(
        favoriteEventData,
        'eventId',
        `/main/event-image`
      );
      updateFavoriteEvent((draft) => {
        draft.length = 0;
        favoriteEventData.forEach((item, index) => {
          draft.push({
            ...item,
            postId: item.eventId,
            postTitle: item.eventName,
            oneLiner: item.eventContent,
            thumbnailImg: favoriteEventImg[index],
          });
        });
      });
      // const [perPagePostCountEvent, totalPostNoEvent] = fetchDataGET("/mypage/member/favorites/total-page");
      const [perPagePostCountEvent, totalPostNoEvent] = [6, 9];
      setTotalPageNoEvent(
        Math.ceil(+totalPostNoEvent / +perPagePostCountEvent)
      );
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchEventContents();
  }, [requestPageNoEvent]);

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
        dbContents={favoriteEvent}
        requestPageNo={requestPageNoEvent}
        totalPageNo={totalPageNoEvent}
        handleRequestPageNo={setRequestPageNoEvent}
      />
    </main>
  );
}
