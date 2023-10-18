package com.javajo.sunshineRoad.model.service.impl.recommendation;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecImagesDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecImagesByImgIdService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRecImagesByImgIdServiceImpl implements GetRecImagesByImgIdService{
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public RecImagesDTO getRecImagesByImgIdService(int recImgId) {
		return recommendationDAO.getRecImagesById(recImgId);
	}
}
