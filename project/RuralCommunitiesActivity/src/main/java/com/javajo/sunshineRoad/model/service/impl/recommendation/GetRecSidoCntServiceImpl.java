package com.javajo.sunshineRoad.model.service.impl.recommendation;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecSidoCntService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecSigunguCntService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetRecSidoCntServiceImpl implements GetRecSidoCntService {
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public int getRecSidoCnt(int sidoId) {
		return recommendationDAO.getRecSidoCnt(sidoId);
	}
}