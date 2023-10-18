package com.javajo.sunshineRoad.model.dao.mypageMember;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageReservationMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageReservationDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageReservationDAO {

	@Autowired
	 private final SqlSessionTemplate sqlSession;	
	 
	//로그인한 회원 의 예약 내역 조회
	public List<MypageReservationDTO> getListInfo(int uId, PageInfo pageInfo) {
	    System.out.println("pageInfo" + pageInfo);
	    int start = pageInfo.getStartList();
	    int end = pageInfo.getEndList();
	    MypageReservationMapper reservationMapper = sqlSession.getMapper(MypageReservationMapper.class);
	    return reservationMapper.selectByNo(uId, start, end);
	}

	public int getReserveCount(int uId) {
		System.out.println("uId" + uId);
	    MypageReservationMapper reservationMapper = sqlSession.getMapper(MypageReservationMapper.class);
	    return reservationMapper.selectCount(uId);
	}

	public MypageReservationDTO getInfo(int reservationId) {
		System.out.println("reservationId" + reservationId);
	    MypageReservationMapper reservationMapper = sqlSession.getMapper(MypageReservationMapper.class);
	    return reservationMapper.movepage(reservationId);
	}

//	//로그인한 회원의 예약 내역 조회 --->  체험상세보기 page 로 가기 
//	public ActivityInfoDTO getInfo(int reservationId) {
//	    System.out.println("ReservationDAO" + reservationId);
//	    ReservationMapper reservationMapper = sqlSession.getMapper(ReservationMapper.class);
//	    return reservationMapper.selectByRes(reservationId);
//	}

}
