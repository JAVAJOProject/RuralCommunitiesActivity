package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

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
	private int uId;
	private int aPostId;
	private String rDateCreated; // timestamp인데 string으로 받음
	private String rContent; // type 이 clob임.
	private int rStarRating;
	private String rTitle;
}