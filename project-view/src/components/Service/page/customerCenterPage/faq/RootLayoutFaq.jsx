import React from 'react';
import CustomerCenterNav from '../CustomerCenterNav/Nav/CustomerCenterNav';
import { Outlet } from 'react-router-dom';
import './Nav/FaqNav.css';

import faqTitleImg from '../../../../../view_img/Service/customerService/FAQ.jpg';

const FaqNavContent = {
  titleImg: {
    imgSrc: faqTitleImg,
    className: 'titleFaqImg',
  },
  titleText: {
    content: '자주 묻는 질문을 모아두었습니다.',
    className: 'titleFaqText',
  },
  navInnerContent: [
    {
      text: '개인정보',
      link: 'personalInfo',
    },
    {
      text: '예약/결제',
      link: 'reservation',
    },
    {
      text: '이벤트',
      link: 'event',
    },
    {
      text: '기타',
      link: 'extra',
    },
  ],
};

export default function RootLayoutFaq() {
  return (
    <>
      <CustomerCenterNav navContents={FaqNavContent} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
