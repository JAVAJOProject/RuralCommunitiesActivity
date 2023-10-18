package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminRActivityMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ARActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ARecActivityDAO {
	
	private final SqlSessionTemplate sqlSession;
	

	//전체조회	
	public List<ARecActivityDTO> getAllRecActivity(int startPostNo, int endPostNo) {
	System.out.println("[RecActivityDAO] getAllRecTown()");
	
	AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
	return rActivityMapper.getAllRecActivity(startPostNo,endPostNo);
}
	
	//작성일 조쇠
	public List<ARecActivityDTO> selectDateRecActivity(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[RecActivityDAO] selectDateRecActivity()");
		
		System.out.println(searchDTO.getStartDate() +","+searchDTO.getEndDate()+"," +startPostNo +","+endPostNo);
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		return rActivityMapper.selectDateRecActivity(searchDTO,startPostNo,endPostNo);
	}
	
	//필터링 조회  시군구 키워드 
	public List<ARecActivityDTO> selectRecActivity (ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[RecActivityDAO] selectRecActivity()");
		
		System.out.println(searchDTO.getStartDate()+","+startPostNo+","+endPostNo+","+searchDTO.getKeyword());
		
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		return rActivityMapper.selectRecActivity(searchDTO,startPostNo,endPostNo);
	}
	
	
	//상세조회
	public List<ARecActivityDTO> detailRecActivity (int recAPostId){
		System.out.println("[RecActivityDAO] detailRecActivity()");
		
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		return rActivityMapper.detailRecActivity(recAPostId);
	}
	
	
	//등록하기. 이미지는 따로 POST
	public void registrationRecActivity(ARecActivityDTO aRecActivityDTO) {
		System.out.println("[RecActivityDAO] registrationRecActivity()");
		
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		rActivityMapper.registrationRecActivity(aRecActivityDTO);
	}
	
	
	//등록하기 이미지
	public int PostMaxID() {
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		return rActivityMapper.PostMaxID();
	}
	public int ImgMaxID() {
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		return rActivityMapper.ImgMaxID();
	}
	public void recActivityImgValues(ARActivityImgDTO recActivityImg) {
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		rActivityMapper.recActivityImgValues(recActivityImg);
	}
	public void updateImgID(ARecActivityDTO recActivityDTO) {
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		rActivityMapper.updateImgID(recActivityDTO);
	}

	
	
	//수정하기 객체
	public void modifyRecActivityPost(ARecActivityDTO aRecActivityDTO) {
		
		System.out.println("[RecActivityDAO] modifyRecActivityPost() 객체 수정");
		
		System.out.println(aRecActivityDTO.getRecAPostId()+","+aRecActivityDTO.getRecAKeywordId()+","+aRecActivityDTO.getSigunguId());
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		rActivityMapper.modifyRecActivityPost(aRecActivityDTO);
		
		
	}
	
	
	//삭제하기 객체
	public int deleteRecActivityPost(int recAPostId) {
		
		System.out.println("[RecActivityDAO] deleteRecActivityPost() 객체 삭제");
		
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		return rActivityMapper.deleteRecActivityPost(recAPostId);
	}
	
	
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteRecActivityImg(int recAPostId) {
		System.out.println("[RecActivityDAO] deleteRecActivityImg() 이미지 삭제");
		
		AdminRActivityMapper rActivityMapper = sqlSession.getMapper(AdminRActivityMapper.class);
		int aImgId = rActivityMapper.selectImgId(recAPostId);
		return rActivityMapper.deleteRecActivityImg(aImgId);
	}

	
	
	
	
	
	
	
	
	
	
}
