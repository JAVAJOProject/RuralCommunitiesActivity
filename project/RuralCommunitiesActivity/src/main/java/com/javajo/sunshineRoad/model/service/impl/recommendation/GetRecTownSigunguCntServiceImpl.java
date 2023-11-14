package com.javajo.sunshineRoad.model.service.impl.recommendation;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecSigunguCntService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecTownSigunguCntService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetRecTownSigunguCntServiceImpl implements GetRecTownSigunguCntService {
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public int getRecTownSigunguCnt(int sigunguId) {
		return recommendationDAO.getSigunguRecTownList(sigunguId);
	}
}