package com.javajo.sunshineRoad.mappers.admin;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.admin.board.ExcelList;

public interface AdminExcelMapper {

	
	public List<ExcelList> findAll();
}