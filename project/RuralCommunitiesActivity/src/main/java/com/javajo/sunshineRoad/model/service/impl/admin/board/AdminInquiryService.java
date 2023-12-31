package com.javajo.sunshineRoad.model.service.impl.admin.board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.board.AFaqCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AFaqDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AInquiryCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.board.AInquiryDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AInquiryDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminInquiryService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminInquiryService implements IAdminInquiryService {

	
	private final AInquiryDAO inquiryDAO;
	private final AInquiryCntDAO inquiryCntDAO;
	
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	
	@Override
	public List<AInquiryDTO> getAllInquiry(int requestPageNo, int perPagePostCount) {
		System.out.println("[AdminInquiryService] getAllInquiry()");
		
		int totalCount = 0;
		
		totalCount = inquiryCntDAO.getAllInquiryCnt();
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
		return inquiryDAO.getAllInquiry(startPostNo,endPostNo);
	}

	@Override
	public List<AInquiryDTO> selectInquiryStatus(ASearchDTO searchDTO, int requestPageNo, int perPagePostCount) {
		System.out.println("[AdminInquiryService] selectInquiryStatus()");
		
		int totalCount = 0;
		
		totalCount = inquiryCntDAO.selectInquiryStatusCnt(searchDTO);
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
		return inquiryDAO.selectInquiryStatus(searchDTO,startPostNo,endPostNo);
	}

	@Override
	public List<AInquiryDTO> selectInquiryTypes(ASearchDTO searchDTO, int requestPageNo, int perPagePostCount) {
		System.out.println("[AdminInquiryService] selectInquiryTypes()");
		
		int totalCount = 0;
		
		totalCount = inquiryCntDAO.selectInquiryTypesCnt(searchDTO);
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        
		return inquiryDAO.selectInquiryTypes(searchDTO,startPostNo,endPostNo);
	}

	@Override
	public int UnansweredInquiryCnt() {
		System.out.println("[AdminInquiryService] UnansweredInquiryCnt()");

		return inquiryCntDAO.UnansweredInquiryCnt();
	}

	@Override
	public List<AInquiryDTO> detailInquiry(int inquiryId) {
		System.out.println("[AdminInquiryService] detailInquiry()");
		return inquiryDAO.detailInquiry(inquiryId);
	}

	@Override
	public void answerInquiry(AInquiryDTO inquiryDTO) {
		System.out.println("[AdminInquiryService] answerInquiry()");
		inquiryDAO.answerInquiry(inquiryDTO);
		
	}

	@Override
	public int deleteInquiryPost(int inquiryId) {
		System.out.println("[AdminInquiryService] deleteInquiryPost()");
		return inquiryDAO.deleteInquiryPost(inquiryId);
	}

}
