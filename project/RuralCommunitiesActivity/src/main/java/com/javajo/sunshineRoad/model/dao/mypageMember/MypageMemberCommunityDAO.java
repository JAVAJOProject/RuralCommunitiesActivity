package com.javajo.sunshineRoad.model.dao.mypageMember;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageMemberCommunityMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MypageMemberCommunityDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;

//	public List<MypageMemberCommunityDTO> getActivityCount(long uId) {
//		System.out.println("uId" + uId);
//		MypageMemberCommunityMapper memCommunityMapper = sqlSession.getMapper(MypageMemberCommunityMapper.class);
//		return memCommunityMapper.selectCount(uId);
//	}

//	public List<MypageMemberCommunityDTO> getListInfo(long uId) {
//		System.out.println("uId" + uId);
//		MypageMemberCommunityMapper memCommunityMapper = sqlSession.getMapper(MypageMemberCommunityMapper.class);
//		return memCommunityMapper.selectCount(uId);
//	}


	public int getActivityCount(long uId) {
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




//	Oracle
//	public List<MypageMemberCommunityDTO> getInfo(long uId, PageInfo pageInfo) {
//		System.out.println("uId" + uId);
//		int start = pageInfo.getStartList();
//		int end = pageInfo.getEndList();
//		MypageMemberCommunityMapper memCommunityMapper = sqlSession.getMapper(MypageMemberCommunityMapper.class);
//		return memCommunityMapper.selectByNo(uId, start, end);
//	}


//	MySQL
	public List<MypageMemberCommunityDTO> getInfo(long uId, PageInfo pageInfo) {
		System.out.println("uId" + uId);
		int start = pageInfo.getStartList();
		int perPagePostNo = pageInfo.getListLimit();

		MypageMemberCommunityMapper memCommunityMapper = sqlSession.getMapper(MypageMemberCommunityMapper.class);
		return memCommunityMapper.selectByNo(uId, start - 1, perPagePostNo);
	}
}