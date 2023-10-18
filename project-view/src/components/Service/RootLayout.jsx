import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Nav/header/Header';
import Footer from './Nav/footer/Footer';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="appMain">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
