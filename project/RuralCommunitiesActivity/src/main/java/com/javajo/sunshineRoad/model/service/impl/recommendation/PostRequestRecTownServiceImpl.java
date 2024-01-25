package com.javajo.sunshineRoad.model.service.impl.recommendation;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.recommendation.PostRequestRecTownService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostRequestRecTownServiceImpl implements PostRequestRecTownService{
	private final RecommendationDAO recommendationDAO;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;


//	Oracle
//	@Override
//	public List<RecTownInfoDTO> postRequesRecTown(String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo){
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//
//        String colName;
//		switch(requestOrderType) {
//			case "date" : colName = "rec_t_date_created"; break;
//			case "viewCount" : colName = "rec_t_view_cnt"; break;
//			case "likes" : colName = "rec_t_like_cnt"; break;
//			default : throw new IllegalArgumentException("잘못된 타입");
//		}
//
//        return recommendationDAO.getRequestPageRecTownContent(colName, startPostNo, endPostNo);
//	}

//	MySQL
	@Override
	public List<RecTownInfoDTO> postRequesRecTown(String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo){
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);

		String colName;
		switch(requestOrderType) {
			case "date" : colName = "rec_t_date_created"; break;
			case "viewCount" : colName = "rec_t_view_cnt"; break;
			case "likes" : colName = "rec_t_like_cnt"; break;
			default : throw new IllegalArgumentException("잘못된 타입");
		}

		return recommendationDAO.getRequestPageRecTownContent(colName, startPostNo - 1, perPagePostCount);
	}
}