package com.javajo.sunshineRoad.model.dao.admin.members;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminMemberMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;

import lombok.RequiredArgsConstructor;

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
		//List<AdminMemberDTO> memberList =
		return memberMapper.selectMemberDATE(searchDTO,startPostNo,endPostNo);

	}





	//회원 삭제
	public void delMember(int uId) {
		System.out.println("[AdminMemberDAO] delMember()");

		AdminMemberMapper memberMapper = sqlSession.getMapper(AdminMemberMapper.class);
		memberMapper.delMember(uId);



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