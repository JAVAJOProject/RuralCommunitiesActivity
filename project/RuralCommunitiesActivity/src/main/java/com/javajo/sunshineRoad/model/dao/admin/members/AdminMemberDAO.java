package com.javajo.sunshineRoad.model.dao.admin.members;

import com.javajo.sunshineRoad.mappers.admin.member.AdminMemberMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;
import lombok.RequiredArgsConstructor;

import org.apache.ibatis.annotations.Param;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminMemberDAO {

	private final SqlSessionTemplate sqlSession;

	//회원전체조회
	public List<AdminMemberDTO> getAllMembers(int startPostNo, int endPostNo) {
		System.out.println("[AdminMemberDAO] getAllMembers()");

		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);
		return memberMapper.getAllMembers(startPostNo,endPostNo);

	}




	//회원선택 조회      아이디
	public List<AdminMemberDTO> selectMemberID(int uId) {
		System.out.println("[AdminMemberDAO] selectMemberID()");

		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);
		return memberMapper.selectMemberID(uId);


	}

	//회원선택 조회      기간조회
	public List<AdminMemberDTO> selectMemberDATE(ASearchDTO searchDTO,int startPostNo, int endPostNo) {
		System.out.println("[AdminMemberDAO] selectMemberDATE()");

		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);

		return memberMapper.selectMemberDATE(searchDTO,startPostNo,endPostNo);

	}

	//회원 선택 조회   아이디 + 기간
	public List<AdminMemberDTO> selectMember(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[AdminMemberDAO] selectMember()");

		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);

		return memberMapper.selectMember(searchDTO,startPostNo,endPostNo);
		
    }



	//회원 삭제
	public void delMember(int uId) {
		System.out.println("[AdminMemberDAO] delMember()");

		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);
		memberMapper.delMember(uId);



	}


	//회원 등록
	public void registrationMember(AdminMemberDTO adminMemberDTO) {
		System.out.println("[AdminMemberDAO] registrationMember()");

		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);
		memberMapper.registrationMember(adminMemberDTO);
	}
	
	//회원정보수정
	public void updateMember(AdminMemberDTO adminMemberDTO) throws Exception{
		System.out.println("[AdminMemberDAO] updateMember()");

		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);
		memberMapper.updateMember(adminMemberDTO);

	}

	//작성한글 보기 wrotePost
	public List<AMCommunityDTO> wrotePost(int uId,int startPostNo, int endPostNo){
		System.out.println("[AdminMemberDAO] wrotePost()");


		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);
		return memberMapper.wrotePost(uId,startPostNo,endPostNo);


	}

}