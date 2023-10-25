package com.javajo.sunshineRoad.model.service.impl.reservation;

import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.model.dao.reservation.ReservationContentDAO;
import com.javajo.sunshineRoad.model.service.IService.reservation.CheckReservationPeopleService;
import com.javajo.sunshineRoad.model.service.impl.totalActivity.GetTotalActivityContentServiceImpl;

import lombok.RequiredArgsConstructor;


@Repository
@RequiredArgsConstructor
public class CheckReservationPeopleServiceImpl implements CheckReservationPeopleService{
   
   private final ReservationContentDAO reservationContentDAO;
   private final GetTotalActivityContentServiceImpl getTotalActivityContentServiceImpl;

   @Override
   public int getReservationPeople(int aId) {
      return getTotalActivityContentServiceImpl.getOneContent(aId).getAMaxPeople()
            - reservationContentDAO.getReservationPeople(aId);
   }
}