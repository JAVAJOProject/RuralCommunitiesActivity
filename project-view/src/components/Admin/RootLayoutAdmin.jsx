import React from 'react';
import NavAdmin from './Nav/LeftNav/NavAdmin';
import { Outlet } from 'react-router-dom';
import AdminTopNav from './Nav/TopNav/AdminTopNav';
import RightNavBox from './Nav/RightNav/RightNavBox';

export default function RootLayoutAdmin() {
  return (
    <>
      <NavAdmin />
      <AdminTopNav />
      <RightNavBox />
      <main className="appAdmin">
        <Outlet />
      </main>
    </>
  );
}
