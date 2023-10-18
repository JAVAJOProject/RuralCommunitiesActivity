package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageRecommendationTownInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetOneRecommendationTownService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetOneRecommendationTownServiceImpl implements GetOneRecommendationTownService {
    private final MainPageDAO mainPageDAO;

    @Override
    public MainPageRecommendationTownInfoDTO getOneRecommendationTownData(int id) {
        return mainPageDAO.getOneMainRecTownData(id);
    }
}