package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AEventDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AFaqCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AFaqDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AMCommunityDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.ANoticeCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.ANoticeDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AFaqDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminFaqService;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminNoticeService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminFaqService implements IAdminFaqService {

	private final AFaqDAO faqDAO;
	private final AFaqCntDAO faqCntDAO;

	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	
	//전체조회
	public List<AFaqDTO> getAllFaq(int requestPageNo, int perPagePostCount){
		System.out.println("[AdminFaqService] getAllFaq()");
		
		int totalCount = 0;
		
		totalCount = faqCntDAO.getTotalCount();
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
		return faqDAO.getAllFaq(startPostNo,endPostNo);
	}

	//필터링 조회
	public List<AFaqDTO> selectFaq(ASearchDTO searchDTO, int requestPageNo, int perPagePostCount){
		System.out.println("[AdminFaqService] selectFaq()");
		
		int totalCount = 0;
		
		totalCount = faqCntDAO.selectFaqCnt(searchDTO);
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
		return faqDAO.selectFaq(searchDTO,startPostNo,endPostNo);
	}
	
	//상세조회
	public List<AFaqDTO> detailFaq(int faqId){
		System.out.println("AdminFaqService detailFaq");
		
		return faqDAO.detailFaq(faqId);
		 
	}
	

	//등록하기
	public void registrationFaq(AFaqDTO faqDTO) {
		System.out.println("AdminFaqService registrationFaq()");
		faqDAO.registrationFaq(faqDTO);
	}
	
	
	//수정하기 객체
	public void modifyFaqPost(AFaqDTO faqDTO) {
		System.out.println("AdminFaqService modifyFaq()");
		faqDAO.modifyFaqPost(faqDTO);
	}
	
	


	//삭제하기 객체
	public int deleteFaqPost(int faqId) {
		System.out.println("AdminFaqService deleteFaqPost");
		return faqDAO.deleteFaqPost(faqId);
	}



}
