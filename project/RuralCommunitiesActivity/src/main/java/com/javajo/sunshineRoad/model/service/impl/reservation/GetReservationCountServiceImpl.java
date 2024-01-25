package com.javajo.sunshineRoad.model.service.impl.reservation;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.reservation.ReservationListDAO;
import com.javajo.sunshineRoad.model.service.IService.reservation.GetReservationCountService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetReservationCountServiceImpl implements GetReservationCountService{
	private final ReservationListDAO reservationDAO;

	@Override
	public int getReservationCount() {
		return reservationDAO.getReservationCount();
	}
	@Override
	public int getMyReservationCount(long uId) {
		return reservationDAO.getMyReservationCount(uId);
	}
	@Override
	public int getMyServiceReservationCount(int aId) {
		return reservationDAO.getMyServiceReservationCount(aId);
	}
	
}