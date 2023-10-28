package com.javajo.sunshineRoad.model.service.impl.review;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.review.ReviewListDAO;
import com.javajo.sunshineRoad.model.dto.review.ReviewDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.review.GetRequestPageReviewListService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetRequestPageReviewListServiceImpl implements GetRequestPageReviewListService{
	private final ReviewListDAO reviewListDAO;
	
    private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;


	@Override
	public List<ReviewDTO> getRequestPageReviewList(int totalCount, int perPagePostCount, int aPostId, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return reviewListDAO.getRequestPageReviewContent(aPostId, startPostNo, endPostNo);
    }
}