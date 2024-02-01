package com.javajo.sunshineRoad.mappers.admin.board;


import com.javajo.sunshineRoad.model.dto.admin.board.AFaqDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminFaqMapper {


	//등록하기. 이미지는 따로
	public void registrationFaq(AFaqDTO faqDTO);

	//수정하기 객체
	public void modifyFaqPost(AFaqDTO faqDTO);


	//삭제하기 객체
	public int deleteFaqPost(int faqId);



	//상세조회
	public List<AFaqDTO> detailFaq(int faqId);

	// Oracle
	//전체 조회
	public List<AFaqDTO> getAllFaq(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//필터링 조회
	public List<AFaqDTO> selectFaq(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	// MySQL
//	//전체 조회
//	public List<AFaqDTO> getAllFaq(@Param("startPostNo") int startPostNo, @Param(" perPagePostCount") int perPagePostCount);
//
//	//필터링 조회
//	public List<AFaqDTO> selectFaq(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param(" perPagePostCount") int perPagePostCount);



}