import React from 'react';
import InquiryListTitle from './ListTitle/InquiryListTitle';

import inquiryImg from '../../../../view_img/Service/customerService/InquiryList.jpg';
import { Outlet } from 'react-router-dom';

const contents = {
  imgSrc: inquiryImg,
  text: '문의글 목록',
};

export default function RootLayoutInquiryTitle() {
  const { imgSrc, text } = contents;

  return (
    <main className="appMain">
      <InquiryListTitle imgSrc={imgSrc} text={text} />
      <Outlet />
    </main>
  );
}