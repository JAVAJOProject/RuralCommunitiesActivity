package com.javajo.sunshineRoad.model.service.impl.review;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.review.ReviewListDAO;
import com.javajo.sunshineRoad.model.service.IService.review.GetTotalReviewCountService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetTotalReviewCountServiceImpl implements GetTotalReviewCountService {
	private final ReviewListDAO reviewListDAO;
	
	@Override
    public int getTotalReviewCount() {
        return reviewListDAO.getTotalReviewCount();
    }

}
