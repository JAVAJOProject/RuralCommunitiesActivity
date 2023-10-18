package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageTotalActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneTotalActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetOneTotalActivityServiceImpl implements GetOneTotalActivityService {
    private final MainPageDAO mainPageDAO;

    @Override
    public MainPageTotalActivityInfoDTO getOneTotalActivityData(int id) {
        return mainPageDAO.getOneMainTotalActivityData(id);
    }
}