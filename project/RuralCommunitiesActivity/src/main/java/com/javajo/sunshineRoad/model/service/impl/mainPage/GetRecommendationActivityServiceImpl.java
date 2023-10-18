package com.javajo.sunshineRoad.model.service.impl.mainPage;

import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageRecommendationActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.mainPage.GetRecommendationActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetRecommendationActivityServiceImpl implements GetRecommendationActivityService {
    private final MainPageDAO mainPageDAO;

    @Override
    public List<MainPageRecommendationActivityInfoDTO> getMainRecActivityData() {
        return mainPageDAO.getMainRecActivityData();
    }
}