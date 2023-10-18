package com.javajo.sunshineRoad.controller.reservation;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import com.javajo.sunshineRoad.model.service.IService.reservation.RegReservationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/regReservation")
@RequiredArgsConstructor
public class RegReservationController {
	private final RegReservationService regReservationService;

	@PostMapping("/add")
	public ResponseEntity<String> addReservation(@RequestBody ReservationContentDTO reservationContentDTO) {
		try {
			int success = regReservationService.addReservation(reservationContentDTO);
			if (success == 1) {
				return ResponseEntity.status(HttpStatus.CREATED).body("Registration successful");
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed register request");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed Registration request " + e.getMessage());
		}
	}

	@PutMapping("/update")
	public ResponseEntity<String> updateReservation(@RequestBody ReservationContentDTO reservationContentDTO) {
		try {
			int success = regReservationService.updateReservation(reservationContentDTO);
			if (success == 1) {
				return ResponseEntity.ok("Post edit successful");
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed edit request");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed edit request " + e.getMessage());
		}
	}

	@DeleteMapping("/delete/{rId}")
	public ResponseEntity<String> deleteReservation(@PathVariable int rId) {
		try {
			int success = regReservationService.deleteReservation(rId);
			if (success == 1) {
				return ResponseEntity.ok("Delete successful");
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed delete request");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed delete request " + e.getMessage());
		}
	}
}
