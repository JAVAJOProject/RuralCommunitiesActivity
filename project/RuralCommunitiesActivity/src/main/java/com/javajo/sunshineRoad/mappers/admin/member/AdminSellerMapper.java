package com.javajo.sunshineRoad.mappers.admin.member;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminSellerDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminSellerMapper {


	public List<AdminSellerDTO> selectSellerIDAdmin(long sId);//id조회
	public void updateSellerAdmin(AdminSellerDTO adminSellerDTO);//수정
	public void delSellerAdmin(long sId);//삭제
	public void updateAppAdmin(long sId);//승인하기


	// Oracle
	public List<AdminSellerDTO> getAllSeller(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//전체조회
	public List<AdminSellerDTO> selectSellerDATE(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//필터조회
	public List<AdminSellerDTO> appSeller(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//가입승인요청건

	public List<AdminSellerDTO> wrotePost(long sId,@Param("startPostNo") int startPostNo, @Param("endPostNo")int endPostNo);//작성한글


	// MySQL
//	public List<AdminSellerDTO> getAllSeller(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//전체조회
//	public List<AdminSellerDTO> selectSellerDATE(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//필터조회
//	public List<AdminSellerDTO> appSeller(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//가입승인요청건
//
//	public List<AdminSellerDTO> wrotePost(long sId,@Param("startPostNo") int startPostNo, @Param("perPagePostCount")int perPagePostCount);//작성한글
}