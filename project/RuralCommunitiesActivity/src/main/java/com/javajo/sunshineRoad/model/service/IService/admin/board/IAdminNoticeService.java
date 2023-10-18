package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeImgDTO;

public interface IAdminNoticeService {

	//전체조회
	public List<ANoticeDTO> getAllNotice(int requestPageNo, int perPagePostCount);

	//상세조회
	public List<ANoticeDTO> detailNotice(int noticeId);

	//상세조회 이미지
	public List<ANoticeImgDTO> detailNoticeImg(int noticeId);
	
	//등록하기
	public void registrationNotice(ANoticeDTO noticeDTO);
	
	

	//수정하기 객체
	public void modifyNoticePost(ANoticeDTO noticeDTO);
	
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteNoticeImg(int recAPostId);
	
	//삭제하기 객체
	public int deleteNoticePost(int noticeId);
	
}
