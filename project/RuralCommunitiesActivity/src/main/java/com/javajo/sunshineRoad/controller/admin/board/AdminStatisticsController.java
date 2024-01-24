package com.javajo.sunshineRoad.controller.admin.board;

import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminStatisticsService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/admin/board/statistics")
@RequiredArgsConstructor
public class AdminStatisticsController {

	private final AdminStatisticsService statisticsService;

//	//통계
//	//접속자수 누적 월별 일별 시간대별
	@Transactional
	@GetMapping("/visitors/total")
	public int visitorsStatisticsTotal() {

		try {
			return statisticsService.visitorsStatisticsTotal();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}}
	@Transactional
	@GetMapping("/visitors/month/{year}")
	public ResponseEntity<List<Map<String, Object>>> visitorsStatisticsMonth(@PathVariable int year) {

		try {
			List<Map<String, Object>> result = statisticsService.visitorsStatisticsMonth(year);

			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
		
	@Transactional
	@GetMapping("/visitors/month/{year}/{month}")
	public ResponseEntity<List<Map<String, Object>>> visitorsStatisticsDays(@PathVariable int year,@PathVariable int month) {

		try {
			List<Map<String, Object>> result = statisticsService.visitorsStatisticsDays(year, month);
			
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
	
	@Transactional
	@GetMapping("/visitors/times")
	public ResponseEntity<List<Map<String, Object>>> visitorsStatisticsTimes() {

		try {
			List<Map<String, Object>> result = statisticsService.visitorsStatisticsTimes();
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
	
	
	//예약건수 reservation
	//날짜별 건수 월별
	@Transactional
	@GetMapping("/reservation/theme/{month}/{year}")
	public ResponseEntity<List<Map<String, Object>>> reservationTheme(@PathVariable int month,
			@PathVariable int year) {

		try {
			List<Map<String, Object>> result = statisticsService.reservationTheme(month,year);
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
	//해당월의 일별 예약건수
	@Transactional
	@GetMapping("/reservation/day/{month}/{year}")
	public ResponseEntity<List<Map<String, Object>>> reservationDays(
			@PathVariable int month,
			@PathVariable int year) {

		try {
			List<Map<String, Object>> result = statisticsService.reservationDays(month,year);
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
	
	//월별 예약건수
	@Transactional
	@GetMapping("/reservation/month")
	public ResponseEntity<List<Map<String, Object>>> reservationMonth() {

		try {
			List<Map<String, Object>> result = statisticsService.reservationMonth();
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}
	@Transactional
	@GetMapping("/reservation/seller")
	public ResponseEntity<List<Map<String, Object>>> reservationSeller() {

		try {
			List<Map<String, Object>> result = statisticsService.reservationSeller();
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
	}

}
