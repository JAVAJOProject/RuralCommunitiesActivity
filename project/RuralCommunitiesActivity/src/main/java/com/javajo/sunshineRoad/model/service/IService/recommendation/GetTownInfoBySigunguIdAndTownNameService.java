package com.javajo.sunshineRoad.model.service.IService.recommendation;

import com.javajo.sunshineRoad.model.dto.recommendation.RegionTownDTO;

public interface GetTownInfoBySigunguIdAndTownNameService {
    public RegionTownDTO getTownInfoBySigunguIdAndTownName(RegionTownDTO regionTown);
}