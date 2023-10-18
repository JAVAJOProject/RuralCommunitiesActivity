package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;
import com.javajo.sunshineRoad.model.dto.admin.board.ASCommunityDTO;

public interface IAdminSCommunityService {


	//전체조회
	public List<ASCommunityDTO> getAllsCommunity(int requestPageNo,int perPagePostCount);

	//상세조회
	public List<ASCommunityDTO> detailSCommunity(int sellerCommunityPostId);
	

	//삭제하기 객체
	public int deleteSCommunityPost(int sellerCommunityPostId);
}
