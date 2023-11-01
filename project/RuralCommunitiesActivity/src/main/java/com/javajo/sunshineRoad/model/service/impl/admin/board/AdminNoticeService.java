package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AEventDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AMCommunityDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.ANoticeCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.ANoticeDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminNoticeService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminNoticeService implements IAdminNoticeService {

	private final ANoticeDAO noticeDAO;
	private final ANoticeCntDAO noticeCntDAO;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	
	//전체조회
	public List<ANoticeDTO> getAllNotice(int requestPageNo, int perPagePostCount){
		System.out.println("[AdminNoticeService] getAllNotice()");
		
		int totalCount = 0;
		
		totalCount = noticeCntDAO.getTotalCount();
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
		return noticeDAO.getAllNotice(startPostNo,endPostNo);
	}


	//상세조회
	public List<ANoticeDTO> detailNotice(int noticeId){
		System.out.println("AdminNoticeService detailNotice");
		
		return noticeDAO.detailNotice(noticeId);
		 
	}
	
	//상세조회 이미지
	public List<ANoticeImgDTO> detailNoticeImg(int noticeId){
		System.out.println("AdminNoticeService detailNoticeImg");
		
		return noticeDAO.detailNoticeImg(noticeId);
		 
	}
	//등록하기
	public void registrationNotice(ANoticeDTO noticeDTO) {
		System.out.println("AdminNoticeService registrationRecActivity()");
		noticeDAO.registrationNotice(noticeDTO);
	}
	
	
	//수정하기 객체
	public void modifyNoticePost(ANoticeDTO noticeDTO) {
		System.out.println("AdminNoticeService modifyNoticePost()");
		noticeDAO.modifyNoticePost(noticeDTO);
	}
	
	
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteNoticeImg(int noticeId) {
		System.out.println("AdminNoticeService deleteNoticeImg()");
		return noticeDAO.deleteNoticeImg(noticeId);
	}

	//삭제하기 객체
	public int deleteNoticePost(int noticeId) {
		System.out.println("AdminNoticeService deleteNoticePost");
		return noticeDAO.deleteNoticePost(noticeId);
	}

}
