import React from 'react';
import './HeaderMiddle.css';
import Logo from './Logo';
import TopMenus from './TopMenus';
import WeatherBox from './WeatherBox';

export default function HeaderMiddle() {
  return (
    <div className="headerMiddle">
      <Logo />
      <TopMenus />
      <WeatherBox />
    </div>
  );
}
