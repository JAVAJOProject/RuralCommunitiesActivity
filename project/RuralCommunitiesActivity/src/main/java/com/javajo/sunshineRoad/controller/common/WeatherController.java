package com.javajo.sunshineRoad.controller.common;

import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.common.weather.ApiDataDTO;
import com.javajo.sunshineRoad.model.dto.common.weather.WeatherDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.WeatherService;

@RestController
@RequestMapping("/weather")
public class WeatherController {

    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping(value = "/getWeatherData", produces = "application/json; charset=UTF-8")
    public WeatherDTO getWeatherData(
            @RequestParam("baseDate") String baseDate,
            @RequestParam("baseTime") String baseTime) {

        ApiDataDTO weatherData;
        int nx = 55;
        int ny = 127;
        
        try {
            weatherData = weatherService.getWeatherData(baseDate, baseTime, nx, ny);
        	
        } catch (URISyntaxException e) {
            // URISyntaxException 처리
            return WeatherDTO.builder()
                .weatherConditionId(1)
                .weatherCondition("맑음")
                .temperature(99.9)
                .build();
        }
        
//        try {
//            weatherData = weatherService.getWeatherData(baseDate, baseTime, nx, ny);
//        } catch (URISyntaxException e) {
//        	return WeatherDTO.builder()
//                    .weatherConditionId(1)
//                    .weatherCondition("맑음")
//                    .temperature(99.9)
//                    .build();
//        }
        
        WeatherDTO result = null;

        if (weatherData != null) {
            // 날씨 상태 및 조건 확인
            String skyCondition = weatherData.getSky();
            String ptyCondition = weatherData.getPty();
            double wsdValue = weatherData.getWsd();
            int lgtValue = weatherData.getLgt();
            double temp = weatherData.getT1h();

            if (lgtValue >= 20) {
                result = WeatherDTO.builder()
                    .weatherConditionId(7)
                    .weatherCondition("낙뢰")
                    .temperature(temp)
                    .build();
            } else if (ptyCondition != null && (ptyCondition.equals("3") || ptyCondition.equals("7")) && !skyCondition.equals("1")) {
    	    // 강수형태가 3 또는 7이고 하늘상태가 1이 아닌 경우 눈으로 처리
                result = WeatherDTO.builder()
                    .weatherConditionId(6)
                    .weatherCondition("눈")
                    .temperature(temp)
                    .build();
            } else if (ptyCondition != null && (!ptyCondition.equals("0") && !skyCondition.equals("1"))) {
    	    // 강수형태가 0이 아니고 하늘상태가 1이 아닌 경우 비로 처리
                result = WeatherDTO.builder()
                    .weatherConditionId(5)
                    .weatherCondition("비")
                    .temperature(temp)
                    .build();
            } else if (wsdValue >= 10.0) { // 풍속이 10.0 이상이면 바람으로 처리
                result = WeatherDTO.builder()
                    .weatherConditionId(4)
                    .weatherCondition("바람")
                    .temperature(temp)
                    .build();
            } else if (skyCondition != null && (skyCondition.equals("4") || skyCondition.equals("3"))) {
    	    // 하늘상태가 4 또는 3인 경우 흐림으로 처리
                result = WeatherDTO.builder()
                    .weatherConditionId(2)
                    .weatherCondition("흐림")
                    .temperature(temp)
                    .build();
            } else if (skyCondition != null && skyCondition.equals("2")) {  // 하늘상태가 2인 경우 구름많음으로 처리
                result = WeatherDTO.builder()
                    .weatherConditionId(3)
                    .weatherCondition("구름많음")
                    .temperature(temp)
                    .build();
            } else {
    	    // 위의 조건에 해당하지 않으면 맑음으로 처리
                result = WeatherDTO.builder()
                    .weatherConditionId(1)
                    .weatherCondition("맑음")
                    .temperature(temp)
                    .build();
            }
        } else {
            // 오류 발생 시 기본 날씨 정보 설정
            return WeatherDTO.builder()
                .weatherConditionId(1)
                .weatherCondition("맑음")
                .temperature(99.9)
                .build();
        }

        return result;
    }
}