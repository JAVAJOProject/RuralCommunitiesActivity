package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("AActivity")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AActivityDTO {

	@JsonProperty
	private int aId;//체험 서비스
	@JsonProperty
	private int sId;
	@JsonProperty
	private int sigunguId;//지역
	@JsonProperty
	private int aThemeId;//테마
	@JsonProperty
	private String aStartDate;
	@JsonProperty
	private String aEndDate;
	@JsonProperty
	private String aAddr;
	@JsonProperty
	private String aName;
	@JsonProperty
	private String aOneLiner;//한줄
	@JsonProperty
	private String aMinPeople;
	@JsonProperty
	private String aMaxPeople;
	@JsonProperty
	private String aCharge;
	@JsonProperty
	private String aThumbnailImg;//이미지 blob
	@JsonProperty
	private String sSite;
	@JsonProperty
	private String aReservationDeadline;//마감일
	@JsonProperty
	private int aImgId;
	
}
