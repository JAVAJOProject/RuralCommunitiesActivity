package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;

public interface IAdminMCommunityService {


	//전체조회
	public List<AMCommunityDTO> getAllmCommunity(int requestPageNo, int perPagePostCount);

	//상세조회
	public List<AMCommunityDTO> detailMCommunity(int uCommunityPostId);
	

	//삭제하기 객체
	public int deleteMCommunityPost(int uCommunityPostId);

}
