package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;
import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AMCommunityCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AMCommunityDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminMCommunityService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AdminMCommunityService implements IAdminMCommunityService {

	
	private final AMCommunityDAO mCommunityDAO;
	private final AMCommunityCntDAO mCommunityCntDAO;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;


	//전체조회
	@Override
	public List<AMCommunityDTO> getAllmCommunity(int requestPageNo,int perPagePostCount) {
		System.out.println("[MCommunityService] getAllmCommunity()");
		
		int totalCount = 0;
		
		totalCount = mCommunityCntDAO.getTotalCount();
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
		return mCommunityDAO.getAllmCommunity(startPostNo,endPostNo);
	}


	@Override
	public List<AMCommunityDTO> detailMCommunity(int uCommunityPostId) {
		System.out.println("MCommunityService detailMCommunity");
		return mCommunityDAO.detailMCommunity(uCommunityPostId);
	}

	@Override
	public int deleteMCommunityPost(int uCommunityPostId) {
		System.out.println("MCommunityService deleteMCommunityPost");
		return mCommunityDAO.deleteMCommunityPost(uCommunityPostId);
	}

}
