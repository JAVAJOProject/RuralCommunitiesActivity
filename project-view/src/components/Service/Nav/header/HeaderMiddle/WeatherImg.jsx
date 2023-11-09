import React from "react";
import "./WeatherImg.css";

import weather1 from "../../../../../view_img/Service/mainPage/weather1.png";
import weather2 from "../../../../../view_img/Service/mainPage/weather2.png";
import weather3 from "../../../../../view_img/Service/mainPage/weather3.png";
import weather4 from "../../../../../view_img/Service/mainPage/weather4.png";
import weather5 from "../../../../../view_img/Service/mainPage/weather5.png";
import weather6 from "../../../../../view_img/Service/mainPage/weather6.png";
import weather7 from "../../../../../view_img/Service/mainPage/weather7.png";
import weather8 from "../../../../../view_img/Service/mainPage/weather8.png";
import weather9 from "../../../../../view_img/Service/mainPage/weather9.png";

export default function WeatherImg({ imgIndex }) {
  const weathers = [
    weather1,
    weather2,
    weather3,
    weather4,
    weather5,
    weather6,
    weather7,
    weather8,
    weather9
  ];

  return (
    <>
      <img className="weatherImg" src={weathers[imgIndex]} />
    </>
  );
}
