package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageRecommendationActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneRecommendationActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetOneRecommendationActivityServiceImpl implements GetOneRecommendationActivityService {
    private final MainPageDAO mainPageDAO;

    @Override
    public MainPageRecommendationActivityInfoDTO getOneRecommendationActivityData(int id) {
        return mainPageDAO.getOneMainRecActivityData(id);
    }
}