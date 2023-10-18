package com.javajo.sunshineRoad.model.dto.customerCenter.notice;

import org.apache.ibatis.type.Alias;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Alias("NoticeImg")
@Getter
@Setter
@Builder

public class NoticeImgDTO {
	
	private String notice_img_id;
	private String notice_img_1;
	private String notice_img_2;
	private String notice_img_3;
	private String notice_img_4;
	private String notice_img_5;
}
