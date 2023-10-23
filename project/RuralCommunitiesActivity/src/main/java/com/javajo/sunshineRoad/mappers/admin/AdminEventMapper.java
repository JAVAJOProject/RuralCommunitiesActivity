package com.javajo.sunshineRoad.mappers.admin;


import com.javajo.sunshineRoad.model.dto.admin.board.AEventDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventImgDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;


@Mapper
public interface AdminEventMapper {


	//전체 조회
	public List<AEventDTO> getAllEvent(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//상세조회
	public List<AEventDTO> detailEvent(int eventId);

	//이벤트 응모 시작
	public List<AEventDTO> selectEventRecruitDate(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	//이벤트 진행 시작
	public List<AEventDTO> selectEventStartDate(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
	//작성일
	public List<AEventDTO> selectEventCreatedDate(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//필터링 조회
	public List<AEventDTO> selectEvent(@Param("searchDTO") ASearchDTO searchDTO,@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);

	//등록하기. 이미지는 따로
	public void registrationEvent(AEventDTO AEventDTO);

	//등록하기 이미지
	public int PostMaxID();
	public int ImgMaxID();
	public void eventImgValues(AEventImgDTO eventImg);
	public void updateImgID(AEventDTO AEventDTO);

	//수정하기 객체
	public void modifyEventPost(AEventDTO AEventDTO);

	//이미지 삭제전 해당 아이디 찾기
	public int selectImgId(int eventId);

	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteEventImg(int eImgId);



	//삭제하기 객체
	public int deleteEventPost(int eventId);







}