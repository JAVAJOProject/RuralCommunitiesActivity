import React from 'react';
import CustomerCenterNav from '../CustomerCenterNav/Nav/CustomerCenterNav';
import { Outlet } from 'react-router-dom';
import './Nav/NoticeNav.css';

import noticeTitleImg from '../../../../../view_img/Service/customerService/Notice.svg';

const NoticeNavContent = {
  titleImg: {
    imgSrc: noticeTitleImg,
    className: 'titleNoticeImg',
  },
  titleText: {
    content: '공지사항',
    className: 'titleNoticeText',
  },
  navInnerContent: [
    {
      text: '전체 목록',
      link: 'completeList',
    },
    {
      text: '공지',
      link: 'notification',
    },
    {
      text: '정책',
      link: 'policy',
    },
    {
      text: '행사',
      link: 'event',
    },
  ],
};

export default function RootLayoutFaq() {
  return (
    <main className="appMain">
      <CustomerCenterNav navContents={NoticeNavContent} />
      <div>
        <Outlet />
      </div>
    </main>
  );
}
