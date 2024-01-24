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

	public List<AdminDTO> getAllAdmin(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//전체조회
	public List<AdminDTO> selectAdminID(int adminId);//id조회
	public List<AdminDTO> selectAdminDATE(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//필터조회
	
	public List<AdminDTO> selectAdmin(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
    public void registrationAdmin(AdminDTO adminDTO);
	
	public void updateAdmin(AdminDTO adminDTO);//수정
	public void delAdmin(int adminId);//삭제
	public List<AdminDTO> appAdmin(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//가입승인요청건 관리자만
	public void updateApp(int adminId);//가입승인


}