package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Alias("AExcel")
public class ExcelList {
	
	

	private int boardId;
	private int statusId;
	private int reportCnt;
	private String date;

}
