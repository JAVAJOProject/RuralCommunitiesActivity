package com.javajo.sunshineRoad.model.service.impl.rating;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.javajo.sunshineRoad.model.dto.rating.RatingDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class RatingDataServiceImpl {
  public static final String serviceKey = "iPbaf5ocONrAOV85WCfE8C1QRJ2RGwDv%2FUR5xzpg%2BzZuBEB38sRJxl%2BUlmaDagns7GiNaQwRqHSn3ju0L2EDFg%3D%3D";

  //전체리스트(필터링전)
  	public List<RatingDTO> getRatingData(int pageNo) throws URISyntaxException {
        RestTemplate restTemplate = new RestTemplate();
        String baseUrl = "http://api.odcloud.kr/api/15087209/v1/uddi:3a3189a6-f0b7-44a8-82b8-a1ebb8b16e5d";
        String queryParams = "serviceKey=" + serviceKey
                             + "&perPage=10"
                             + "&page="
                             + pageNo
                             + "&type=json";
       
        String fullUrl = baseUrl + "?" + queryParams;
        URI uri = new URI(fullUrl);
     
        String jsonString = restTemplate.getForObject(uri, String.class);

        Gson gson = new Gson();
        JsonObject jsonResponse = gson.fromJson(jsonString, JsonObject.class);

        // JSON 데이터에서 "data" 키 아래의 JSON 배열 추출
        List<RatingDTO> ratingDTOList = new ArrayList<>();
        if (jsonResponse != null) {
            JsonArray dataArray = jsonResponse.getAsJsonArray("data");
            if (dataArray != null) {
                RatingDTO[] ratingDTOArray = gson.fromJson(dataArray, RatingDTO[].class);
                ratingDTOList.addAll(Arrays.asList(ratingDTOArray));
            }
        }
        return ratingDTOList;
    }
  	
}