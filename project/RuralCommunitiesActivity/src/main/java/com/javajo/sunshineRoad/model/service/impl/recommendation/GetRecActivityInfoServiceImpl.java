package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecActivityInfoService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRecActivityInfoServiceImpl implements GetRecActivityInfoService {
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public int getAllRecActivityList() {
		return recommendationDAO.getAllRecActivityList();
	}
}
