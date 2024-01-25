package com.javajo.sunshineRoad.model.dao.admin.members;

import java.util.HashMap;
import java.util.List;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.member.AdminSellerMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminSellerDTO;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AdminSellerDAO {

	private final SqlSessionTemplate sqlSession;
	
	
	//제공자전체조회
	public List<AdminSellerDTO> getAllSeller(int startPostNo, int endPostNo) {
		System.out.println("[AdminSellerDAO] getAllSeller()");
		
		AdminSellerMapper sellerMapper = sqlSession.getMapper(AdminSellerMapper.class);

		return sellerMapper.getAllSeller(startPostNo,endPostNo);

	}
	
	
	//회원선택 조회      아이디
	public List<AdminSellerDTO> selectSellerID(long sId) {
		System.out.println("[AdminMemberDAO] selectMemberID()");
		
		AdminSellerMapper sellerMapper = sqlSession.getMapper(AdminSellerMapper.class);
		return sellerMapper.selectSellerIDAdmin(sId);
		
		
	}
	
	//회원선택 조회      기간조회
	public List<AdminSellerDTO> selectSellerDATE(ASearchDTO searchDTO,int startPostNo, int endPostNo) {
		System.out.println("[AdminSellerDAO] selectSellerDATE()");
		
		AdminSellerMapper sellerMapper = sqlSession.getMapper(AdminSellerMapper.class);

		return sellerMapper.selectSellerDATE(searchDTO,startPostNo,endPostNo);

		
	}
	
	
	
	
	
	//회원 삭제
	public void delSeller(long sId) {
		System.out.println("[AdminSellerrDAO] delSeller()");
		
		AdminSellerMapper sellerMapper = sqlSession.getMapper(AdminSellerMapper.class);
		sellerMapper.delSellerAdmin(sId);
		
		

	}
	
	
	//회원정보수정
	public void updateSeller(AdminSellerDTO adminSellerDTO) throws Exception{
		System.out.println("[AdminSellerDAO] updateSeller()");
		
		AdminSellerMapper sellerMapper = sqlSession.getMapper(AdminSellerMapper.class);
		sellerMapper.updateSellerAdmin(adminSellerDTO);
		
	}
	
	//가입승인요천건 조회
	public List<AdminSellerDTO> appSeller(int startPostNo, int endPostNo){
		System.out.println("[AdminSellerDAO] appSeller()");
		
		AdminSellerMapper sellerMapper = sqlSession.getMapper(AdminSellerMapper.class);

		return sellerMapper.appSeller(startPostNo,endPostNo);

	}
	
	//가입승인하기
	public void updateApp(long sId) {
		System.out.println("[AdminSellerDAO] updateApp()");
		
		AdminSellerMapper sellerMapper = sqlSession.getMapper(AdminSellerMapper.class);
		sellerMapper.updateAppAdmin(sId);
	}
	
	//작성한글 보기 wrotePost
	public List<AdminSellerDTO> wrotePost(long sId,int startPostNo, int endPostNo){
		System.out.println("[AdminSellerDAO] wrotePost()");
		
		AdminSellerMapper sellerMapper = sqlSession.getMapper(AdminSellerMapper.class);

		return sellerMapper.wrotePost(sId,startPostNo,endPostNo);

		
	}
	
	
	
}