package com.javajo.sunshineRoad.mappers.admin.board;

import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface AdminNoticeCntMapper {

	
	//전체 카운트
	public int getTotalCount();

	
}
