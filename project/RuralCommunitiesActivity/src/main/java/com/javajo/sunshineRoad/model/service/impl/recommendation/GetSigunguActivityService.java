package com.javajo.sunshineRoad.model.service.IService.recommendation;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;

public interface GetSigunguActivityService {
	public List<RecActivityInfoDTO> sigunguActivityList(int sigunguId, String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo);
}
