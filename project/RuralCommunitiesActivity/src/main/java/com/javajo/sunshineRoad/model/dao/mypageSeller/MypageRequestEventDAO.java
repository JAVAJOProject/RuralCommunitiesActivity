package com.javajo.sunshineRoad.model.dao.mypageSeller;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageSeller.MypageRequestEventMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageRequestEventDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageRequestEventDAO {
	
	@Autowired
	 private final SqlSessionTemplate sqlSession;	
	 
	//요청한 이벤트 내역
	public List<MypageRequestEventDTO> getEventList(int sId, PageInfo pageInfo) {
	    System.out.println("pageInfo" + pageInfo);
	    int start = pageInfo.getStartList();
	    int end = pageInfo.getEndList();
	    MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
	    return requestEventMapper.getEventInfo(sId, start, end);
	}
	// 이벤트 상세보기  ===> 시향언니 
	public MypageRequestEventDTO getEventInfo(int eventId) {
		System.out.println("eventId" + eventId);	
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.selectByNo(eventId);
	}
	// 이벤트 취소  
	public int cancelEventParticipant(int eventId) {
		System.out.println("eventId" + eventId);	
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.updateByCancel(eventId);
	}
	// 이벤트 수정페이지 가기
	public MypageRequestEventDTO getEventModifyInfo(int eventId) {
		System.out.println("eventId" + eventId);	
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.selectByNo(eventId);
	}
	public List<MypageEventWinnerDTO> getParticipantList(int eventId, PageInfo pageInfo) {
		System.out.println("pageInfo" + pageInfo);	
		int start = pageInfo.getStartList();
	    int end = pageInfo.getEndList();
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.selectParticipantByNo(eventId, start, end);
	}
	public List<MypageEventWinnerDTO> getWinnerList(int eventId, PageInfo pageInfo) {
		System.out.println("pageInfo" + pageInfo);	
		int start = pageInfo.getStartList();
	    int end = pageInfo.getEndList();
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.selectWinnerByNo(eventId, start, end);
	}
	public int modifyEvent(int eventId, String eventName) {
		System.out.println("eventName" + eventName);	
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.updateByEvent(eventId, eventName);
	}
	public int getEventCount(int sId) {
		System.out.println("sId" + sId);	
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.selectCount(sId);
	}
	public int getEventParticipantCount(int eventId) {
		System.out.println("eventId" + eventId);	
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.selectParticipantCount(eventId);
	}
	
	public int getEventWinnerCount(int eventId) {
		System.out.println("eventId" + eventId);	
		MypageRequestEventMapper requestEventMapper = sqlSession.getMapper(MypageRequestEventMapper.class);
		return requestEventMapper.selectWinnerCount(eventId);
	}
	
	
}
	
		//return selectMember;
	//회원정보 한줄만 가져오니까 ( row)selectOne 
//		public MemberDTO getInfo(int uId) {
//		return sqlSession.selectOne("memMapper.", uId);
//		// 회원 정보 한 줄(row) 만 가져오니까 selectOne
//	}
	
	//회원 삭제 
//	public int delMember(int uId) {
//		System.out.println("[MemberDAO] delMember()");
//	    MemberDAO memberDAO = new MemberDAO(); // MemberDAO 객체 생성
//	    return memberDAO.delMember(uId); 

	    //return sqlSession.delete("memberMapper.delMember", uId);
		// 회원 정보 한 줄(row) 만 가져오니까 selectOne
				

	
