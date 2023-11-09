import React, { useEffect } from "react";
import "./WeatherBox.css";
import { useImmer } from "use-immer";
import { fetchOneContentGET } from "../../../../../config/ApiService";

import WeatherImg from "./WeatherImg";

const weatherContents = {
  weatherTitle: "오늘 날씨",
};

export default function WeatherBox() {
  const [weatherData, updateWeatherData] = useImmer({});
  useEffect(() => {
    async function fetchContents() {
      try {
        const currTime = `${new Date().getHours()}${new Date().getMinutes()}`;
        const timeText = +currTime < 1230 && +currTime >= 30 ? "0030" : "1230";
        const dateT =
          +currTime < 30 ? new Date().getDate() - 1 : new Date().getDate();
        const dateText = `${new Date().getFullYear()}${String(
          new Date().getMonth() + 1
        ).padStart(2, "0")}${String(dateT).padStart(2, "0")}`;

        const weather = await fetchOneContentGET(
          `/weather/getWeatherData?baseDate=${dateText}&baseTime=${timeText}`
        );
        const weatherContents =
          +timeText > 1900
            ? { ...weather, weatherConditionId: 8 }
            : { ...weather };
        updateWeatherData(weatherContents);
      } catch (error) {
        updateWeatherData({
          temperature: -99.9,
          weatherConditionId: 9,
          weatherCondition: "네트워크통신오류",
        });
      }
    }
    fetchContents();
  }, [new Date().getDate()]);

  const { weatherTitle } = weatherContents;

  return (
    <div className="weatherBox">
      <WeatherImg
        imgIndex={
          weatherData?.weatherConditionId
            ? +weatherData?.weatherConditionId - 1
            : 8
        }
      />
      <div className="weatherContentBox">
        <p className="weatherTitle">{weatherTitle}</p>
        <p className="temperature">
          {weatherData?.temperature?.toFixed(1) ?? -99.9}℃
        </p>
      </div>
    </div>
  );
}
