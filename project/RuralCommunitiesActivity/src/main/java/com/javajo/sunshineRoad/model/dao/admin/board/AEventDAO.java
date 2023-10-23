package com.javajo.sunshineRoad.model.dao.admin.board;

import com.javajo.sunshineRoad.mappers.admin.AdminEventMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AEventDAO {

private final SqlSessionTemplate sqlSession;
	

	//전체조회	
	public List<AEventDTO> getAllEvent(int startPostNo, int endPostNo){
		System.out.println("[EventDAO] getAllEvent()");
		
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);

		return eventMapper.getAllEvent(startPostNo,endPostNo);

	}
	
	
	//상세조회
	public List<AEventDTO> detailEvent (int eventId){
		System.out.println("[EventDAO] detailEvent()");
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		return eventMapper.detailEvent(eventId);
	}
	
	
	
	
	
	//이벤트 응모 시작
	public List<AEventDTO> selectEventRecruitDate(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[EventDAO] selectEventRecruitDate()");
		
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		return eventMapper.selectEventRecruitDate(searchDTO,startPostNo,endPostNo);
		
	}
	//이벤트 진행 시작
	public List<AEventDTO> selectEventStartDate(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		
		System.out.println("[EventDAO] selectEventStartDate()");
		
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		return eventMapper.selectEventStartDate(searchDTO,startPostNo,endPostNo);
	}
	
	//작성일
	public List<AEventDTO> selectEventCreatedDate(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		
		System.out.println("[EventDAO] selectEventCreatedDate()");
		
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		return eventMapper.selectEventCreatedDate(searchDTO,startPostNo,endPostNo);
	}


	//필터링 조회
	public List<AEventDTO> selectEvent(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[EventDAO] selectEvent()");

		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		return eventMapper.selectEvent(searchDTO,startPostNo,endPostNo);
	}
	
	

	//등록하기. 이미지는 따로 POST
	public void registrationEvent(AEventDTO eventDTO) {
		System.out.println("[EventDAO] registrationEvent()");
		
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		eventMapper.registrationEvent(eventDTO);
	}


	//등록하기 이미지
	public int PostMaxID() {
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		return eventMapper.PostMaxID();
	}
	public int ImgMaxID() {
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		return eventMapper.ImgMaxID();
	}
	public void eventImgValues(AEventImgDTO eventImg) {
		System.out.println("DAO eventImgValues");
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		eventMapper.eventImgValues(eventImg);
	}
	public void updateImgID(AEventDTO eventDTO) {
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		eventMapper.updateImgID(eventDTO);
	}

	
	//수정하기 객체
	public void modifyEventPost(AEventDTO eventDTO) {
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		eventMapper.modifyEventPost(eventDTO);
	}

	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteEventImg(int eventId) {
		System.out.println("[EventDAO] deleteEventImg() 이미지 삭제");
		System.out.println(eventId);
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		int eImgId = eventMapper.selectImgId(eventId);
		System.out.println(eventId);
		System.out.println(eImgId);
		return eventMapper.deleteEventImg(eImgId);
	}

	//삭제하기 객체
	public int deleteEventPost(int eventId) {
		System.out.println("[EventDAO] deleteEventPost() 객체 삭제");
		
		AdminEventMapper eventMapper = sqlSession.getMapper(AdminEventMapper.class);
		return eventMapper.deleteEventPost(eventId);
	}
	

	
	
	
	
}