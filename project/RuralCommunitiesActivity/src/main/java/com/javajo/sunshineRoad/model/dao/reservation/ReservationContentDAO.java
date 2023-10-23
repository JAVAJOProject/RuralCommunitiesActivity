package com.javajo.sunshineRoad.model.dao.reservation;

import com.javajo.sunshineRoad.mappers.totalActivity.ReservationContentMapper;
import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ReservationContentDAO {
	private final SqlSessionTemplate sqlSession;

    public ReservationContentDTO getReservationContent(int rId) {
    	ReservationContentMapper mapper = sqlSession.getMapper(ReservationContentMapper.class);
    	return mapper.getReservationContentData(rId);
    }
}