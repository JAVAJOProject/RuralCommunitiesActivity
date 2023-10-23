package com.javajo.sunshineRoad.model.dao.admin.board;

import com.javajo.sunshineRoad.mappers.admin.AdminActivityMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

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
	
	//시도 조회
	public List<AActivityDTO> selectSIDO(int sido){
		
		System.out.println("[ActivityDAO] selectSIDO()");				
		
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectSIDO(sido);
	}	
	
	//지역 조회
	public List<AActivityDTO> selectRegion(int sigungu){
		
		System.out.println("[ActivityDAO] selectRegion()");
		
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectRegion(sigungu);
	}


	//체험명조회
	public List<AActivityDTO> selectName(String keyword){
		
		System.out.println("[ActivityDAO] selectName()");
		
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectName(keyword);
	}


	//예약금액 조회
	public List<AActivityDTO> selectCharge(int charge){
		
		System.out.println("[ActivityDAO] selectCharge()");
		
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectCharge(charge);
	}


	//테마별 조회
	public List<AActivityDTO> selectTheme(int theme){
		
		System.out.println("[ActivityDAO] selectTheme()");
		
		theme += 10;//db수정되면 이코드는 지워도됨
		AdminActivityMapper activityMapper = sqlSession.getMapper(AdminActivityMapper.class);
		return activityMapper.selectTheme(theme);
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