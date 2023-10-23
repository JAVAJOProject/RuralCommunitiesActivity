package com.javajo.sunshineRoad.mappers;

import com.javajo.sunshineRoad.model.dto.admin.board.AActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AActivityImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminActivityMapper {




	//전체 조회
	public List<AActivityDTO> getAllActivity(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//상세조회
	public List<AActivityDTO> detailActivity(int aId);

	//체험시작일조회
	public List<AActivityDTO> selectDateActivityStart(ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	//체험마감일조회
	public List<AActivityDTO> selectDateActivityEND(ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	//예약마감일조회
	public List<AActivityDTO> selectDateReservation(ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//시도조회
	public List<AActivityDTO> selectSIDO(int sido);

	//지역조회
	public List<AActivityDTO> selectRegion(int sigungu);

	//체험명 조회
	public List<AActivityDTO> selectName(String keyword);

	//예약금액 조회
	public List<AActivityDTO> selectCharge(int charge);

	//테마별 조회
	public List<AActivityDTO> selectTheme(int theme);

	//필터링 조회
	public List<AActivityDTO> selectActivity(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

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
	public int selectImgId(int a_id);
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteActivityImg(int aImgId);

	//삭제하기 객체
	public int deleteActivityPost(int aId);

}