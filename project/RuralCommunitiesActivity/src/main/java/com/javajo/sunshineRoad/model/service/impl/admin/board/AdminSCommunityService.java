package com.javajo.sunshineRoad.model.service.impl.admin.board;

import com.javajo.sunshineRoad.model.dao.admin.board.ASCommunityCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.ASCommunityDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASCommunityDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminSCommunityService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class AdminSCommunityService implements IAdminSCommunityService {

	
	private final ASCommunityDAO sCommunityDAO;
	private final ASCommunityCntDAO sCommunityCntDAO;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;



	@Override
	public List<ASCommunityDTO> detailSCommunity(int sellerCommunityPostId) {
		System.out.println("[SCommunityService] detailSCommunity()");
		return sCommunityDAO.detailSCommunity(sellerCommunityPostId);
	}

	@Override
	public int deleteSCommunityPost(int sellerCommunityPostId) {
		System.out.println("[SCommunityService] deleteSCommunityPost()");
		return sCommunityDAO.deleteSCommunityPost(sellerCommunityPostId);
	}


	// Oracle
	//전체조회
	@Override
	public List<ASCommunityDTO> getAllsCommunity(int requestPageNo,int perPagePostCount) {
		System.out.println("[SCommunityService] getAllsCommunity()");

		int totalCount = 0;

		totalCount = sCommunityCntDAO.getTotalCount();
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

		return sCommunityDAO.getAllsCommunity(startPostNo,endPostNo);
	}

	// MySQL
//	//전체조회
//	@Override
//	public List<ASCommunityDTO> getAllsCommunity(int requestPageNo,int perPagePostCount) {
//		System.out.println("[SCommunityService] getAllsCommunity()");
//
//		int totalCount = 0;
//
//		totalCount = sCommunityCntDAO.getTotalCount();
//		System.out.println(totalCount);
//
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		return sCommunityDAO.getAllsCommunity(startPostNo - 1, perPagePostCount);
//	}
}