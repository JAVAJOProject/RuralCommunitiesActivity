package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("RequestEventDTO")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageRequestEventDTO {
	private int eventId;
	@JsonProperty
	private String sId;//null 값떄문에
	private int postTypeId;
	private int eventImgId;
	private String sigunguId; //null 값떄문에
	private int eventRecruitTypeId;//null 값떄문에
	private int eventStatusId;
	private String eventName;
	private String eventContent;
	private String eventThumbnailImg;
	private String eventDateCreated;
	private String eventRecruitStartDate;
	private String eventRecruitEndDate;
	private String eventStartDate;
	private String eventEndDate;
	private String eventMaxPeople;
	private String eventAddr;
	private int eventFavoriteCnt;
	private int eventViewCnt;
	private String eventStatus;

	@JsonProperty
	private int aCustomerId;
	@JsonProperty
	private int aPostId;
	@JsonProperty
	private int uId;
}