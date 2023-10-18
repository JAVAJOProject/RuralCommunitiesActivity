package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetSigunguActivityService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetSigunguActivityServiceImpl implements GetSigunguActivityService{
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public List<RecActivityInfoDTO> sigunguActivityList(int sigunguId) {
		return recommendationDAO.sigunguActivity(sigunguId);
	}
}
