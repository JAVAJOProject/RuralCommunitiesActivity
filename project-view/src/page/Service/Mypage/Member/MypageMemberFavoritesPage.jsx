import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET, fetchImgGET } from '../../../../config/ApiService';

import MypageMemberFavoritesTypeSet from '../../../../components/Service/mypage/Experiencer/Favorites/MypageMemberFavoritesTypeSet';

import favoritesActImg from '../../../../view_img/Service/myPage/experiencer/favoriteAct.jpg';
import favoritesEventImg from '../../../../view_img/Service/myPage/experiencer/favoriteEvent.jpg';

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

export default function MypageMemberFavoritesPage() {
  const [requestPageNoActivity, setRequestPageNoActivity] = useState(1);
  const [totalPageNoActivity, setTotalPageNoActivity] = useState(1);
  const [requestPageNoEvent, setRequestPageNoEvent] = useState(1);
  const [totalPageNoEvent, setTotalPageNoEvent] = useState(1);

  const [favoriteEvent, updateFavoriteEvent] = useImmer([]);
  const [favoriteActivity, updateFavoriteActivity] = useImmer([]);
  const { activityTitle, eventTitle } = defaultContents;

  async function fetchActivityContents() {
    try {
      const favoriteActivityData = await fetchDataGET(
        `/mypage/member/favorite/list/activity/${requestPageNoActivity}`
      );
      const favoriteActivityImg = await fetchImgGET(
        favoriteActivityData,
        'aId',
        '/main/total-activity-image'
      );
      updateFavoriteActivity((draft) => {
        draft.length = 0;
        favoriteActivityData.forEach((item, index) => {
          draft.push({
            ...item,
            postId: item.aId,
            postTitle: item.aName,
            oneLiner: item.aOneLiner,
            thumbnailImg: favoriteActivityImg[index],
          });
        });
      });
      const [perPagePostCountActivity, totalPostNoActivity] =
        await fetchDataGET('/mypage/member/favorite/list/activity/total-count');
      setTotalPageNoActivity(
        Math.ceil(+totalPostNoActivity / +perPagePostCountActivity)
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchEventContents() {
    try {
      const favoriteEventData = await fetchDataGET(
        `/mypage/member/favorite/list/event/${requestPageNoEvent}`
      );
      const favoriteEventImg = await fetchImgGET(
        favoriteEventData,
        'eventId',
        '/main/event-image'
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
      const [perPagePostCountEvent, totalPostNoEvent] = await fetchDataGET(
        '/mypage/member/favorite/list/event/total-count'
      );
      setTotalPageNoEvent(
        Math.ceil(+totalPostNoEvent / +perPagePostCountEvent)
      );
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchActivityContents();
  }, [requestPageNoActivity]);
  useEffect(() => {
    fetchEventContents();
  }, [requestPageNoEvent]);

  return (
    <main className="appMain">
      <MypageMemberFavoritesTypeSet
        defaultContents={activityTitle}
        dbContents={favoriteActivity}
        requestPageNo={requestPageNoActivity}
        totalPageNo={totalPageNoActivity}
        handleRequestPageNo={setRequestPageNoActivity}
        link={(postId) => `/app/activity/detail/${postId}/info`}
      />
      <MypageMemberFavoritesTypeSet
        defaultContents={eventTitle}
        dbContents={favoriteEvent}
        requestPageNo={requestPageNoEvent}
        totalPageNo={totalPageNoEvent}
        handleRequestPageNo={setRequestPageNoEvent}
        link={(postId) => `/app/community/event/board/detail/${postId}`}
      />
    </main>
  );
}
