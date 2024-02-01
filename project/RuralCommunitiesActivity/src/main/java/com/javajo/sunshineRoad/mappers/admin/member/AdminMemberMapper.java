package com.javajo.sunshineRoad.mappers.admin.member;

import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;


@Mapper
public interface AdminMemberMapper {

    public void registrationMember(AdminMemberDTO adminMemberDTO);


    public void updateMember(AdminMemberDTO adminMemberDTO);//수정
    public void delMember(long uId);//삭제


    public List<AdminMemberDTO> selectMemberID(long uId);//아이디 선택조회

    // Oracle
    //adminMembers
    public List<AdminMemberDTO> getAllMembers(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//전체조회
    public List<AdminMemberDTO> selectMemberDATE(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//가입일 기간 조회

    public List<AdminMemberDTO> selectMember(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

    public List<AMCommunityDTO> wrotePost(@Param("uId") long uId,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);//작성한글

    // MySQL
//    //adminMembers
//    public List<AdminMemberDTO> getAllMembers(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//전체조회
//    public List<AdminMemberDTO> selectMemberDATE(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//가입일 기간 조회
//
//    public List<AdminMemberDTO> selectMember(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);
//
//    public List<AMCommunityDTO> wrotePost(@Param("uId") long uId,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);//작성한글

}