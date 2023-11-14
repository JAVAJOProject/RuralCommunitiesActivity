package com.javajo.sunshineRoad.model.service.impl.recommendation;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecSidoCntService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecTownSidoCntService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetRecTownSidoCntServiceImpl implements GetRecTownSidoCntService {
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public int getRecTownSidoCnt(int sidoId) {
		return recommendationDAO.getSidoRecTownList(sidoId);
	}
}