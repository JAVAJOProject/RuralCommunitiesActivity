package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;


public interface IAdminActivityService {

	//전체조회
	public List<AActivityDTO> getAllActivity(int requestPageNo,int perPagePostCount);
	
	//기간조회 체험시작/마감,예약마감일
	public List<AActivityDTO>  selectDateActivity(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);
	
	//기간조회 체험시작/마감,예약마감일 cnt
	public Integer selectDateActivityTotalCount(ASearchDTO searchDTO);

	//필터링조회
	public List<AActivityDTO> selectActivity(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);
	
	//필터링조회 cnt
	public Integer selectActivityTotalCount(ASearchDTO searchDTO);
	
	//이미지 조회
	public List<AActivityImgDTO> detailImgActivity (int aId);
	//등록하기
	public void registrationActivity(AActivityDTO activityDTO);
	
	//수정하기 객체
	public void modifyActivityPost(AActivityDTO activityDTO);
	
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteActivityImg(int a_id);
	
	//삭제하기 객체
	public int deleteActivityPost(int a_id);
	//상세조회
	public List<AActivityDTO> detailActivity(int aId);
	
	
} 
