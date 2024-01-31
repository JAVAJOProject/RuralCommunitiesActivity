import React from 'react';
import './NavAdmin.css';
import LogoAdmin from './LogoAdmin';

import userImg from '../../../../view_img/Admin/common/memManagement.png';
import boardImg from '../../../../view_img/Admin/common/boardManagement.png';
import reservationImg from '../../../../view_img/Admin/common/reservationManagement.png';
import analyticsImg from '../../../../view_img/Admin/common/analyticsManagement.png';
import serviceImg from '../../../../view_img/Admin/common/serviceManagement.png';
import NavTab from './NavTab';

const mainLink = '/admin';
const contents = [
  {
    title: '회원 관리',
    titleImg: userImg,
    type: null,
    contents: [
      {
        title: '운영자 관리',
        link: 'user/administrator/list',
        type: 'content',
        contents: [
          {
            text: '운영자 등록',
            link: 'user/administrator/registration',
            type: '',
          },
        ],
      },
      {
        title: '서비스 이용자 관리',
        link: 'user/experiencer/list',
        type: 'content',
        contents: [
          {
            text: '서비스 이용자 등록',
            link: 'user/experiencer/registration',
            type: '',
          },
        ],
      },
      {
        title: '서비스 제공자 관리',
        link: 'user/provider/list',
        type: 'content',
        contents: [
          {
            text: '서비스 제공자 등록',
            link: 'user/provider/registration',
            type: '',
          },
        ],
      },
      {
        title: '가입 승인 요청',
        type: 'subcontent',
        link: 'user/membershipApproval',
      },
    ],
  },
  {
    title: '게시판 관리',
    titleImg: boardImg,
    type: null,
    contents: [
      { title: '공지사항', link: 'board/notice', type: 'subcontent' },
      { title: '추천 목록', link: 'board/recommendation', type: 'subcontent' },
      { title: '전체 목록', link: 'board/totalActivity', type: 'subcontent' },
      {
        title: '커뮤니티',
        link: 'board/community/experiencer',
        type: 'subtitle',
        contents: [
          {
            text: '소통공간',
            link: 'board/community/experiencer',
            type: '',
          },
          {
            text: '마을소식',
            link: 'board/community/provider',
            type: '',
          },
        ],
      },
      {
        title: '이벤트',
        link: 'board/event/list',
        type: 'subtitle',
        contents: [
          { text: '이벤트 조회', link: 'board/event/list', type: '' },
          { text: '이벤트 요청', link: 'board/event/request', type: '' },
        ],
      },
    ],
  },
  {
    title: '예약 관리',
    titleImg: reservationImg,
    type: null,
    contents: [
      {
        title: '서비스 이용자 예약내역',
        link: 'reservation/experiencer',
        type: 'subcontent',
      },
      {
        title: '서비스 제공자 예약내역',
        link: 'reservation/provider',
        type: 'subcontent',
      },
    ],
  },
  {
    title: '통계 관리',
    titleImg: analyticsImg,
    type: null,
    contents: [
      { title: '예약 통계', link: 'analytics/reservation', type: 'subcontent' },
      { title: '접속 통계', link: 'analytics/access', type: 'subcontent' },
    ],
  },
  {
    title: '서비스 관리',
    titleImg: serviceImg,
    type: null,
    contents: [
      { title: '문의 관리', link: 'service/inquiry', type: 'subcontent' },
      { title: '신고 관리', link: 'service/report', type: 'subcontent' },
    ],
  },
];

export default function NavAdmin() {
  return (
    <div className="adminNavBox">
      <LogoAdmin link={mainLink} />
      <div>
        {contents.map((content, index) => (
          <NavTab key={index} titleInfo={content} />
        ))}
      </div>
    </div>
  );
}
