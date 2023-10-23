package com.javajo.sunshineRoad.mappers.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminSellerDTO;

@Mapper
public interface AdminSellerMapper {

	

	public List<AdminSellerDTO> getAllSeller(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//전체조회
	public List<AdminSellerDTO> selectSellerDATE(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//필터조회
	public List<AdminSellerDTO> appSeller(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//가입승인요청건
	
	
	public List<AdminSellerDTO> wrotePost(int sId,@Param("startPostNo") int startPostNo, @Param("endPostNo")int endPostNo);//작성한글

	public List<AdminSellerDTO> selectSellerIDAdmin(int sId);//id조회
	public void updateSellerAdmin(AdminSellerDTO adminSellerDTO);//수정
	public void delSellerAdmin(int sId);//삭제
	public void updateAppAdmin(int sId);//승인하기

}