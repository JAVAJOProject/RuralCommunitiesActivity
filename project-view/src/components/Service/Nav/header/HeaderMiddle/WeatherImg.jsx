import React from "react";
import "./WeatherImg.css";

import weatherImg from "../../../../../view_img/Service/mainPage/weather.jpg";

export default function WeatherImg({ imgIndex }) {
  const weathers = [
    weatherImg,
    weatherImg,
    weatherImg,
    weatherImg,
    weatherImg,
    weatherImg,
    weatherImg,
  ];

  return (
    <>
      <img className="weatherImg" src={weathers[imgIndex]} />
    </>
  );
}
