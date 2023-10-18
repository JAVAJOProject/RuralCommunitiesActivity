import React, { useContext, useEffect } from 'react';
import AdminDashboardNav from './AdminDashboardNav';
import AdminLoginState from './AdminLoginState';
import AdminLogoutBtn from './AdminLogoutBtn';
import './AdminTopNav.css';
import { useNavigate } from 'react-router-dom';
import { UserInfoContext } from '../../../../security/UserInfo';

const contents = {
  dashboard: { text: 'Dashboard', link: '' },
  loginState: { text: '관리자 님이 로그인 중입니다.' },
  logoutBtn: { text: '로그아웃', link: 'logout' },
};

export default function AdminTopNav() {
  const { userInfo, tempChangeUser } = useContext(UserInfoContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo.userRole !== 'ADMIN') {
      navigate('/app');
    }
  }, [userInfo.userRole]);

  const { dashboard, loginState, logoutBtn } = contents;

  return (
    <div className="adminTopNav">
      <AdminDashboardNav text={dashboard.text} link={dashboard.link} />
      <AdminLoginState text={loginState.text} />
      <AdminLogoutBtn
        text={logoutBtn.text}
        link={logoutBtn.link}
        tempOnClick={tempChangeUser}
      />
    </div>
  );
}
