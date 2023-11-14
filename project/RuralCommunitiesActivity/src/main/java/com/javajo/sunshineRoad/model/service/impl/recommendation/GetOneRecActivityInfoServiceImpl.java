package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetOneRecActivityInfoService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetOneRecActivityInfoServiceImpl implements GetOneRecActivityInfoService{
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public RecActivityInfoDTO getOneRecActivityInfo(int recAPostId) {
		return recommendationDAO.getOneRecActivityInfo(recAPostId);
	}
}