import React, { useState } from 'react';
import TotalActTitleBox from './Theme/title/TotalActTitleBox';
import { Outlet } from 'react-router-dom';
import TotalActivityBtns from './MenuBtn/TotalActivityBtns';

const links = {
  themeLink: '/app/activity/theme/category',
  calendarLink: '/app/activity/theme/calendar',
};

export default function RootLayoutTotalActTheme() {
  const [activeTheme, setActiveTheme] = useState(true);
  const { themeLink, calendarLink } = links;

  return (
    <main className="appMain">
      <TotalActTitleBox />
      <TotalActivityBtns
        themeLink={themeLink}
        calendarLink={calendarLink}
        handleActiveTheme={setActiveTheme}
      />
      <div style={{ marginBottom: '5rem' }}>
        <Outlet />
      </div>
    </main>
  );
}
