package com.javajo.sunshineRoad.model.service.IService.mainPage;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageRecommendationTownInfoDTO;

import java.util.List;

public interface GetRecommendationTownService {
    public List<MainPageRecommendationTownInfoDTO> getMainRecTownData();
}