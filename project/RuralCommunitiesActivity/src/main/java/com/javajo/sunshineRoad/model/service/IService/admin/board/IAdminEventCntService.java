package com.javajo.sunshineRoad.model.service.IService.admin.board;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

public interface IAdminEventCntService {

	//전체 조회
	public int getTotalCount();
	//필터링 날짜 조회
	public int selectEventRecruitDateCnt(ASearchDTO searchDTO);
	public int selectEventStartDateCnt(ASearchDTO searchDTO);
	public int selectEventCreatedDateCnt(ASearchDTO searchDTO);
	
	//필터링 조회
	public int selectEventCnt(ASearchDTO searchDTO);
	
	
}
