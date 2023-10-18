package com.javajo.sunshineRoad.model.service.IService.mainPage;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageNoticeInfoDTO;

import java.util.List;

public interface GetNoticeService {
    public List<MainPageNoticeInfoDTO> getMainPageNoticeData();
}