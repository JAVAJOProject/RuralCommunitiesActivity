package com.javajo.sunshineRoad.mappers.admin.board;

import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminActivityMapper {




	//이미지 조회
	public List<AActivityImgDTO> detailImgActivity(int aId);

	//등록하기. 이미지는 따로
	public void registrationActivity(AActivityDTO activityDTO);

	//등록하기 이미지
	public int PostMaxID();
	public int ImgMaxID();
	public void activityImgValues(AActivityImgDTO activityImg);
	public void updateImgID(AActivityDTO activityDTO);

	//수정하기 객체
	public void modifyActivityPost(AActivityDTO activityDTO);

	//이미지 삭제전 해당 아이디 찾기
	public int selectImgId(int aId);
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteActivityImg(int aImgId);

	//삭제하기 객체
	public int deleteActivityPost(int aId);


	//상세조회
	public List<AActivityDTO> detailActivity(int aId);

	// Oracle
//	//전체 조회
//	public List<AActivityDTO> getAllActivity(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//
//	//체험시작일조회
//	public List<AActivityDTO> selectDateActivityStart(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	//체험마감일조회
//	public List<AActivityDTO> selectDateActivityEND(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	//예약마감일조회
//	public List<AActivityDTO> selectDateReservation(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//
//	//필터링 조회
//	public List<AActivityDTO> selectActivity(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	// MySQL
	//전체 조회
	public List<AActivityDTO> getAllActivity(@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);

	//체험시작일조회
	public List<AActivityDTO> selectDateActivityStart(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int endPostCount);
	//체험마감일조회
	public List<AActivityDTO> selectDateActivityEND(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);
	//예약마감일조회
	public List<AActivityDTO> selectDateReservation(@Param("searchDTO")ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);

	//필터링 조회
	public List<AActivityDTO> selectActivity(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("perPagePostCount") int perPagePostCount);
}