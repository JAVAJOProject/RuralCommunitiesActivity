package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AEventDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminEventService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AdminEventService implements IAdminEventService {

	private final AEventDAO eventDAO;
	private final AdminEventCntService eventCntService;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;

	
	//전체조회
	@Override
	public List<AEventDTO> getAllEvent(int requestPageNo,int perPagePostCount) {
		System.out.println("[EventService] getAllEvent()");
		int totalCount = 0;
		
		totalCount = eventCntService.getTotalCount();
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
		return eventDAO.getAllEvent(startPostNo,endPostNo);
	}

	
	//상세조회
	@Override
	public List<AEventDTO> detailEvent(int eventId) {
		System.out.println("EventService detailEvent");
		return eventDAO.detailEvent(eventId);
	}
		
	

	//필터링 조회 날짜
	@Override
	public List<AEventDTO> selectEventDate(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {
		System.out.println("[EventService] selectEventDate()");
		
		int totalCount = 0;
		int startPostNo = 0;
		int endPostNo = 0;
        
		
		System.out.println(searchDTO.getStartDate() + ","+searchDTO.getEndDate() );
		//날짜가 혹시 없는경우 전체 조회    이게 안먹히네..
		if(searchDTO.getStartDate() == null || searchDTO.getStartDate().isEmpty() || searchDTO.getStartDate().equals("")) {
			searchDTO.setStartDate("2017-01-01");
			if(searchDTO.getEndDate() == null || searchDTO.getEndDate().isEmpty() || searchDTO.getEndDate().equals("")) {
				searchDTO.setEndDate("2025-12-31");
			}
		}
		

		switch(searchDTO.getDateType()) {
		case 1 :  	totalCount = eventCntService.selectEventRecruitDateCnt(searchDTO);
					startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
					endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
					
					System.out.println(startPostNo +","+endPostNo+",");
					return eventDAO.selectEventRecruitDate(searchDTO,startPostNo,endPostNo); //이벤트 응모 시작
					
		case 2 :  	totalCount = eventCntService.selectEventStartDateCnt(searchDTO);
					startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
					endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
					return eventDAO.selectEventStartDate(searchDTO,startPostNo,endPostNo);  //이벤트 진행 시작
					
		case 3 :  	totalCount = eventCntService.selectEventCreatedDateCnt(searchDTO);
					startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
					endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
					return eventDAO.selectEventCreatedDate(searchDTO,startPostNo,endPostNo);  //작성일
					
		default :  	totalCount = eventCntService.selectEventRecruitDateCnt(searchDTO);
					startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
					endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
					return eventDAO.selectEventRecruitDate(searchDTO,startPostNo,endPostNo); //이벤트 응모 시작
		}
	}


	//필터링조회 지역,모집방식(상태는 3.5 default)
	@Override
	public List<AEventDTO> selectEventRequest(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {
		System.out.println("[EventService] selectEventRequest()");
		
		int totalCount = 0;
		int startPostNo = 0;
		int endPostNo = 0;
		
//		모집방식 theme
//		1	선착순
//		2	랜덤추첨
//		3	조건에 맞는 신청만
//		4	사연뽑기		
//		상태코드  3.5만 보이게 세팅
//		1	요청완료
//		2	검토중
//		3	승인 및 게시 대기
//		4	기각
//		5	종료
		totalCount = eventCntService.selectEventCnt(searchDTO);
		startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
		endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
		return eventDAO.selectEvent(searchDTO,startPostNo,endPostNo);
	}

	
	
	
	//등록하기
	public void registrationEvent(AEventDTO eventDTO) {
		System.out.println("EventService() registrationEvent 객체 등록");
		eventDAO.registrationEvent(eventDTO);
	};

	//수정하기 객체
	public void modifyEventPost(AEventDTO eventDTO) {
		System.out.println("EventService modifyEventPost 객체 수정하기");
		eventDAO.modifyEventPost(eventDTO);
	}
	
	
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteEventImg(int eventId) {
		System.out.println("EventService deleteEventImg 이미지 삭제");
		return eventDAO.deleteEventImg(eventId);
	}
	
	//삭제하기 객체
	public int deleteEventPost(int eventId) {
		System.out.println("EventService deleteEventPost 객체 삭제");
		return eventDAO.deleteEventPost(eventId);
	}

	
	
	
	
	
}
