package com.javajo.sunshineRoad.model.service.IService.common.service;

import java.net.URISyntaxException;

import com.javajo.sunshineRoad.model.dto.common.weather.ApiDataDTO;

public interface WeatherService {
    // 날씨 정보를 가져오는 메서드 정의
    ApiDataDTO getWeatherData(String baseDate, String baseTime, int nx, int ny) throws URISyntaxException;
}