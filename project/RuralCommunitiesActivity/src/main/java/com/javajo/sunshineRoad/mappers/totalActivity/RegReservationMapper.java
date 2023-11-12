package com.javajo.sunshineRoad.mappers.totalActivity;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;

@Mapper
public interface RegReservationMapper {
	public void addPaymentData(ReservationContentDTO reservationContentDTO);
	public int getPaymentId();
	public int addReservationData(ReservationContentDTO reservationContentDTO);
	public int updateReservationData(ReservationContentDTO reservationContentDTO);
	public int deleteReservationData(int rId);
}