package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;
import java.util.Map;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;
import com.javajo.sunshineRoad.mappers.admin.board.AdminStatisticsMapper;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AStatisticsDAO {

	private final SqlSessionTemplate sqlSession;
	
	public Integer visitorsStatisticsTotal() {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.visitorsStatisticsTotal();
		}
	public List<Map<String, Object>> visitorsStatisticsMonth(int year) {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.visitorsStatisticsMonth(year);
	}
	public List<Map<String, Object>> visitorsStatisticsDays(int year, int month) {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.visitorsStatisticsDays(year,month);
	}
	public List<Map<String, Object>> visitorsStatisticsTimes() {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.visitorsStatisticsTimes();
	}
	
	
	
	public List<Map<String, Object>> reservationTheme(int month,int year) {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.reservationTheme(month,year);
	}
	public List<Map<String, Object>> reservationDays(int month,int year) {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.reservationDays(month,year);
	}
	public List<Map<String, Object>> reservationMonth() {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.reservationMonth();
	}
	public List<Map<String, Object>> reservationSeller() {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.reservationSeller();
	}
	
	
}
