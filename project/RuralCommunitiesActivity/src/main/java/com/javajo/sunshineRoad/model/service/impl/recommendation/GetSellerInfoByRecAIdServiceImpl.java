package com.javajo.sunshineRoad.model.service.impl.recommendation;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActSellerInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetSellerInfoByRecAIdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GetSellerInfoByRecAIdServiceImpl implements GetSellerInfoByRecAIdService {
    private final RecommendationDAO recommendationDAO;

    @Override
    public RecActSellerInfoDTO getSellerInfoByRecAId(int recAId) {
        return recommendationDAO.getSellerInfoByRecAId(recAId);
    }
}