package com.javajo.sunshineRoad.model.dao.admin.board;

import com.javajo.sunshineRoad.mappers.admin.AdminNoticeMapper;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ANoticeImgDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ANoticeDAO {

	
	private final SqlSessionTemplate sqlSession;
	
	//전체조회	
	public List<ANoticeDTO> getAllNotice(int startPostNo, int endPostNo){
		System.out.println("[ANoticeDAO] getAllNotice()");
		
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		return noticeMapper.getAllNotice(startPostNo,endPostNo);
	}
	
	//상세조회
	public List<ANoticeDTO> detailNotice (int noticeId){
		System.out.println("[ANoticeDAO] detailNotice()");
		
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		return noticeMapper.detailNotice(noticeId);
	}
	//상세조회  이미지
	public List<ANoticeImgDTO> detailNoticeImg (int noticeId){
		System.out.println("[ANoticeDAO] detailNoticeImg()");
		
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		return noticeMapper.detailNoticeImg(noticeId);
	}
		
	
	//등록하기. 이미지는 따로 POST
	public void registrationNotice(ANoticeDTO noticeDTO) {
		System.out.println("[ANoticeDAO] registrationNotice()");
		
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		noticeMapper.registrationNotice(noticeDTO);
	}
	
	
	//등록하기 이미지
	public int PostMaxID() {
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		return noticeMapper.PostMaxID();
	}
	public int ImgMaxID() {
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		return noticeMapper.ImgMaxID();
	}
	public void noticeImgValues(ANoticeImgDTO noticeImg) {
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		noticeMapper.noticeImgValues(noticeImg);
	}
	public void updateImgID(ANoticeDTO noticeDTO) {
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		noticeMapper.updateImgID(noticeDTO);
	}

	
	
	//수정하기 객체
	public void modifyNoticePost(ANoticeDTO noticeDTO) {
		
		System.out.println("[ANoticeDAO] modifyNoticePost() 객체 수정");
		
		System.out.println(noticeDTO.getNoticeId());
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		noticeMapper.modifyNoticePost(noticeDTO);
		
		
	}
	
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteNoticeImg(int noticeId) {
		System.out.println("[ANoticeDAO] deleteNoticeImg() 이미지 삭제");
		
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		int noticeImgId = noticeMapper.selectImgId(noticeId);
		return noticeMapper.deleteNoticeImg(noticeImgId);
	}

	
	
	//삭제하기 객체
	public int deleteNoticePost(int noticeId) {
		System.out.println("[ANoticeDAO] deleteNoticePost() 객체 삭제");
		
		AdminNoticeMapper noticeMapper = sqlSession.getMapper(AdminNoticeMapper.class);
		return noticeMapper.deleteNoticePost(noticeId);
	}
	
}