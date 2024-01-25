package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

public interface IAdminRecTownService {


	//전체조회
	public List<ARecTownDTO> getAllRecTown(int requestPageNo,int perPagePostCount);
	
	public List<ARecTownDTO> selectRecTown(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount);
	public List<ARecTownDTO> detailRecTown(int recTId);
	
	
	//등록하기
	public void registrationRecTown(ARecTownDTO recTownDTO);
	
	//수정하기 객체
	public void modifyRecTownPost(ARecTownDTO recTownDTO);
	
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteRecTownImg(int recTId);
	
	//삭제하기 객체
	public int deleteRecTownPost(int recTId);

}
