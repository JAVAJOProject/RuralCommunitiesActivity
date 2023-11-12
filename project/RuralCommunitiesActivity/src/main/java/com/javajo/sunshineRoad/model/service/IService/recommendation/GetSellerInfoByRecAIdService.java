package com.javajo.sunshineRoad.model.service.IService.recommendation;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActSellerInfoDTO;

public interface GetSellerInfoByRecAIdService {
    public RecActSellerInfoDTO getSellerInfoByRecAId(int recAId);
}