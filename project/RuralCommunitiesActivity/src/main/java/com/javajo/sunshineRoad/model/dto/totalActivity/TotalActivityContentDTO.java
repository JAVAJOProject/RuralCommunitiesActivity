package com.javajo.sunshineRoad.model.dto.totalActivity;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("TotalActivityContent")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TotalActivityContentDTO {
	@JsonProperty
	private int aId;
	@JsonProperty
	private int sId;
	private int sigunguId;
	@JsonProperty
	private int aThemeId;
	@JsonProperty
	private String aStartDate;
	@JsonProperty
	private String aEndDate;
	@JsonProperty
	private String aAddr;
	@JsonProperty
	private String aName;
	@JsonProperty
	private String aOneLiner;
	@JsonProperty
	private int aMinPeople;
	@JsonProperty
	private int aMaxPeople;
	@JsonProperty
	private int aCharge;
	@JsonProperty
	private String aThumbnailImg;
	@JsonProperty
	private String sSite;
	@JsonProperty
	private String aReservationDeadline;
	@JsonProperty
	private int aPostId;
	private int postTypeId;
	@JsonProperty
	private int aImgId;
	@JsonProperty
	private String aPostContent;
	@JsonProperty
	private int aViewCnt;
	@JsonProperty
	private int aFavoriteCnt;
	@JsonProperty
	private String aPostDateCreated;
	@JsonProperty
	private String aImg1;
	@JsonProperty
	private String aImg2;
	@JsonProperty
	private String aImg3;
	@JsonProperty
	private String aImg4;
	@JsonProperty
	private String aImg5;
}