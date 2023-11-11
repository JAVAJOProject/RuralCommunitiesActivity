import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './AppSiteMap.css';
import { useNavigate } from 'react-router-dom';

import adminImg from '../../../../view_img/Service/common/admin.jpg';

const menus = [
  {
    title: '추천 체험',
    link: '/app/recommendation',
    contents: [
      { text: '키워드 추천', link: '/app/recommendation/keywordActivity' },
      { text: '지도 콕콕', link: '/app/recommendation/region' },
      { text: '마을 도감', link: '/app/recommendation/villageGuide' },
    ],
  },
  {
    title: '전체 체험',
    link: '/app/activity',
    contents: [
      { text: '테마별 체험', link: '/app/activity/theme' },
      { text: '지역별 체험', link: '/app/activity/region' },
      { text: '농촌관광등급', link: '/app/activity/grade' },
      { text: '민박', link: '/app/activity/grade' },
    ],
  },
  {
    title: '커뮤니티',
    link: '/app/community',
    contents: [
      { text: '이벤트', link: '/app/community/event' },
      { text: '소통 공간', link: '/app/community/bulletinBoard' },
      { text: '마을 소식', link: '/app/community/news' },
    ],
  },
  {
    title: '고객센터',
    link: '/app/customerService',
    contents: [
      { text: '공지사항', link: '/app/customerService/notice' },
      { text: 'FAQ', link: '/app/customerService/faq' },
      { text: '문의글 목록', link: '/app/customerService/inquiry' },
      { text: '1:1 문의', link: '/app/customerService/inquiry/post' },
    ],
  },
];
const admin = {
  text: '관리자 페이지로 이동하기',
  link: '/admin',
  imgSrc: adminImg,
};

export default function AppSiteMap({ isOpen, closeModal }) {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    closeModal();
    navigate(link);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;
		`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [isOpen]);

  const appSiteMapModalStyles = {
    overlay: {
      backgroundColor: 'rgba(127, 127, 127, 0.58)',
      width: '100%',
      height: '100vh',
      zIndex: '1000',
      top: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: 'fit-content',
      inset: 'unset',
      padding: '0',
      border: 'none',
      borderRadius: '1.25rem',
      backgroundColor: '#fff',
      position: 'relative',
    },
  };

  return (
    <Modal isOpen={isOpen} style={appSiteMapModalStyles}>
      <div className="appSiteMapModal">
        <div className="appSiteMapModalClose">
          <button onClick={closeModal}>
            <p>x</p>
          </button>
        </div>
        <div className="appSiteMapModalMenus">
          {menus.map((menu) => (
            <div>
              <h3
                onClick={() => {
                  handleNavigate(menu.link);
                }}
              >
                {menu.title}
              </h3>
              <div>
                {menu.contents.map((item) => (
                  <p
                    onClick={() => {
                      handleNavigate(item.link);
                    }}
                  >
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="navigateToAdmin">
          <p
            onClick={() => {
              handleNavigate(admin.link);
            }}
          >
            {admin.text}
          </p>
          <img
            src={admin.imgSrc}
            alt=""
            onClick={() => {
              handleNavigate(admin.link);
            }}
          />
        </div>
      </div>
    </Modal>
  );
}
