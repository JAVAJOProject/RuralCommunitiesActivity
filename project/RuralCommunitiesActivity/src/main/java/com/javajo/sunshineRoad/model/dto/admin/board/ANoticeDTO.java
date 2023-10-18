package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Alias("ANotice")
public class ANoticeDTO {

	private int noticeId;
	private int noticeImgId;
	private int noticeTypeId;
	private String noticeTitle;
	private String noticeContent;
	private String noticeDateCreated;

}
