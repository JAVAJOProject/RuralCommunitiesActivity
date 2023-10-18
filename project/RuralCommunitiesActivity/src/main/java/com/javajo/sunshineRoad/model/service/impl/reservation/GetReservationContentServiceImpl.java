package com.javajo.sunshineRoad.model.service.impl.reservation;

import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.model.dao.reservation.ReservationContentDAO;
import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import com.javajo.sunshineRoad.model.service.IService.reservation.GetReservationContentService;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class GetReservationContentServiceImpl implements GetReservationContentService{
	private final ReservationContentDAO reservationContentDAO;
	
	@Override
	public ReservationContentDTO getReservationContent(int rId) {
		return reservationContentDAO.getReservationContent(rId);
	}
}
