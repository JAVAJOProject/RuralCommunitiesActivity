package com.javajo.sunshineRoad.mappers;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.AInquiryDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

@Mapper
public interface AdminInquiryMapper {


	//전체 조회
	public List<AInquiryDTO> getAllInquiry(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	//status
	public List<AInquiryDTO> selectInquiryStatus(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//type
	public List<AInquiryDTO> selectInquiryTypes(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//상세조회
	public List<AInquiryDTO> detailInquiry(int inquiryId);
	
	//답변
	public void answerInquiry(AInquiryDTO inquiryDTO);
	
	//삭제하기 객체
	public int deleteInquiryPost(int inquiryId);
	







}
