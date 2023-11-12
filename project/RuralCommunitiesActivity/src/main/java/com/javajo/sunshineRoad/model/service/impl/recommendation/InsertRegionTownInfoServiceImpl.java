package com.javajo.sunshineRoad.model.service.impl.recommendation;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RegionTownDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.InsertRegionTownInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InsertRegionTownInfoServiceImpl implements InsertRegionTownInfoService {
    private final RecommendationDAO recommendationDAO;

    @Override
    public void createRegionTownInfo(RegionTownDTO regionTown) {
        recommendationDAO.createRegionTownInfo(regionTown);
    }
}