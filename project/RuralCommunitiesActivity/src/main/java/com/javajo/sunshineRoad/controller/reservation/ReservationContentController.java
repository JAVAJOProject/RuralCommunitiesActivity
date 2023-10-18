package com.javajo.sunshineRoad.controller.reservation;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import com.javajo.sunshineRoad.model.service.IService.reservation.GetReservationContentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/reservation")
@RequiredArgsConstructor
public class ReservationContentController {
	private final GetReservationContentService getReservationContentService;

	@GetMapping("/content/{rId}")
	public ResponseEntity<ReservationContentDTO> totalActivityContent(@PathVariable int rId) {
		ReservationContentDTO result = getReservationContentService.getReservationContent(rId);

		return ResponseEntity.ok(result);
	}

}