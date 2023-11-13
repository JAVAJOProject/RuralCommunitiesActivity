package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("ActivityReviewDTO")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageActivityReviewDTO {
	private int revId;
	@JsonProperty
	private int uId;
	@JsonProperty
	private int aPostId;
	@JsonProperty
	private String rDateCreated; // timestamp인데 string으로 받음
	@JsonProperty
	private String rContent; // type 이 clob임.
	@JsonProperty
	private int rStarRating;
	@JsonProperty
	private String rTitle;


	private int reservationId;
}