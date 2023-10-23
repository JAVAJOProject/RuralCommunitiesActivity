package com.javajo.sunshineRoad.model.service.impl.recommendation;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownImagesDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecTownImagesByImgIdService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRecTownImagesByImgIdServiceImpl implements GetRecTownImagesByImgIdService{
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public RecTownImagesDTO getRecTownImagesByImgIdService(int recTownImgId) {
		return recommendationDAO.getRecTownImagesById(recTownImgId);
	}

}
