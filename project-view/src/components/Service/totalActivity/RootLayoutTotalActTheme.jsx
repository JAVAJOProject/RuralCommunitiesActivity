import React, { useState } from 'react';
import TotalActTitleBox from './Theme/title/TotalActTitleBox';
import { Outlet } from 'react-router-dom';
import TotalActivityBtns from './MenuBtn/TotalActivityBtns';
import TotalActRegistrationBtn from './registrationBtn/TotalActRegistrationBtn';

const links = {
  themeLink: '/app/activity/theme/category',
  calendarLink: '/app/activity/theme/calendar',
};
const registrationBtn = '체험 등록하기';

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
      {true && (
        <div
          style={
            activeTheme
              ? {
                  marginBottom: '-3rem',
                  marginLeft: '9rem',
                  position: 'relative',
                  zIndex: '100',
                }
              : { marginBottom: '-2rem', marginLeft: '22rem' }
          }
        >
          <TotalActRegistrationBtn text={registrationBtn} />
        </div>
      )}
      <div style={{ marginBottom: '5rem' }}>
        <Outlet />
      </div>
    </main>
  );
}
