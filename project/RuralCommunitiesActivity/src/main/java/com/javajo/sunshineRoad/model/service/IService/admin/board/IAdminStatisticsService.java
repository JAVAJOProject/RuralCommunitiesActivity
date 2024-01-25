package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;


public interface IAdminStatisticsService {

	

	
	public Integer visitorsStatisticsTotal();
	public List<Map<String, Object>> visitorsStatisticsMonth(@Param("year") int year);
	public List<Map<String, Object>> visitorsStatisticsDays(@Param("year") int year , @Param("month") int month);
	public List<Map<String, Object>> visitorsStatisticsTimes();

	public List<Map<String, Object>> reservationTheme(int month, int year);
	public List<Map<String, Object>> reservationDays(int month, int year);
	public List<Map<String, Object>> reservationMonth();
	public List<Map<String, Object>> reservationSeller();



}
