package com.javajo.sunshineRoad.model.service.IService.recommendation;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;

import java.util.List;

public interface GetSidoActivityService {
	public List<RecActivityInfoDTO> sidoActivityList(int sidoId, String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo);
}