package com.javajo.sunshineRoad.model.dao.mypageMember;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageEventMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MypageEventDAO {
	private final SqlSessionTemplate sqlSession;

	public int cancelEvent(int reportId) {
		System.out.println("reportId" + reportId);
		MypageEventMapper eventmapper = sqlSession.getMapper(MypageEventMapper.class);
		return eventmapper.updateByCancel(reportId);
	}

	public MypageEventWinnerDTO getReport(int reportId) {
		System.out.println("reportId" + reportId);
		MypageEventMapper eventmapper = sqlSession.getMapper(MypageEventMapper.class);
		return eventmapper.selectReportByNo(reportId);
	}

	public int modifyEvent(MypageEventWinnerDTO eventWinner) {
		System.out.println("eventWinner" + eventWinner);
		MypageEventMapper eventmapper = sqlSession.getMapper(MypageEventMapper.class);
		return eventmapper.updateEventByWinner(eventWinner);
	}

	public int getEventCount(long uId) {
		System.out.println("long uId" + uId);
		MypageEventMapper eventmapper = sqlSession.getMapper(MypageEventMapper.class);
		return eventmapper.selectCount(uId);
	}

//	public List<MypageEventDTO> getInfo(int eventId) {
//		System.out.println("eventId" + eventId);
//		 MypageEventMapper eventmapper = sqlSession.getMapper(MypageEventMapper.class);
//		return eventmapper.selectByNo(eventId);
//	}


	public List<MypageEventDTO> getInfo(int eventId) {
		System.out.println("eventId" + eventId);
		 MypageEventMapper eventmapper = sqlSession.getMapper(MypageEventMapper.class);
		return eventmapper.selectByNo(eventId);
	}



	// 이벤트 참여 내역
//	Oracle
	public List<MypageEventDTO> getEventList(long uId, PageInfo pageInfo) {
		int start = pageInfo.getStartList();
		int end = pageInfo.getEndList();
		System.out.println("uId" + uId);
		MypageEventMapper eventmapper = sqlSession.getMapper(MypageEventMapper.class);
		return eventmapper.selectByMember(uId, start, end);
	}


//	MySQL
//	public List<MypageEventDTO> getEventList(long uId, PageInfo pageInfo) {
//		int start = pageInfo.getStartList();
//		int perPagePostNo = pageInfo.getListLimit();
//		System.out.println("uId" + uId);
//		MypageEventMapper eventmapper = sqlSession.getMapper(MypageEventMapper.class);
//		return eventmapper.selectByMember(uId, start - 1, perPagePostNo);
//	}
}