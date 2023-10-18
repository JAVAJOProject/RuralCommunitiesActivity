package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.AdminRecTownMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ARecTownDAO {

	
	private final SqlSessionTemplate sqlSession;
	

	//전체조회	
	public List<ARecTownDTO> getAllRecTown(int startPostNo, int endPostNo){
		System.out.println("[RecTownDAO] getAllRecTown()");
		
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		return recTownMapper.getAllRecTown(startPostNo,endPostNo);
	}
	


	//필터링 조회
	public List<ARecTownDTO> selectRecTown(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[RecTownDAO] selectRecTown()");

		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		return recTownMapper.selectRecTown(searchDTO,startPostNo,endPostNo);
	}
	
	

	//등록하기. 이미지는 따로 POST
	public void registrationRecTown(ARecTownDTO recTownDTO) {
		System.out.println("[RecTownDAO] registrationRecTown()");
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		recTownMapper.registrationRecTown(recTownDTO);
	}


	//등록하기 이미지
	public int PostMaxID() {
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		return recTownMapper.PostMaxID();
	}
	public int ImgMaxID() {
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		return recTownMapper.ImgMaxID();
	}
	public void recTownImgValues(ARecTownImgDTO recTownImg) {
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		recTownMapper.recTownImgValues(recTownImg);
	}
	public void updateImgID(ARecTownDTO recTownDTO) {
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		recTownMapper.updateImgID(recTownDTO);
	}

	
	//수정하기 객체
	public void modifyRecTownPost(ARecTownDTO recTownDTO) {
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		recTownMapper.modifyRecTownPost(recTownDTO);
	}

	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteRecTownImg(int recTId) {
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		System.out.println("[RecTownDAO] deleteRecTownImg() 이미지 삭제");
		int recTImgId = recTownMapper.selectImgId(recTId);
		System.out.println(recTImgId);
		return recTownMapper.deleteRecTownImg(recTImgId);
	}

	//삭제하기 객체
	public int deleteRecTownPost(int recTId) {
		System.out.println("[RecTownDAO] deleteRecTownPost() 객체 삭제");
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		return recTownMapper.deleteRecTownPost(recTId);
	}
	
	//상세조회
	public List<ARecTownDTO> detailRecTown (int recTId){
		System.out.println("[ActivityDAO] detailRecTown()");
		AdminRecTownMapper recTownMapper = sqlSession.getMapper(AdminRecTownMapper.class);
		return recTownMapper.detailRecTown(recTId);
	}

	
	
}
