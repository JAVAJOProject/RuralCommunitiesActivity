package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("TownReportImages")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//마을 제보하기 이미지
public class TownReportImagesDTO {
	@JsonProperty
	private int tRImgId; //이미지 코드
	@JsonProperty
	private String tRImg1;
	@JsonProperty
	private String tRImg2;
	@JsonProperty
	private String tRImg3;
	@JsonProperty
	private String tRImg4;
	@JsonProperty
	private String tRImg5;
}
