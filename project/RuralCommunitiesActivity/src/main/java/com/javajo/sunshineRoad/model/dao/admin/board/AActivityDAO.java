package com.javajo.sunshineRoad.model.dao.admin.board;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityCntMapper;
import com.javajo.sunshineRoad.mappers.admin.board.AdminActivityMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AActivityDAO {

	
	private final SqlSessionTemplate sqlSession;
	

	
	//전체조회
	public List<AActivityDTO> getAllActivity(int startPostNo, int endPostNo){
		System.out.println("[ActivityDAO] getAll()");
		
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.getAllActivity(startPostNo,endPostNo);
		
	}
	
	//체험 시작일조회
	public List<AActivityDTO> selectStartDateActivity(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[ActivityDAO] selectDateActivityStart()");
		
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectDateActivityStart(searchDTO,startPostNo,endPostNo);
		
	}
	//체험 마감일조회
	public List<AActivityDTO> selectEndDateActivity(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		
		System.out.println("[ActivityDAO] selectDateActivityEND()");
		
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectDateActivityEND(searchDTO,startPostNo,endPostNo);
	}
	
	//예약마감일조회
	public List<AActivityDTO> selectDateReservation(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		
		System.out.println("[ActivityDAO] selectDateReservation()");
		
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectDateReservation(searchDTO,startPostNo,endPostNo);
	}



	//필터링 조회
	public List<AActivityDTO> selectActivity(ASearchDTO searchDTO,int startPostNo, int endPostNo){
		System.out.println("[ActivityDAO] selectTotal()");

		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectActivity(searchDTO,startPostNo,endPostNo);
	}
	
	

	//등록하기. 이미지는 따로 POST
	public void registrationActivity(AActivityDTO activityDTO) {
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		System.out.println("[ActivityDAO] registrationActivity()");
		activityMapper.registrationActivity(activityDTO);
	}


	//등록하기 이미지
	public int PostMaxID() {
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.PostMaxID();
	}
	public int ImgMaxID() {
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.ImgMaxID();
	}
	public void activityImgValues(AActivityImgDTO activityImg) {
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		activityMapper.activityImgValues(activityImg);
	}
	public void updateImgID(AActivityDTO activityDTO) {
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		activityMapper.updateImgID(activityDTO);
	}

	
	//수정하기 객체
	public void modifyActivityPost(AActivityDTO activityDTO) {
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		activityMapper.modifyActivityPost(activityDTO);
	}

	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteActivityImg(int aId) {
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		System.out.println("[ActivityDAO] deleteActivityImg() 이미지 삭제");
		int aImgId = activityMapper.selectImgId(aId);
		return activityMapper.deleteActivityImg(aImgId);
	}

	//삭제하기 객체
	public int deleteActivityPost(int aId) {
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		System.out.println("[ActivityDAO] deleteActivityPost() 객체 삭제");
		return activityMapper.deleteActivityPost(aId);
	}
	
	//상세조회
	public List<AActivityDTO> detailActivity (int aId){
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		System.out.println("[ActivityDAO] detailActivity()");
		return activityMapper.detailActivity(aId);
	}
	
	
}
