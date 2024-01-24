package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Service;
import com.javajo.sunshineRoad.model.dao.admin.board.AStatisticsDAO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminStatisticsService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminStatisticsService implements IAdminStatisticsService {
	
	private final AStatisticsDAO statisticsDAO;
	
	@Override
	public Integer visitorsStatisticsTotal() {
		return statisticsDAO.visitorsStatisticsTotal();
	}

	@Override
	public List<Map<String, Object>> visitorsStatisticsMonth(int year) {
		return statisticsDAO.visitorsStatisticsMonth(year);
	}

	@Override
	public List<Map<String, Object>> visitorsStatisticsDays(int year, int month) {
		return statisticsDAO.visitorsStatisticsDays(year, month);
	}

	@Override
	public List<Map<String, Object>> visitorsStatisticsTimes() {
		return statisticsDAO.visitorsStatisticsTimes();
	}

	@Override
	public List<Map<String, Object>> reservationTheme(int month,int year) {
		return statisticsDAO.reservationTheme(month,year);
	}

	public List<Map<String, Object>> reservationDays(int month,int year) {
		return statisticsDAO.reservationDays(month,year);
	}
	
	@Override
	public List<Map<String, Object>> reservationMonth() {
		return statisticsDAO.reservationMonth();
	}

	@Override
	public List<Map<String, Object>> reservationSeller() {
		return statisticsDAO.reservationSeller();
	}



}
