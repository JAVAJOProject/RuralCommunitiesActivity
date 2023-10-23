package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityKeywordDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecActivityKeywordService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRecActivityKeywordServiceImpl implements GetRecActivityKeywordService{
private final RecommendationDAO recommendationDAO;
	
	@Override
	public List<RecActivityKeywordDTO> getAllRecActivityKeyword() {
		return recommendationDAO.getAllRecActivityKeyword();
	}
}
