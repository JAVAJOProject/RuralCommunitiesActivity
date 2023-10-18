package com.javajo.sunshineRoad.model.dao.mypageMember;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageMemberCommunityMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageMemberCommunityDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;

	public List<MypageMemberCommunityDTO> getInfo(int uId, PageInfo pageInfo) {
		System.out.println("uId" + uId);
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();
		MypageMemberCommunityMapper memCommunityMapper = sqlSession.getMapper(MypageMemberCommunityMapper.class);
		return memCommunityMapper.selectByNo(uId, start, end);
	}

//	public List<MypageMemberCommunityDTO> getActivityCount(int uId) {
//		System.out.println("uId" + uId);
//		MypageMemberCommunityMapper memCommunityMapper = sqlSession.getMapper(MypageMemberCommunityMapper.class);
//		return memCommunityMapper.selectCount(uId);
//	}

//	public List<MypageMemberCommunityDTO> getListInfo(int uId) {
//		System.out.println("uId" + uId);
//		MypageMemberCommunityMapper memCommunityMapper = sqlSession.getMapper(MypageMemberCommunityMapper.class);
//		return memCommunityMapper.selectCount(uId);
//	}


	public int getActivityCount(int uId) {
		System.out.println("uId" + uId);
		MypageMemberCommunityMapper memCommunityMapper = sqlSession.getMapper(MypageMemberCommunityMapper.class);
		return memCommunityMapper.selectCount(uId);
	}

//	//로그인한 회원의 예약 내역 조회 --->  체험상세보기 page 로 가기 
//	public ActivityInfoDTO getInfo(int reservationId) {
//	    System.out.println("ReservationDAO" + reservationId);
//	    ReservationMapper reservationMapper = sqlSession.getMapper(ReservationMapper.class);
//	    return reservationMapper.selectByRes(reservationId);
//	}

}
