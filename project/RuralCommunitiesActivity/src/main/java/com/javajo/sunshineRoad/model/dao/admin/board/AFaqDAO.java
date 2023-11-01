package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminEventMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminFaqMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AFaqDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AFaqDAO {

private final SqlSessionTemplate sqlSession;
	

	//전체조회	
	public List<AFaqDTO> getAllFaq(int startPostNo, int endPostNo){
		System.out.println("[AFaqDAO] getAllFaq()");
		
		AdminFaqMapper faqMapper = sqlSession.getMapper(AdminFaqMapper.class);
		return faqMapper.getAllFaq(startPostNo,endPostNo);
	}
	
	
	//상세조회
	public List<AFaqDTO> detailFaq (int faqId){
		System.out.println("[AFaqDAO] detailFaq()");
		AdminFaqMapper faqMapper = sqlSession.getMapper(AdminFaqMapper.class);
		return faqMapper.detailFaq(faqId);
	}
	
	
	
	
	
	//필터링 조회
	public List<AFaqDTO> selectFaq(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[EventDAO] selectEvent()");

		AdminFaqMapper faqMapper = sqlSession.getMapper(AdminFaqMapper.class);
		return faqMapper.selectFaq(searchDTO,startPostNo,endPostNo);
	}
	
	

	//등록하기. 이미지는 따로 POST
	public void registrationFaq(AFaqDTO faqDTO) {
		System.out.println("[EventDAO] registrationFaq()");
		
		AdminFaqMapper faqMapper = sqlSession.getMapper(AdminFaqMapper.class);
		faqMapper.registrationFaq(faqDTO);
	}

	
	//수정하기 객체
	public void modifyFaqPost(AFaqDTO faqDTO) {
		AdminFaqMapper faqMapper = sqlSession.getMapper(AdminFaqMapper.class);
		faqMapper.modifyFaqPost(faqDTO);
	}

	//삭제하기 객체
	public int deleteFaqPost(int faqId) {
		System.out.println("[EventDAO] deleteFaqPost() 객체 삭제");
		
		AdminFaqMapper faqMapper = sqlSession.getMapper(AdminFaqMapper.class);
		return faqMapper.deleteFaqPost(faqId);
	}
	

	
	
	
	
}
