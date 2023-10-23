package com.javajo.sunshineRoad.mappers.admin;;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminRecActivityCntMapper {

	//전체 카운트
	public int getTotalCount();
	
	//날짜 조회 - 작성일
	public int selectDateRecActivityCnt(ASearchDTO searchDTO);
	
	//필터링 조회 키워드,시군구
	public int selectRecActivityCnt(ASearchDTO searchDTO);
	
}