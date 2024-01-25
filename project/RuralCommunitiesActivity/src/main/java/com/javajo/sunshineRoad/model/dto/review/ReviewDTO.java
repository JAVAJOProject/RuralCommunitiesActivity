package com.javajo.sunshineRoad.model.dto.review;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("ReviewList")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO {
	private int revId;
	@JsonProperty
	private long uId;
	@JsonProperty
	private int aPostId;
	@JsonProperty
	private String rDateCreated;
	@JsonProperty
	private String rContent;
	@JsonProperty
	private int rStarRating;
	@JsonProperty
	private String rTitle;
	@JsonProperty
	private String uNick;
}