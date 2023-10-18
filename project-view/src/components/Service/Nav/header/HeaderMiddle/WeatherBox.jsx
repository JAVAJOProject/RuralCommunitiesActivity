import React from 'react';
import WeatherImg from './WeatherImg';
import './WeatherBox.css';

const weatherContents = {
  weatherTitle: '오늘 날씨',
  temperature: '25℃',
};

export default function WeatherBox() {
  const { weatherTitle, temperature } = weatherContents;

  return (
    <div className="weatherBox">
      <WeatherImg />
      <div className="weatherContentBox">
        <p className="weatherTitle">{weatherTitle}</p>
        <p className="temperature">{temperature}</p>
      </div>
    </div>
  );
}
