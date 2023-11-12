package com.javajo.sunshineRoad.model.service.impl.recommendation;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RegionTownDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetTownInfoBySigunguIdAndTownNameService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetTownInfoBySigunguIdAndTownNameServiceImpl implements GetTownInfoBySigunguIdAndTownNameService {
    private final RecommendationDAO recommendationDAO;

    @Override
    public RegionTownDTO getTownInfoBySigunguIdAndTownName(RegionTownDTO regionTown) {
        return recommendationDAO.getTownInfoBySigunguIdAndTownName(regionTown);
    }
}