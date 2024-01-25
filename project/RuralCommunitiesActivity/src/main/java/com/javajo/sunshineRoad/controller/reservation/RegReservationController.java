package com.javajo.sunshineRoad.controller.reservation;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import com.javajo.sunshineRoad.model.service.IService.reservation.CheckReservationPeopleService;
import com.javajo.sunshineRoad.model.service.IService.reservation.RegReservationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/regReservation")
@RequiredArgsConstructor
public class RegReservationController {
   private final CheckReservationPeopleService checkReservationPeopleService;
   private final RegReservationService regReservationService;

   @GetMapping("/remainPeople/{aId}/{inputNum}")
   public ResponseEntity<String> checkRemainPeople(@PathVariable int aId, @PathVariable int inputNum) {
      int remainPeople = checkReservationPeopleService.getReservationPeople(aId);
        if (remainPeople < inputNum) {
            return ResponseEntity.badRequest().body("impossible register");
        } else {
            return ResponseEntity.ok("possible register!!");
        }
    }

   @Transactional
   @PostMapping("/add")
   public ResponseEntity<String> addReservation(@RequestBody ReservationContentDTO reservationContentDTO) {
      try {
         int success = regReservationService.addReservation(reservationContentDTO);
         if (success == 1) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Reservation successful");
         } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed register request");
         }
      } catch (Exception e) {
         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed Reservation request " + e.getMessage());
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

   @Transactional
   @DeleteMapping("/delete")
   public ResponseEntity<String> deleteReservation(@RequestParam int rId, @RequestParam int aPostId, @RequestParam long uId) {
      try {
         ReservationContentDTO resContent = ReservationContentDTO.builder().reservationId(rId).aPostId(aPostId).uId(uId).build();
         int success = regReservationService.deleteReservation(resContent);
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