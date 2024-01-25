package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageActivityInfoDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("MypageFavoriteDTO")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageFavoriteDTO {
	@JsonProperty
	private String fId;
	@JsonProperty
	private long uId;
	private int boardId;
	private int postTypeId;

	private int eventId;
	private String eventAddr;
	private String eventName;
	private String eventThumbnailImg;
	private String eventContent;

	@JsonProperty
	private int aId;
	@JsonProperty
	private int aPostId;
	@JsonProperty
	private String aName;
	@JsonProperty
	private String aOneLiner;
	@JsonProperty
	private String aThumbnailImg;

//	private MypageActivityInfoDTO activityInfo;
//	private MypageEventDTO mypageEvent;
}