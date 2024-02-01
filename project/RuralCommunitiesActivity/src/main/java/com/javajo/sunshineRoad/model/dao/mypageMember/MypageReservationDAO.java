package com.javajo.sunshineRoad.model.dao.mypageMember;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageReservationMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageReservationDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MypageReservationDAO {
	 private final SqlSessionTemplate sqlSession;

	public int getReserveCount(long uId) {
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



	//로그인한 회원 의 예약 내역 조회
//	Oracle
	public List<MypageReservationDTO> getListInfo(long uId, PageInfo pageInfo) {
	    System.out.println("pageInfo" + pageInfo);
	    int start = pageInfo.getStartList();
	    int end = pageInfo.getEndList();
	    MypageReservationMapper reservationMapper = sqlSession.getMapper(MypageReservationMapper.class);
	    return reservationMapper.selectByNo(uId, start, end);
	}

//	MySQL
//	public List<MypageReservationDTO> getListInfo(long uId, PageInfo pageInfo) {
//		System.out.println("pageInfo" + pageInfo);
//		int start = pageInfo.getStartList();
//		int perPagePostNo = pageInfo.getListLimit();
//
//		MypageReservationMapper reservationMapper = sqlSession.getMapper(MypageReservationMapper.class);
//		return reservationMapper.selectByNo(uId, start - 1, perPagePostNo);
//	}
}