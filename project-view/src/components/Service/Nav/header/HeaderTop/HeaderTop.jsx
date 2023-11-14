import React, { useContext, useState } from 'react';
import './HeaderTop.css';
import { useNavigate } from 'react-router-dom';

import { UserInfoContext } from '../../../../../security/UserInfo';
import HeaderTopContent from './HeaderTopContent';
import SiteMap from './SiteMap';
import AppSignInModal from '../../../common/Modal/AppSignInModal';
import AppSiteMap from '../../../common/Modal/AppSiteMap';

import sitemap from '../../../../../view_img/Service/mainPage/sitemap.png';
import AppCheckExistingUser from '../../../common/Modal/AppCheckExistingUser';

const content = {
  projectIntro: '프로젝트 소개',
  login: '로그인',
  logout: '로그아웃',
  mypage: '마이페이지',
  siteMap: sitemap,
};

export default function HeaderTop() {
  const { userInfo, tempChangeUser } = useContext(UserInfoContext);

  const [modalSiteMapOpen, setModalSiteMapOpen] = useState(false);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalCheckExistingUserOpen, setModalCheckExistingUserOpen] =
    useState(false);
  const [selectedMemType, setSelectedMemType] = useState(1);
  const navigate = useNavigate();

  const { projectIntro, login, siteMap, logout, mypage } = content;

  return (
    <>
      <div className="headerTop">
        <HeaderTopContent
          className="projectIntro"
          linkName={projectIntro}
          handleClick={() => {}}
        />
        {userInfo.userRole === 'GUEST' && (
          <HeaderTopContent
            className="login"
            linkName={login}
            handleClick={() => {
              setModalLoginOpen(true);
            }}
          />
        )}
        {['MEMBER', 'SELLER'].includes(userInfo.userRole) && (
          <>
            <HeaderTopContent
              className="logout"
              linkName={logout}
              handleClick={tempChangeUser}
            />
            <HeaderTopContent
              className="mypage"
              linkName={mypage}
              handleClick={() => {
                navigate(
                  userInfo.userRole === 'MEMBER'
                    ? '/app/myInfo/experiencer'
                    : userInfo.userRole === 'SELLER'
                    ? '/app/myInfo/provider'
                    : '/error'
                );
              }}
            />
          </>
        )}
        <SiteMap
          className="siteMap"
          linkPath={siteMap}
          handleClick={() => {
            setModalSiteMapOpen(true);
          }}
        />
      </div>

      <AppSiteMap
        isOpen={modalSiteMapOpen}
        closeModal={() => {
          setModalSiteMapOpen(false);
        }}
      />
      <AppSignInModal
        isOpen={modalLoginOpen}
        closeModal={() => {
          setModalLoginOpen(false);
        }}
        selectedUserType={selectedMemType}
        setSelectedUserType={setSelectedMemType}
        openCheckUserModal={() => {
          setModalCheckExistingUserOpen(true);
        }}
      />
      <AppCheckExistingUser
        isOpen={modalCheckExistingUserOpen}
        closeModal={() => {
          setModalCheckExistingUserOpen(false);
        }}
        selectedMemType={selectedMemType}
        openLoginModal={() => {
          setModalLoginOpen(true);
        }}
      />
    </>
  );
}
