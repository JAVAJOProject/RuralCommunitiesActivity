package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.recommendation.PostRequestRecKeywordService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostRequestRecKeywordServiceImpl implements PostRequestRecKeywordService{
	private final RecommendationDAO recommendationDAO;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	
	@Override
	public List<RecActivityInfoDTO> postRequestRecKeyword(int recAKeywordId, String requestOrderType, int totalCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
        String colName;
		switch(requestOrderType) {
			case "date" : colName = "rec_a_date_created"; break;
			case "viewCount" : colName = "rec_a_view_count"; break;
			case "likes" : colName = "rec_a_favorite_cnt"; break;
			default : throw new IllegalArgumentException("잘못된 타입");
		}
		
		return recommendationDAO.keywordFilterList(recAKeywordId, colName, startPostNo, endPostNo);
	}
}
