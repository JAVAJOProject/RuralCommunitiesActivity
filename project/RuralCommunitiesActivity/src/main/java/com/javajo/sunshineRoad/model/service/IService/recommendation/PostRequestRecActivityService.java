package com.javajo.sunshineRoad.model.service.IService.recommendation;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;

public interface PostRequestRecActivityService {
	public List<RecActivityInfoDTO> postRequesRecActivity(int totalCount, int perPagePostCount, int requestPageNo);
}
