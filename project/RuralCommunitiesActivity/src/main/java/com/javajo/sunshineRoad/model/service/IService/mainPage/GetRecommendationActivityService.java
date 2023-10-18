package com.javajo.sunshineRoad.model.service.IService.mainPage;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageRecommendationActivityInfoDTO;

import java.util.List;

public interface GetRecommendationActivityService {
    public List<MainPageRecommendationActivityInfoDTO> getMainRecActivityData();
}