package com.javajo.sunshineRoad.model.dao.reservation;

import com.javajo.sunshineRoad.mappers.totalActivity.RegReservationMapper;
import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class RegReservationDAO {
	
	private final SqlSessionTemplate sqlSession;

	public void addPaymentData(ReservationContentDTO reservationContentDTO) {
		RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
		mapper.addPaymentData(reservationContentDTO);
	}
	public int getPaymentId() {
		RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
		return mapper.getPaymentId();
	}

	public int addReservation(ReservationContentDTO reservationContentDTO) {
        RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
        return mapper.addReservationData(reservationContentDTO);
    }
	public int addToActivityCustomerList(ReservationContentDTO reservationContentDTO) {
		RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
		return mapper.addToActivityCustomerList(reservationContentDTO);
	}
	 public int updateReservation(ReservationContentDTO reservationContentDTO) {
	        RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
	        return mapper.updateReservationData(reservationContentDTO);
	    }
	 public int deleteReservation(int rId) {
	        RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
	        return mapper.deleteReservationData(rId);
	    }
	public int deleteFromActivityCustomerList(ReservationContentDTO reservationContentDTO) {
			RegReservationMapper mapper = sqlSession.getMapper(RegReservationMapper.class);
			return mapper.deleteFromActivityCustomerList(reservationContentDTO);
	}
}