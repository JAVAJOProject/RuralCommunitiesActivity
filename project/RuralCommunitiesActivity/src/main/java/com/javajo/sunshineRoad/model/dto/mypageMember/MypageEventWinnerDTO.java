package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("EventWinner")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageEventWinnerDTO {
	private int eventReportId;
	@JsonProperty
	private int uId;
	private int eventId;
	private int eventProgressStatusId;
	private String eventStory;
	
	private String eventProgressStatus;
	private MypageEventDTO mypageEvent;
	
}