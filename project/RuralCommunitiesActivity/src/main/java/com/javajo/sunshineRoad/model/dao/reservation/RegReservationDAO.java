package com.javajo.sunshineRoad.model.dao.reservation;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.RegReservationMapper;
import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class RegReservationDAO {
	
	private final SqlSessionTemplate sqlSession;
    
	public int addReservation(ReservationContentDTO reservationContentDTO) {
        RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
        return mapper.addReservationData(reservationContentDTO);
    }
	 public int updateReservation(ReservationContentDTO reservationContentDTO) {
	        RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
	        return mapper.updateReservationData(reservationContentDTO);
	    }
	 public int deleteReservation(int rId) {
	        RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
	        return mapper.deleteReservationData(rId);
	    }
}
