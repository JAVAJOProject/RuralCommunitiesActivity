package com.javajo.sunshineRoad.model.service.IService.recommendation;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;

public interface GetOneRecActivityInfoService {
	public RecActivityInfoDTO getOneRecActivityInfo(int recAPostId);
}