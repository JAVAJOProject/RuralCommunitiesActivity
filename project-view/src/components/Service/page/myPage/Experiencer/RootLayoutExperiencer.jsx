import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPageNav from '../MyPageNav/MyPageNav';
import './Nav/MyPageExperiencerNav.css';

import navImg from '../../../../../view_img/Service/myPage/experiencer/nav.png';

const ExperiencerNavContents = {
  titleText: '마이 페이지',
  titleImg: {
    imgSrc: navImg,
    className: 'titleNavTextMypageExperiencer',
  },
  navTexts: [
    { text: '개인정보 관리', link: 'personalInfo' },
    { text: '예약/결제', link: 'reservation' },
    { text: '이벤트 참여 목록', link: 'event' },
    { text: '찜 목록', link: 'favorites' },
    { text: '후기 목록', link: 'review' },
    { text: '내 글 목록', link: 'post' },
  ],
};

export default function RootLayoutExperiencer() {
  return (
    <>
      <MyPageNav navContents={ExperiencerNavContents} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
