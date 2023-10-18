package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageEventInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetEventService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetEventServiceImpl implements GetEventService {
    private final MainPageDAO mainPageDAO;

    @Override
    public List<MainPageEventInfoDTO> getMainPageEventData() {
        return mainPageDAO.getMainEventInfoData();
    }
}