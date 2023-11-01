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

	@JsonProperty("a_id")
	private int aId;//체험 서비스
	@JsonProperty("s_id")
	private int sId;
	private int sigunguId;//지역
	@JsonProperty("a_theme_id")
	private int aThemeId;//테마
	@JsonProperty("a_start_date")
	private String aStartDate;
	@JsonProperty("a_end_date")
	private String aEndDate;
	@JsonProperty("a_addr")
	private String aAddr;
	@JsonProperty("a_name")
	private String aName;
	@JsonProperty("a_one_liner")
	private String aOneLiner;//한줄
	@JsonProperty("a_min_people")
	private String aMinPeople;
	@JsonProperty("a_max_people")
	private String aMaxPeople;
	@JsonProperty("a_charge")
	private String aCharge;
	@JsonProperty("a_thumbnail_img")
	private String aThumbnailImg;//이미지 blob
	@JsonProperty("a_site")
	private String sSite;
	@JsonProperty("a_reservation_deadline")
	private String aReservationDeadline;//마감일
	@JsonProperty("a_img_id")
	private int aImgId;
	
}
