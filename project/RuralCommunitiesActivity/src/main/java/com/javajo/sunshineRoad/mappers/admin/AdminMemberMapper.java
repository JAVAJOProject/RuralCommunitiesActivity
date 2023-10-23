package com.javajo.sunshineRoad.mappers.admin;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;


@Mapper
public interface AdminMemberMapper {


    //adminMembers
    public List<AdminMemberDTO> getAllMembers(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//전체조회
    public List<AdminMemberDTO> selectMemberID(int uId);//아이디 선택조회
    public List<AdminMemberDTO> selectMemberDATE(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//가입일 기간 조회
    public void updateMember(AdminMemberDTO adminMemberDTO);//수정
    public void delMember(int uId);//삭제

    public List<AMCommunityDTO> wrotePost(@Param("uId") int uId,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//작성한글




}