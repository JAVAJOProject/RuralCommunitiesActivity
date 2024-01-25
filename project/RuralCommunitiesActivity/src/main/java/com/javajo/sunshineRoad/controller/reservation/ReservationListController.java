package com.javajo.sunshineRoad.controller.reservation;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.reservation.ResSummaryListDTO;
import com.javajo.sunshineRoad.model.service.IService.reservation.GetReservationCountService;
import com.javajo.sunshineRoad.model.service.IService.reservation.GetRequestPageReservationService;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/reservation")
@RequiredArgsConstructor
public class ReservationListController {
	
	private final GetReservationCountService getReservationCountService;
	private final GetRequestPageReservationService getReuestPageReservationService;
	
	@GetMapping("/count")//전체 예약 개수
	public int getReservationCount() {
		return getReservationCountService.getReservationCount();
	}
	@GetMapping("/myCount/{uId}")//내가 신청한 예약 개수(체험자)
	public int getMyReservationCount(@PathVariable long uId) {
		return getReservationCountService.getMyReservationCount(uId);
	}
	@GetMapping("/myServiceCount/{aId}")//내 체험에 받은 예약 개수(체험제공자)
	public int getMyServiceReservationCount(@PathVariable int aId) {
		return getReservationCountService.getMyServiceReservationCount(aId);
	}
	

	@GetMapping("/list/{boardType}/{requestPageNo}") // 전체 예약리스트 조회(관리자)
	public ResponseEntity<List<ResSummaryListDTO>> ReservationList(@PathVariable int requestPageNo, @PathVariable String boardType) {
		if (!boardType.equals("card") && !boardType.equals("list")) {
			return ResponseEntity.badRequest().build();
		}
		int perPagePostCount = 4;

		List<ResSummaryListDTO> reservationList = null;

		int totalCount = getReservationCountService.getReservationCount();
		reservationList = getReuestPageReservationService.getRequestPageReservitionList(totalCount, perPagePostCount, requestPageNo);

		return ResponseEntity.ok(reservationList);
	}
	
	@GetMapping("/myList/{boardType}/{uId}/{requestPageNo}") // 내 예약리스트 조회(체험자) 
	public ResponseEntity<List<ResSummaryListDTO>> MyReservationList(@PathVariable String boardType, @PathVariable long uId, @PathVariable int requestPageNo) {
		if (!boardType.equals("card") && !boardType.equals("list")) {
			return ResponseEntity.badRequest().build();
		}
		int perPagePostCount = 2;

		List<ResSummaryListDTO> myReservationList = null;

		int myResrevationCount = getReservationCountService.getMyReservationCount(uId);
		myReservationList = getReuestPageReservationService.getRequestPageMyReservitionList(uId, myResrevationCount, perPagePostCount,
				requestPageNo);

		return ResponseEntity.ok(myReservationList);
	}
	@GetMapping("/myServiceList/{boardType}/{aId}/{requestPageNo}") // 내 서비스 예약리스트 조회(체험제공자) 
	public ResponseEntity<List<ResSummaryListDTO>> MyServiceReservationList(@PathVariable String boardType, @PathVariable int aId, @PathVariable int requestPageNo) {
		if (!boardType.equals("card") && !boardType.equals("list")) {
			return ResponseEntity.badRequest().build();
		}
		int perPagePostCount = 2;

		List<ResSummaryListDTO> myServiceReservationList = null;

		int myServiceResrevationCount = getReservationCountService.getMyServiceReservationCount(aId);
		myServiceReservationList = getReuestPageReservationService.getRequestPageMyServiceReservitionList(aId, myServiceResrevationCount, perPagePostCount,
				requestPageNo);

		return ResponseEntity.ok(myServiceReservationList);
	}
}