package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RegionSidoDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRegionSidoService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRegionSidoServiceImpl implements GetRegionSidoService{
	private final RecommendationDAO recommendationDAO;

	@Override
	public List<RegionSidoDTO> getRegionSidoList() {
		return recommendationDAO.getRegionSidoList();
	}
}
