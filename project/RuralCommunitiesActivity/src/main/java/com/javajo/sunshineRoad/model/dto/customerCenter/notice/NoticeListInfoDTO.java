package com.javajo.sunshineRoad.model.dto.customerCenter.notice;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

@Alias("NoticeListInfo")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NoticeListInfoDTO {

	private int noticeId;  //공지사항 테이블
	private int noticeImgId;  //공지사항 테이블
	private int noticeTypeId;   //공지사항 테이블
	private String noticeTypeName;
	private String noticeTitle;   //공지사항 테이블
	private String noticeContent;  //공지사항 테이블
	private String noticeDateCreated;//공지사항 테이블
	private String noticeImg1;
	private String noticeImg2;
	private String noticeImg3;
	private String noticeImg4;
	private String noticeImg5;
	
	
}