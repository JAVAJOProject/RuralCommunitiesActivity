package com.javajo.sunshineRoad.model.dao.mypageSeller;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.mypageSeller.MypageSellerMapper;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageSellerDAO {
	@Autowired
	private final SqlSessionTemplate sqlSession;

	// 로그인한 회원
	public MypageSellerDTO getInfo(int sId) {
		System.out.println("SellerDAO" + sId);
		MypageSellerMapper sellerMapper = sqlSession.getMapper(MypageSellerMapper.class);
		return sellerMapper.selectByNo(sId);
	}

	// return selectMember;
	// 회원정보 한줄만 가져오니까 ( row)selectOne
//		public MemberDTO getInfo(int uId) {
//		return sqlSession.selectOne("memMapper.", uId);
//		// 회원 정보 한 줄(row) 만 가져오니까 selectOne
//	}

	// 회원 삭제
//	public int delMember(int uId) {
//		System.out.println("[MemberDAO] delMember()");
//	    MemberDAO memberDAO = new MemberDAO(); // MemberDAO 객체 생성
//	    return memberDAO.delMember(uId); 

	// return sqlSession.delete("memberMapper.delMember", uId);
	// 회원 정보 한 줄(row) 만 가져오니까 selectOne

}
