package com.javajo.sunshineRoad.controller.review;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.javajo.sunshineRoad.model.dto.review.ReviewDTO;
import com.javajo.sunshineRoad.model.service.IService.review.GetRequestPageReviewListService;
import com.javajo.sunshineRoad.model.service.IService.review.GetTotalReviewCountService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/review")
@RequiredArgsConstructor
public class ReviewController {
	private final GetTotalReviewCountService getTotalReviewCountService;
	private final GetRequestPageReviewListService getRequestPageReviewListService;

	@GetMapping("/totalCount")
	public int getTotalActiveEventCount() {
		return getTotalReviewCountService.getTotalReviewCount();
	}

	@GetMapping("/list/{boardType}/{requestPageNo}")
	public ResponseEntity<List<ReviewDTO>> ReviewList(@PathVariable int requestPageNo, @PathVariable String boardType) {
		if (!boardType.equals("card") && !boardType.equals("list")) {
			return ResponseEntity.badRequest().build();
		}
		int perPagePostCount = 6;

		List<ReviewDTO> reviewList = null;

		int totalCount = getTotalReviewCountService.getTotalReviewCount();
		reviewList = getRequestPageReviewListService.getRequestPageReviewList(totalCount, perPagePostCount, requestPageNo);

		return ResponseEntity.ok(reviewList);
	}
}
