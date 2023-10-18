package com.javajo.sunshineRoad.model.service.IService.mainPage;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageTotalActivityInfoDTO;

import java.util.List;

public interface GetTotalActivityService {
    public List<MainPageTotalActivityInfoDTO> getMainTotalActivityData();
}