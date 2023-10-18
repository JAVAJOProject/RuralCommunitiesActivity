import React, { useContext, useEffect } from 'react';
import './HeaderTop.css';
import HeaderTopContent from './HeaderTopContent';
import sitemap from '../../../../../view_img/Service/mainPage/sitemap.png';
import SiteMap from './SiteMap';
import { UserInfoContext } from '../../../../../security/UserInfo';
import { useNavigate } from 'react-router-dom/dist';

const content = {
  projectIntro: '프로젝트 소개',
  login: '로그인',
  logout: '로그아웃',
  mypage: '마이페이지',
  siteMap: sitemap,
};

export default function HeaderTop() {
  const { userInfo, tempChangeUser } = useContext(UserInfoContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo.userRole === 'ADMIN') {
      navigate('/admin');
    }
  }, [userInfo.userRole]);

  const { projectIntro, login, siteMap, logout, mypage } = content;

  return (
    <div className="headerTop">
      <HeaderTopContent
        className="projectIntro"
        linkName={projectIntro}
        linkParam={'#Top'}
      />
      {userInfo.userRole === 'GUEST' && (
        <HeaderTopContent
          className="login"
          linkName={login}
          linkParam={'#'}
          tempOnClick={tempChangeUser}
        />
      )}
      {['MEMBER', 'SELLER'].includes(userInfo.userRole) && (
        <>
          <HeaderTopContent
            className="logout"
            linkName={logout}
            linkParam={'#'}
            tempOnClick={tempChangeUser}
          />
          <HeaderTopContent
            className="mypage"
            linkName={mypage}
            linkParam={'#'}
          />
        </>
      )}
      <SiteMap className="siteMap" linkPath={siteMap} />
    </div>
  );
}
