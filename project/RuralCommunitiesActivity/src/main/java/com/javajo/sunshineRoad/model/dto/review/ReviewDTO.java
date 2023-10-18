package com.javajo.sunshineRoad.model.dto.review;

import org.apache.ibatis.type.Alias;

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
	private int uId;
	private int aPostId;
	private String rDateCreated;
	private String rContent;
	private int rStarRating;
	private String rTitle;
	
}
