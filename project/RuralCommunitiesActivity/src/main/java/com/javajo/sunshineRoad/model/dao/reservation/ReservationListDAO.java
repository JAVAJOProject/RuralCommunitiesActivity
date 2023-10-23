package com.javajo.sunshineRoad.model.dao.reservation;

import com.javajo.sunshineRoad.mappers.totalActivity.ResSummaryListMapper;
import com.javajo.sunshineRoad.model.dto.reservation.ResSummaryListDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReservationListDAO {	
	private final SqlSessionTemplate sqlSession;
	
	public int getReservationCount() {
        ResSummaryListMapper mapper = sqlSession.getMapper(ResSummaryListMapper.class);
        return mapper.getReservationCountData();
    }
	public int getMyReservationCount(int uId) {
        ResSummaryListMapper mapper = sqlSession.getMapper(ResSummaryListMapper.class);
        return mapper.getMyReservationCountData(uId);
    }
	public int getMyServiceReservationCount(int aId) {
        ResSummaryListMapper mapper = sqlSession.getMapper(ResSummaryListMapper.class);
        return mapper.getMyServiceReservationCountData(aId);
    }
	
	public List<ResSummaryListDTO> getRequestPageReservationList(int startPostNo, int endPostNo) {
    	ResSummaryListMapper mapper = sqlSession.getMapper(ResSummaryListMapper.class);
    	return mapper.getRequestPageReservationListData(startPostNo, endPostNo);
    }
	public List<ResSummaryListDTO> getRequestPageMyReservitionList(int uId, int startPostNo, int endPostNo) {
    	ResSummaryListMapper mapper = sqlSession.getMapper(ResSummaryListMapper.class);
    	return mapper.getRequestPageMyReservationListData(uId, startPostNo, endPostNo);
    }
	public List<ResSummaryListDTO> getRequestPageMyServiceReservitionList(int aId, int startPostNo, int endPostNo) {
    	ResSummaryListMapper mapper = sqlSession.getMapper(ResSummaryListMapper.class);
    	return mapper.getRequestPageMyServiceReservationListData(aId, startPostNo, endPostNo);
    }
}