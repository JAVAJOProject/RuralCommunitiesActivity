package com.javajo.sunshineRoad.model.service.IService.mainPage;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageEventInfoDTO;

import java.util.List;

public interface GetEventService {
    public List<MainPageEventInfoDTO> getMainPageEventData();
}