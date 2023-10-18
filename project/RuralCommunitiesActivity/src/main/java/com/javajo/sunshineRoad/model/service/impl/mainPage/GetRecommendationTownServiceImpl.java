package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageRecommendationTownInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetRecommendationTownService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetRecommendationTownServiceImpl implements GetRecommendationTownService {
    private final MainPageDAO mainPageDAO;

    @Override
    public List<MainPageRecommendationTownInfoDTO> getMainRecTownData() {
        return mainPageDAO.getMainRecTownData();
    }
}