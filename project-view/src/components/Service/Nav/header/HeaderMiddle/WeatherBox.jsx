import React, { useEffect } from "react";
import WeatherImg from "./WeatherImg";
import "./WeatherBox.css";
import { useImmer } from "use-immer";
import { fetchOneContentGET } from "../../../../../config/ApiService";

const weatherContents = {
  weatherTitle: "오늘 날씨",
};

const testContents = {
  weatherCondition: "맑음",
  weatherConditionId: 1,
  temperature: 25.0,
};

export default function WeatherBox() {
  const [weatherData, updateWeatherData] = useImmer({});
  useEffect(() => {
    async function fetchContents() {
      const dateText = `${new Date().getFullYear()}${String(
        new Date().getMonth() + 1
      ).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}`;
      const currTime = `${new Date().getHours()}${new Date().getMinutes()}`;
      const timeText = +currTime < 1230 && +currTime >= 30 ? "0030" : "1230";

      const weather = await fetchOneContentGET(
        `/weather/getWeatherData?baseDate=${dateText}&baseTime=${timeText}`
      );
      updateWeatherData(weather);
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
            : 0
        }
      />
      <div className="weatherContentBox">
        <p className="weatherTitle">{weatherTitle}</p>
        <p className="temperature">{weatherData?.temperature?.toFixed(1)}℃</p>
      </div>
    </div>
  );
}
