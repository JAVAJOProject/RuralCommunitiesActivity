package com.javajo.sunshineRoad.controller.admin.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AStatisticsDTO;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminStatisticsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin/board/statistics")
@RequiredArgsConstructor
public class AdminStatisticsController {

	private final AdminStatisticsService statisticsService;
//	
//
//	public AdminStatisticsController(AdminStatisticsService statisticsService) {
//		super();
//		this.statisticsService = statisticsService;
//	}
//	//통계
//	//조회
//	//접속자수 누적 월별 일별 시간대별
	@Transactional
	@GetMapping("/visitors/total")
	public Integer visitorsStatisticsTotal() {

		try {
			return statisticsService.visitorsStatisticsTotal();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}}
	@Transactional
	@GetMapping("/visitors/month/{year}")
	public Integer visitorsStatisticsMonth(@PathVariable int year) {

		try {
			return statisticsService.visitorsStatisticsMonth(year);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
		
	@Transactional
	@GetMapping("/visitors/month/{year}/{month}")
	public Integer visitorsStatisticsDays(@PathVariable int year,@PathVariable int month) {

		try {
			return statisticsService.visitorsStatisticsDays(year, month);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	
	@Transactional
	@GetMapping("/visitors/times")
	public Integer visitorsStatisticsTimes() {

		try {
			return statisticsService.visitorsStatisticsTimes();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	
	
	//예약건수 reservation
	//날짜별 건수 월별
	@Transactional
	@GetMapping("/reservation/theme")
	public Integer reservationTheme(@PathVariable int month) {

		try {
			return statisticsService.reservationTheme(month);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	
	@Transactional
	@GetMapping("/reservation/month/{month}")
	public Integer reservationMonth() {

		try {
			return statisticsService.reservationMonth();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}
	@Transactional
	@GetMapping("/reservation/seller")
	public Integer reservationSeller() {

		try {
			return statisticsService.reservationSeller();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}

}
