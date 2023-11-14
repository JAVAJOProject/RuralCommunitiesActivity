package com.javajo.sunshineRoad.model.service.IService.recommendation;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.recommendation.RecTownInfoDTO;

public interface GetOneRecTownInfoService {
	public RecTownInfoDTO getOneRecTownInfo(int recTId);
}