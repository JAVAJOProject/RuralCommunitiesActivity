package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("MypageActivityInfoDTO")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageActivityInfoDTO {
	@JsonProperty
	private int aId;
	@JsonProperty
	private long sId;
	private int sigunguId;
	@JsonProperty
	private int aThemeId;
	@JsonProperty
	private int aImgId;
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
}