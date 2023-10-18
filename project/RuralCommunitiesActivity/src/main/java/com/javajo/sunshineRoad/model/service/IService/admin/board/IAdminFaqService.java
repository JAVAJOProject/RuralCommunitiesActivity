package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.admin.board.AFaqDTO;

public interface IAdminFaqService {

	//전체조회
	public List<AFaqDTO> getAllFaq(int requestPageNo, int perPagePostCount);

	//상세조회
	public List<AFaqDTO> detailFaq(int faqId);

	//등록하기
	public void registrationFaq(AFaqDTO faqDTO);
	
	//수정하기 객체
	public void modifyFaqPost(AFaqDTO faqDTO);
	

	//삭제하기 객체
	public int deleteFaqPost(int faqId);
	
}
