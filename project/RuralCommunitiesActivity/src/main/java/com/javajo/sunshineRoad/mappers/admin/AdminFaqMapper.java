package com.javajo.sunshineRoad.mappers.admin;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.AFaqDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminFaqMapper {


	//전체 조회
	public List<AFaqDTO> getAllFaq(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//상세조회
	public List<AFaqDTO> detailFaq(int faqId);
	
	//필터링 조회
	public List<AFaqDTO> selectFaq(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	
	//등록하기. 이미지는 따로
	public void registrationFaq(AFaqDTO faqDTO);
	
	//수정하기 객체
	public void modifyFaqPost(AFaqDTO faqDTO);
	
	
	//삭제하기 객체
	public int deleteFaqPost(int faqId);
	







}