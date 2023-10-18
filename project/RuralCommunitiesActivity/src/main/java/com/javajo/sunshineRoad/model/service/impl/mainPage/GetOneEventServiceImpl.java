package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageEventInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneEventService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetOneEventServiceImpl implements GetOneEventService {
    private final MainPageDAO mainPageDAO;

    @Override
    public MainPageEventInfoDTO getOneEventData(int id) {
        return mainPageDAO.getOneMainEventData(id);
    }
}