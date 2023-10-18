package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Alias("ANoticeImg")
@Getter
@Setter
@Builder
public class ANoticeImgDTO {

	
	private int noticeImgId;
	private String noticeImg1;
	private String noticeImg2;
	private String noticeImg3;
	private String noticeImg4;
	private String noticeImg5;
}
