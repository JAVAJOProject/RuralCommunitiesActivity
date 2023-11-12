package com.javajo.sunshineRoad.model.dao.mypageMember;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageMember.MypageMemberMapper;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageMemberDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;

	// 로그인한 회원
	public MypageMemberDTO getInfo(int uId) {
		System.out.println("MypageMemberDAO" + uId);
		MypageMemberMapper memMapper = sqlSession.getMapper(MypageMemberMapper.class);
		return memMapper.selectByNo(uId);
	}

	public int changeInfo(String uName, int uId) {
		System.out.println("uName" + uName);
		MypageMemberMapper memMapper = sqlSession.getMapper(MypageMemberMapper.class);
		return memMapper.updateByName(uName, uId);
	}

	public boolean changeInfo(int uId) {
		System.out.println("uId" + uId);
		MypageMemberMapper memMapper = sqlSession.getMapper(MypageMemberMapper.class);
		return memMapper.changeByName(uId);
	}

	// return selectMember;
	// 회원정보 한줄만 가져오니까 ( row)selectOne
//		public MemberDTO getInfo(int uId) {
//		return sqlSession.selectOne("memMapper.", uId);
//		// 회원 정보 한 줄(row) 만 가져오니까 selectOne
//	}

//	// 회원 삭제
//	public int delMember(int uId) {
//		System.out.println("[MemberDAO] delMember()");
//		MypageMemberMapper memberDAO = new MypageMemberMapper(); // MemberDAO 객체 생성
//	    return memberDAO.delMember(uId); 
//
//	// return sqlSession.delete("memberMapper.delMember", uId);
//	// 회원 정보 한 줄(row) 만 가져오니까 selectOne
	}