package com.javajo.sunshineRoad.mappers.admin;

import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminRecTownMapper {


	//전체 조회
	public List<ARecTownDTO> getAllRecTown(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//필터링 조회
	public List<ARecTownDTO> selectRecTown(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//등록하기. 이미지는 따로
	public void registrationRecTown(ARecTownDTO recTownDTO);

	//등록하기 이미지
	public int PostMaxID();
	public int ImgMaxID();
	public void recTownImgValues(ARecTownImgDTO recTownImg);
	public void updateImgID(ARecTownDTO recTownDTO);

	//수정하기 객체
	public void modifyRecTownPost(ARecTownDTO recTownDTO);

	//이미지 삭제전 해당 아이디 찾기
	public int selectImgId(int recTId);
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteRecTownImg(int recTImgId);

	//삭제하기 객체
	public int deleteRecTownPost(int recTId);

	//상세조회
	public List<ARecTownDTO> detailRecTown(int recTId);


}