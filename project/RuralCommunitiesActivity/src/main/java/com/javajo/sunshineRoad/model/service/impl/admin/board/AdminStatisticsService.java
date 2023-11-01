package com.javajo.sunshineRoad.model.service.impl.admin.board;

import org.springframework.stereotype.Service;
import com.javajo.sunshineRoad.model.dao.admin.board.AStatisticsDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AStatisticsDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminStatisticsService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminStatisticsService implements IAdminStatisticsService {
	
	private final AStatisticsDAO statisticsDAO;
	
	@Override
	public int visitorsStatisticsTotal() {
		return statisticsDAO.visitorsStatisticsTotal();
	}

	@Override
	public int visitorsStatisticsMonth(int year) {
		return statisticsDAO.visitorsStatisticsMonth(year);
	}

	@Override
	public int visitorsStatisticsDays(int year, int month) {
		return statisticsDAO.visitorsStatisticsDays(year, month);
	}

	@Override
	public int visitorsStatisticsTimes() {
		return statisticsDAO.visitorsStatisticsTimes();
	}

	@Override
	public int reservationTheme(int month) {
		return statisticsDAO.reservationTheme(month);
	}

	@Override
	public int reservationMonth() {
		return statisticsDAO.reservationMonth();
	}

	@Override
	public int reservationSeller() {
		return statisticsDAO.reservationSeller();
	}



}
