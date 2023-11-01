package com.javajo.sunshineRoad.mappers.admin.board;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.AStatisticsDTO;

@Mapper
public interface AdminStatisticsMapper {

	
	public int visitorsStatisticsTotal();
	
	public int visitorsStatisticsMonth(int year);
	
	public int visitorsStatisticsDays(@Param("year")int year, @Param("month")int month);

	public int visitorsStatisticsTimes();
	
	
	
	public int reservationTheme(int month);
	public int reservationMonth();
	public int reservationSeller();
}
