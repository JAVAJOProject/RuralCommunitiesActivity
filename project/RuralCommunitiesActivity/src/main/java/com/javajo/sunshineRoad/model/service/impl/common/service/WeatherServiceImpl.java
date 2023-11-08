package com.javajo.sunshineRoad.model.service.impl.common.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.javajo.sunshineRoad.model.dto.common.weather.ApiDataDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.WeatherService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WeatherServiceImpl implements WeatherService {

    private static final String SERVICE_KEY = "il6BL4VoFPfexL8o4dmXlEeTT%2FF%2FwtpCMCNKG01b%2FRUz2Jq2%2BytqnSO7n%2FPNOMj%2FLu%2BIUn6qimQzNIsOClwHyw%3D%3D";
    private static final String SERVICE_URL = "﻿http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";

    private final RestTemplate restTemplate;

   /* public WeatherServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }*/
    @Override
    public ApiDataDTO getWeatherData(String baseDate, String baseTime, int nx, int ny) throws URISyntaxException {
        // API 요청을 위한 URL 생성
        String apiUrl = SERVICE_URL + "?" +
                "serviceKey=" + SERVICE_KEY + "&" +
                "dataType=" + "JSON" + "&" +
                "base_date=" + baseDate + "&" +
                "base_time=" + baseTime + "&" +
                "numOfRows=" + 10 + "&" +
                "nx=" + nx + "&" +
                "ny=" + ny;
        
        apiUrl = apiUrl.replaceAll("\\s", "");

        URI uri = new URI(apiUrl);
        
        String jsonString = restTemplate.getForObject(uri, String.class);

        Gson gson = new Gson();
        JsonObject jsonResponse = gson.fromJson(jsonString, JsonObject.class);

        // 중간 객체들 가져오기
        JsonObject response = jsonResponse.get("response").getAsJsonObject();
        JsonObject body = response.get("body").getAsJsonObject();
        JsonObject items = body.get("items").getAsJsonObject();
        JsonArray itemArray = items.get("item").getAsJsonArray();

        List<ApiDataDTO> weatherDataList = new ArrayList<ApiDataDTO>();
        ApiDataDTO result = new ApiDataDTO();
        
        // baseDate와 baseTime 설정
        result.setBaseDate(baseDate);
        result.setBaseTime(baseTime);

        if (itemArray != null) {
            ApiDataDTO[] weatherDataArr = gson.fromJson(itemArray, ApiDataDTO[].class);
            weatherDataList.addAll(Arrays.asList(weatherDataArr));
        }
        for (ApiDataDTO data : weatherDataList) {
            switch (data.getCategory()) {
                case "LGT":
                    result.setLgt(Integer.parseInt(data.getFcstValue()));
                    break;
                case "PTY":
                    result.setPty(data.getFcstValue());
                    break;
                case "T1H":
                    result.setT1h(Double.parseDouble(data.getFcstValue()));
                    break;
                case "WSD":
                    result.setWsd(Double.parseDouble(data.getFcstValue()));
                    break;
                case "SKY":
                    result.setSky(data.getFcstValue());
                    break;
            }
        }

        return result;
    }
}