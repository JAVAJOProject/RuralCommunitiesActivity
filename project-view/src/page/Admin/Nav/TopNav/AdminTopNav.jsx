import React from 'react';
import AdminDashboardNav from './AdminDashboardNav';
import AdminLoginState from './AdminLoginState';
import AdminLogoutBtn from './AdminLogoutBtn';
import './AdminTopNav.css';

const contents = {
  dashboard: { text: 'Dashboard', link: '' },
  loginState: { text: '관리자 님이 로그인 중입니다.' },
  logoutBtn: { text: '로그아웃', link: 'logout' },
};

export default function AdminTopNav() {
  const { dashboard, loginState, logoutBtn } = contents;

  return (
    <div className="adminTopNav">
      <AdminDashboardNav text={dashboard.text} link={dashboard.link} />
      <AdminLoginState text={loginState.text} />
      <AdminLogoutBtn text={logoutBtn.text} link={logoutBtn.link} />
    </div>
  );
}
