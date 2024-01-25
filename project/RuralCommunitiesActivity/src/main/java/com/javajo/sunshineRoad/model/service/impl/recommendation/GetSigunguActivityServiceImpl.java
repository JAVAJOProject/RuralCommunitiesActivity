package com.javajo.sunshineRoad.model.service.impl.recommendation;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetSigunguActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetSigunguActivityServiceImpl implements GetSigunguActivityService{
	private final RecommendationDAO recommendationDAO;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;


//	Oracle
//	@Override
//	public List<RecActivityInfoDTO> sigunguActivityList(int sigunguId, String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//
//        String colName;
//		switch(requestOrderType) {
//			case "date" : colName = "rec_a_date_created"; break;
//			case "viewCount" : colName = "rec_a_view_cnt"; break;
//			case "likes" : colName = "rec_a_like_cnt"; break;
//			default : throw new IllegalArgumentException("잘못된 타입");
//		}
//
//		return recommendationDAO.sigunguActivity(sigunguId, colName, startPostNo, endPostNo);
//	}

//	MySQL
	@Override
	public List<RecActivityInfoDTO> sigunguActivityList(int sigunguId, String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);

		String colName;
		switch(requestOrderType) {
			case "date" : colName = "rec_a_date_created"; break;
			case "viewCount" : colName = "rec_a_view_cnt"; break;
			case "likes" : colName = "rec_a_like_cnt"; break;
			default : throw new IllegalArgumentException("잘못된 타입");
		}

		return recommendationDAO.sigunguActivity(sigunguId, colName, startPostNo - 1, perPagePostCount);
	}
}