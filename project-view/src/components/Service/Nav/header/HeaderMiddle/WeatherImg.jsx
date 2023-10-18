import React from 'react';
import weatherImg from '../../../../../view_img/Service/mainPage/weather.jpg';
import './WeatherImg.css';

export default function WeatherImg() {
  return (
    <>
      <img className="weatherImg" src={weatherImg} />
    </>
  );
}
