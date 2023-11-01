import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './TotalActivityBtns.css';
import TotalActivityThemeBtn from './TotalActivityThemeBtn';
import TotalActivityCalendarBtn from './TotalActivityCalendarBtn';

export default function TotalActivityBtns({
  themeLink,
  calendarLink,
  handleActiveTheme,
}) {
  const [activeTheme, setActiveTheme] = useState(false);
  const [activeCalendar, setActiveCalendar] = useState(false);

  return (
    <div className="totalActivityBtns">
      <NavLink
        to={themeLink}
        className={({ isActive }) => {
          setActiveTheme(isActive);
          handleActiveTheme(isActive);
        }}
      >
        <TotalActivityThemeBtn isOn={activeTheme} />
      </NavLink>
      <NavLink
        to={calendarLink}
        className={({ isActive }) => {
          setActiveCalendar(isActive);
        }}
      >
        <TotalActivityCalendarBtn isOn={activeCalendar} />
      </NavLink>
    </div>
  );
}
