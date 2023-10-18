package com.javajo.sunshineRoad.model.service.impl.recommendation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.recommendation.RecommendationDAO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownInfoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.recommendation.PostRequestRecTownService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostRequestRecTownServiceImpl implements PostRequestRecTownService{
	private final RecommendationDAO recommendationDAO;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	@Override
	public List<RecTownInfoDTO> postRequesRecTown(int totalCount, int perPagePostCount, int requestPageNo){
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return recommendationDAO.getRequestPageRecTownContent(startPostNo, endPostNo);
	}
}
