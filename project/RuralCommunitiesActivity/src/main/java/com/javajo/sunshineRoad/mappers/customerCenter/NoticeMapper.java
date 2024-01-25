package com.javajo.sunshineRoad.mappers.customerCenter;

import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeImgDTO;
import com.javajo.sunshineRoad.model.dto.customerCenter.notice.NoticeListInfoDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface NoticeMapper {
	// noticeList에 관련된 함수 작성.
	public int getNoticeListCount(); //전체 카운트

	public int getNoticeListCountCount(int noticeTypeId);	// 카테고리별 세부 카운트
	

	// noticeDetail에 관련된 함수 작성.
	public NoticeListInfoDTO getNoticeDetail(int noticeId);

	// noticeDetail에 관련된 함수 작성.

		public NoticeImgDTO getNoticeImagesByImgId(int noticeImgId);


	//Oracle
	//@Param을 쓰는경우 xml파일에 select문 작성할때 parameterType 작성 하면안됨.
//	public List<NoticeListInfoDTO> getRequestPageNoticeList(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo);
//	public List<NoticeListInfoDTO> getRequestPageNoticeListList(@Param("startPostNo") int startPostNo, @Param("endPostNo") int endPostNo, @Param("noticeTypeId") int noticeTypeId);

//	MySQL
	public List<NoticeListInfoDTO> getRequestPageNoticeList(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo);
	public List<NoticeListInfoDTO> getRequestPageNoticeListList(@Param("startPostNo") int startPostNo, @Param("perPagePostNo") int perPagePostNo, @Param("noticeTypeId") int noticeTypeId);
}