package com.javajo.sunshineRoad.mappers.admin.member;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface AdminMapper {

	public List<AdminDTO> selectAdminID(long adminId);//id조회
    public void registrationAdmin(AdminDTO adminDTO);

	public void updateAdmin(AdminDTO adminDTO);//수정
	public void delAdmin(long adminId);//삭제
	public void updateApp(long adminId);//가입승인


	// Oracle
//	public List<AdminDTO> getAllAdmin(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//전체조회
//	public List<AdminDTO> selectAdminDATE(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//필터조회
//
//	public List<AdminDTO> selectAdmin(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<AdminDTO> appAdmin(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//가입승인요청건 관리자만

	// MySQL
	public List<AdminDTO> getAllAdmin(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//전체조회
	public List<AdminDTO> selectAdminDATE(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//필터조회

	public List<AdminDTO> selectAdmin(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);
	public List<AdminDTO> appAdmin(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//가입승인요청건 관리자만
}