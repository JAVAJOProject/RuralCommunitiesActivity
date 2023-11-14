package com.javajo.sunshineRoad.model.service.IService.recommendation;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownInfoDTO;

import java.util.List;

public interface GetSigunguRecTownService {
	public List<RecTownInfoDTO> sigunguRecTownList(int sigunguId, String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo);
}