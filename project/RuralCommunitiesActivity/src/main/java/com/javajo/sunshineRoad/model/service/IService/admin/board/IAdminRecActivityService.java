package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

public interface IAdminRecActivityService {


		//전체조회
		public List<ARecActivityDTO> getAllRecActivity(int requestPageNo,int perPagePostCount);
		public List<ARecActivityDTO> selectDateRecActivity(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount);
		public List<ARecActivityDTO> selectRecActivity(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount);
		public List<ARecActivityDTO> detailRecActivity(int recAPostId);
		
		
		//등록하기
		public void registrationRecActivity(ARecActivityDTO aRecActivityDTO);
		
		//수정하기 객체
		public void modifyRecActivityPost(ARecActivityDTO aRecActivityDTO);
		
		//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
		public int deleteRecActivityImg(int recAPostId);
		
		//삭제하기 객체
		public int deleteRecActivityPost(int recAPostId);
		
		
}
