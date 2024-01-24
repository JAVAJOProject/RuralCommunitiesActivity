package com.javajo.sunshineRoad.mappers.admin.board;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface AdminStatisticsMapper {

	
	public Integer visitorsStatisticsTotal();
	
	public List<Map<String, Object>> visitorsStatisticsMonth(int year);
	
	public List<Map<String, Object>> visitorsStatisticsDays(@Param("year")int year, @Param("month")int month);

	public List<Map<String, Object>> visitorsStatisticsTimes();
	
	
	public List<Map<String, Object>> reservationTheme(@Param("month")int month,@Param("year")int year);
	public List<Map<String, Object>> reservationDays(@Param("month")int month,@Param("year")int year);
	public List<Map<String, Object>> reservationMonth();
	public List<Map<String, Object>> reservationSeller();
}
