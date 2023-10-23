import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPageNav from '../MyPageNav/MyPageNav';
import './Nav/MyPageProviderNav.css';

import navImg from '../../../../view_img/Service/myPage/provider/nav.png';

const ProviderNavContents = {
  titleText: '마이 페이지',
  titleImg: {
    imgSrc: navImg,
    className: 'titleNavTextMypageProvider',
  },
  navTexts: [
    { text: '서비스 통계', link: 'analytics' },
    { text: '사업자정보 관리', link: 'businessInfo' },
    { text: '서비스 관리', link: 'myService' },
    { text: '이벤트 관리', link: 'event' },
    { text: '내 글 목록', link: 'post' },
  ],
};

export default function RootLayoutProvider() {
  return (
    <>
      <main className="appMain">
        <MyPageNav navContents={ProviderNavContents} />
        <Outlet />
      </main>
    </>
  );
}