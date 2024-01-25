package com.javajo.sunshineRoad.mappers.admin.board;


import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AFaqDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AInquiryDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

@Mapper
public interface AdminInquiryMapper {


	//답변
	public void answerInquiry(AInquiryDTO inquiryDTO);

	//삭제하기 객체
	public int deleteInquiryPost(int inquiryId);


	//상세조회
	public List<AInquiryDTO> detailInquiry(int inquiryId);


	// Oracle
//	//전체 조회
//	public List<AInquiryDTO> getAllInquiry(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	//status
//	public List<AInquiryDTO> selectInquiryStatus(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//
//	//type
//	public List<AInquiryDTO> selectInquiryTypes(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	// MySQL
	//전체 조회
	public List<AInquiryDTO> getAllInquiry(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);
	//status
	public List<AInquiryDTO> selectInquiryStatus(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);

	//type
	public List<AInquiryDTO> selectInquiryTypes(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);




}