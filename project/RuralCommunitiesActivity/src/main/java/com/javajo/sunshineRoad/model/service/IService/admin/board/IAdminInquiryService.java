package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;
import com.javajo.sunshineRoad.model.dto.admin.board.AInquiryDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

public interface IAdminInquiryService {

	//전체조회
	public List<AInquiryDTO> getAllInquiry(int requestPageNo, int perPagePostCount);

	//상태 조회
	public List<AInquiryDTO> selectInquiryStatus(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);

	//카테고리 조회
	public List<AInquiryDTO> selectInquiryTypes(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);

	//미답변 카운트
	public int unansweredInquiryCnt();

	//상세조회
	public List<AInquiryDTO> detailInquiry(int inquiryId);

	
	//답변하기 - 수정
	public void answerInquiry(AInquiryDTO inquiryDTO);
	

	//삭제하기 객체
	public int deleteInquiryPost(int inquiryId);

}
