package com.javajo.sunshineRoad.mappers.admin.board;

import com.javajo.sunshineRoad.model.dto.admin.board.ARActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminRActivityMapper {


	//등록하기 객체
	public void registrationRecActivity(ARecActivityDTO recActivityDTO);
	//삭제하기 객체
	public int deleteRecActivityPost(int recAPostId);
	//이미지 삭제
	public int deleteRecActivityImg(int aImgId);
	//이미지 삭제시 아이디 조회해서
	public int selectImgId(int recAPostId);

	//수정하기 객체
	public void modifyRecActivityPost(@Param("aRActivity")ARecActivityDTO aRActivity);



	//등록하기 이미지
	public int PostMaxID();
	public int ImgMaxID();
	public void recActivityImgValues(ARActivityImgDTO recActivityImg);
	public void updateImgID(ARecActivityDTO aRecActivityDTO);


	//상세조회
	public List<ARecActivityDTO> detailRecActivity(int recAPostId);


	// Oracle
//	//전체 조회
//	public List<ARecActivityDTO> getAllRecActivity(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//
//	//작성일 조회
//	public List<ARecActivityDTO> selectDateRecActivity(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo")int startPostNo,@Param("endPostNo")int endPostNo);
//
//	//필터링 조회 시군구 키워드
//	public List<ARecActivityDTO> selectRecActivity (@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo")int startPostNo, @Param("endPostNo")int endPostNo);

	// MySQL
	//전체 조회
	public List<ARecActivityDTO> getAllRecActivity(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);

	//작성일 조회
	public List<ARecActivityDTO> selectDateRecActivity(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo")int startPostNo,@Param("perPagePostCount") int perPagePostCount);

	//필터링 조회 시군구 키워드
	public List<ARecActivityDTO> selectRecActivity (@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo")int startPostNo, @Param("perPagePostCount") int perPagePostCount);

}