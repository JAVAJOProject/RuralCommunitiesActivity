package com.javajo.sunshineRoad.model.service.IService.recommendation;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;

public interface PostRequestRecKeywordService {
	public List<RecActivityInfoDTO> postRequestRecKeyword(int recAKeywordId, String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo);
}
