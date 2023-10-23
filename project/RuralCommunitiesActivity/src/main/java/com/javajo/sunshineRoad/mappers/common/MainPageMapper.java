package com.javajo.sunshineRoad.mappers.common;

import com.javajo.sunshineRoad.model.dto.mainPage.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainPageMapper {
    public List<MainPageRecommendationActivityInfoDTO> getMainPageRecommendationActivityData();
    public MainPageRecommendationActivityInfoDTO getOneRecommendationActivityData(int id);

    public List<MainPageTotalActivityInfoDTO> getMainPageTotalActivityData();
    public MainPageTotalActivityInfoDTO getOneTotalActivityData(int id);

    public List<MainPageRecommendationTownInfoDTO> getMainPageRecTownData();
    public MainPageRecommendationTownInfoDTO getOneRecommendationTownData(int id);

    public List<MainPageEventInfoDTO> getMainPageEventData();
    public MainPageEventInfoDTO getOneEventData(int id);
    public List<MainPageNoticeInfoDTO> getMainPageNoticeData();
}