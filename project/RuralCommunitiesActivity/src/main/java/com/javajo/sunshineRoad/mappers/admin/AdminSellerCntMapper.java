package com.javajo.sunshineRoad.mappers.admin;;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminSellerCntMapper {

	
	//전체 카운트
	public int getTotalCount();

	public int selectSellerDATECnt(@Param("searchDTO") ASearchDTO searchDTO);
	
	public int appSellerCnt();
	
	public int wrotePostCnt(int sId);
	
	
}