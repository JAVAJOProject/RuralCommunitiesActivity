package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageNoticeInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetNoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetNoticeServiceImpl implements GetNoticeService {
    private final MainPageDAO mainPageDAO;

    @Override
    public List<MainPageNoticeInfoDTO> getMainPageNoticeData() {
        return mainPageDAO.getMainNoticeInfoData();
    }
}