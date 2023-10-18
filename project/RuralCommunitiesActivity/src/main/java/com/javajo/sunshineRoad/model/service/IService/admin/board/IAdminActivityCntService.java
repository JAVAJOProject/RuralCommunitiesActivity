package com.javajo.sunshineRoad.model.service.IService.admin.board;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

public interface IAdminActivityCntService {

	//전체 조회
	public int getTotalCount();
	//필터링 날짜 조회
	public int selectStartDateActivityCnt(ASearchDTO searchDTO);
	public int selectEndDateActivityCnt(ASearchDTO searchDTO);
	public int selectDateReservationCnt(ASearchDTO searchDTO);
	
	//필터링 조회
	public int selectActivityCnt(ASearchDTO searchDTO);
}
