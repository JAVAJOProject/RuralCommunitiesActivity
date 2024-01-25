package com.javajo.sunshineRoad.model.service.IService.reservation;

public interface GetReservationCountService {
	public int getReservationCount();
	public int getMyReservationCount(long uId);
	public int getMyServiceReservationCount(int aId);
}