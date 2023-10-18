package com.javajo.sunshineRoad.model.service.IService.reservation;

import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;

public interface RegReservationService {
	public int addReservation(ReservationContentDTO reservationContentDTO);
    public int updateReservation(ReservationContentDTO reservationContentDTO);
    public int deleteReservation(int rId);
}
