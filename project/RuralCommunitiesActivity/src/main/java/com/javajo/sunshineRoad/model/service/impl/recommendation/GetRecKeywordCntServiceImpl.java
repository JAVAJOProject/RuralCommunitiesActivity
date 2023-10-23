package com.javajo.sunshineRoad.model.service.impl.recommendation;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecKeywordCntService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRecKeywordCntServiceImpl implements GetRecKeywordCntService{
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public int getRecKeywordCnt(int recAKeywordId) {
		return recommendationDAO.getRecKeywordCnt(recAKeywordId);
	}
}
