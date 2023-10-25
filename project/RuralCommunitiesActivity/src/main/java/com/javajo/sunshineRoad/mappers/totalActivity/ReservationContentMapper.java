package com.javajo.sunshineRoad.mappers.totalActivity;

import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;

public interface ReservationContentMapper {
   public ReservationContentDTO getReservationContentData(int rId);
   public int getReservationPeopleData(int aId);
}