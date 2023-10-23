package com.javajo.sunshineRoad.mappers;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminActivityCntMapper {

	
	//전체 카운트
	public int getTotalCount();

	public int selectStartDateActivityCnt(ASearchDTO searchDTO);
	
	public int selectEndDateActivityCnt(ASearchDTO searchDTO);
	
	public int selectDateReservationCnt(ASearchDTO searchDTO);
	
	public int selectActivityCnt(ASearchDTO searchDTO);
	
}
