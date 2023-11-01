package com.javajo.sunshineRoad.model.service.IService.admin.board;

import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.AStatisticsDTO;

public interface IAdminStatisticsService {

	

	
	public int visitorsStatisticsTotal();
	public int visitorsStatisticsMonth(@Param("year") int year);
	public int visitorsStatisticsDays(@Param("year") int year , @Param("month") int month);
	public int visitorsStatisticsTimes();

	public int reservationTheme(int month);
	public int reservationMonth();
	public int reservationSeller();



}
