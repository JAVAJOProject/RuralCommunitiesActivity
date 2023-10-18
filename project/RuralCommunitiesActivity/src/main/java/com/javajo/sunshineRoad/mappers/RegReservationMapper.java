package com.javajo.sunshineRoad.mappers;

import org.apache.ibatis.annotations.Mapper;

import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;

@Mapper
public interface RegReservationMapper {
	public int addReservationData(ReservationContentDTO reservationContentDTO);
	public int updateReservationData(ReservationContentDTO reservationContentDTO);
	public int deleteReservationData(int rId);
}
