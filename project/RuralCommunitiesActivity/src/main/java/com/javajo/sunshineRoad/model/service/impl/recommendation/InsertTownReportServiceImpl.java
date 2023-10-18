package com.javajo.sunshineRoad.model.service.impl.recommendation;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.TownReportDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.InsertTownReportService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InsertTownReportServiceImpl implements InsertTownReportService{
	private final RecommendationDAO recommendationDAO;
	
	@Override
	public void insertTownReport(TownReportDTO town) {
		recommendationDAO.createTownReport(town);
	}

}
