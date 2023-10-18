package com.javajo.sunshineRoad.model.service.IService.review;
import java.util.List;
import com.javajo.sunshineRoad.model.dto.review.ReviewDTO;

public interface GetRequestPageReviewListService {
	public List<ReviewDTO> getRequestPageReviewList(int totalCount, int perPagePostCount, int requestPageNo);
}
