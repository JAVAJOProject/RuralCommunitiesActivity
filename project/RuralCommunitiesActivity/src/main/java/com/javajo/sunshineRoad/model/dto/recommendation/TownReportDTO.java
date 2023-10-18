package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("TownReport")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//마을 제보하기
public class TownReportDTO {
	@JsonProperty
	private int tRId;//마을제보 코드
	@JsonProperty
	private int tRImgId;//마을 제보하기 이미지 코드
	private int memId;//이용자 코드
	private int townId;//마을지역 코드
	@JsonProperty
	private String tRTitle;//제목
	@JsonProperty
	private String tRContent;//내용
	@JsonProperty
	private String tRDateCreated;//작성일
}
