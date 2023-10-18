package com.javajo.sunshineRoad.model.dto.totalActivity;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Alias("ActSummaryList")
@Builder
@Getter
@Setter
public class ActSummaryListDTO {
	@JsonProperty
	private int aId;
	@JsonProperty
	private int aImgId;
	@JsonProperty
	private String aThemeId;
	private String sigunguId;
	@JsonProperty
	private String aName;
	@JsonProperty
	private String aOneLiner;
	@JsonProperty
	private String aThumbnailImg;
	@JsonProperty
	private int aFavoriteCnt;
}
