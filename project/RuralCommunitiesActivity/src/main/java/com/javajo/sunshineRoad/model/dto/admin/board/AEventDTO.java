package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

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
@Alias("AEvent")
public class AEventDTO {

	
	private int eventId;
	@JsonProperty
	private int sId;
	private int postTypeId;
	private int eventImgId;
	private int sigunguId;
	private int eventRecruitTypeId;
	private int eventStatusId;
	private String eventName;
	private String eventContent;
	private String eventThumbnailImg;
	private String eventDateCreated;
	private String eventRecruitStartDate;
	private String eventRecruitEndDate;
	private String eventStartDate;
	private String eventEndDate;
	private int eventMaxPeople;
	private String eventAddr;
	private int eventFavoriteCnt;
	private int eventViewCnt;
}
