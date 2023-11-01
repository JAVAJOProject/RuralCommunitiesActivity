package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AActivityDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminActivityCntService;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminActivityService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AdminActivityService implements IAdminActivityService {

	private final AActivityDAO activityDAO;
	private final AdminActivityCntService activityCntService;
	
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	 

	
	
	//전체조회
	@Override
	public List<AActivityDTO> getAllActivity(int requestPageNo, int perPagePostCount) {
		System.out.println("[ActivityService] getAllActivity()");
				
		int totalCount = activityCntService.getTotalCount();
		
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
		
		return activityDAO.getAllActivity(startPostNo,endPostNo);
	}
	

	//필터링 조회 날짜
	@Override
	public List<AActivityDTO> selectDateActivity(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {
		System.out.println("[ActivityService] selectDateActivity()");
		
		int totalCount = 0;
		int startPostNo = 0;
		int endPostNo = 0;
        
		//날짜가 혹시 없는경우 전체 조회
		if(searchDTO.getStartDate() == null || searchDTO.getStartDate().isEmpty() || searchDTO.getStartDate().equals("")) {
			searchDTO.setStartDate("2020-01-01");
			if(searchDTO.getEndDate() == null || searchDTO.getEndDate().isEmpty() || searchDTO.getEndDate().equals("")) {
				searchDTO.setEndDate("2025-12-31");
			}
		}
		

		switch(searchDTO.getDateType()) {
		case 1 :  	totalCount = activityCntService.selectStartDateActivityCnt(searchDTO);
					startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
					endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
					return activityDAO.selectStartDateActivity(searchDTO,startPostNo,endPostNo); //체험 시작일
					
		case 2 :  	totalCount = activityCntService.selectEndDateActivityCnt(searchDTO);
					startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
					endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
					return activityDAO.selectEndDateActivity(searchDTO,startPostNo,endPostNo);  //체험 종료일
					
		case 3 :  	totalCount = activityCntService.selectDateReservationCnt(searchDTO);
					startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
					endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
					return activityDAO.selectDateReservation(searchDTO,startPostNo,endPostNo);  //예약일?
					
		default :  	totalCount = activityCntService.selectStartDateActivityCnt(searchDTO);
					startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
					endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
					return activityDAO.selectStartDateActivity(searchDTO,startPostNo,endPostNo); //체험 시작일
		}
	}


	//필터링조회
	@Override
	public List<AActivityDTO> selectActivity(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {
		System.out.println("[ActivityService] selectActivity()");
		
//		int totalCount = 0;
//		int startPostNo = 0;
//		int endPostNo = 0;
		
		//예약금액이 0인경우 다른 쿼리에 영향 없도록
//		if(searchDTO.getCharge() == 0) {
//			searchDTO.setCharge(100000);
//		}
		//키워드가 없는경우 다른 쿼리에 영향 없도록
//		if(searchDTO.getKeyword() == null || searchDTO.getKeyword().isEmpty() || searchDTO.getKeyword().equals("")) {
//			searchDTO.setKeyword("%나다%");
//		}
//		
		
		int totalCount = activityCntService.selectActivityCnt(searchDTO);
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
		int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
		return activityDAO.selectActivity(searchDTO,startPostNo,endPostNo);
	}

	
	
	
	
	//등록하기
	public void registrationActivity(AActivityDTO activityDTO) {
		System.out.println("registrationActivity() 객체등록");
		activityDAO.registrationActivity(activityDTO);
	};

	//수정하기 객체
	public void modifyActivityPost(AActivityDTO activityDTO) {
		System.out.println("activity modifyActivityPost 객체 수정하기");
		activityDAO.modifyActivityPost(activityDTO);
	}
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteActivityImg(int aId) {
		System.out.println("ActivityService deleteActivityImg 이미지 삭제");
		return activityDAO.deleteActivityImg(aId);
	}
	
	//삭제하기 객체
	public int deleteActivityPost(int aId) {
		System.out.println("ActivityService deleteActivityPost 객체 삭제");
		return activityDAO.deleteActivityPost(aId);
	}

	//상세조회
	@Override
	public List<AActivityDTO> detailActivity(int aId) {
		System.out.println("ActivityService detailActivity");
		return activityDAO.detailActivity(aId);
	}
	
}
