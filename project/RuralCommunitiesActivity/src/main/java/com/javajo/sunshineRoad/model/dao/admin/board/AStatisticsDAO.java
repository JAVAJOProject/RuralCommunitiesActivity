package com.javajo.sunshineRoad.model.dao.admin.board;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminInquiryCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminStatisticsMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AStatisticsDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AStatisticsDAO {

	private final SqlSessionTemplate sqlSession;
	
	public int visitorsStatisticsTotal() {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.visitorsStatisticsTotal();
		}
	public int visitorsStatisticsMonth(int year) {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.visitorsStatisticsMonth(year);
	}
	public int visitorsStatisticsDays(int year, int month) {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.visitorsStatisticsDays(year,month);
	}
	public int visitorsStatisticsTimes() {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.visitorsStatisticsTimes();
	}
	
	
	
	public int reservationTheme(int month) {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.reservationTheme(month);
	}
	public int reservationMonth() {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.reservationMonth();
	}
	public int reservationSeller() {
		AdminStatisticsMapper statisticsMapper = sqlSession.getMapper(AdminStatisticsMapper.class);
		return statisticsMapper.reservationSeller();
	}
	
	
}
