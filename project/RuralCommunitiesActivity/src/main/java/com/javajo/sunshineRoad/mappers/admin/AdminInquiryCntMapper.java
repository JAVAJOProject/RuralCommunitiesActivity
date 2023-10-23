package com.javajo.sunshineRoad.mappers;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminInquiryCntMapper {

	
	//전체 카운트
	public int getAllInquiryCnt();
	
	public int selectInquiryStatusCnt(ASearchDTO searchDTO);
	
	public int selectInquiryTypesCnt(ASearchDTO searchDTO);
	
	public int UnansweredInquiryCnt();

	
}
