package com.javajo.sunshineRoad.model.service.impl.recommendation;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecSigunguCntService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRecSigunguCntServiceImpl implements GetRecSigunguCntService{
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public int getRecSigunguCnt(int sigunguId) {
		return recommendationDAO.getRecSigunguCnt(sigunguId);
	}
}
