package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecTownInfoService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRecTownInfoServiceImpl implements GetRecTownInfoService {
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public int getAllRecTownList() {
		return recommendationDAO.getAllRecTownList();
	}

}
