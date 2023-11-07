package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("ActivityPost")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageActivityPostDTO {
	@JsonProperty
	private int aPostId;
	@JsonProperty
	private int aId;
	@JsonProperty
	private int aImgId;
	@JsonProperty
	private String aPostContent;
	@JsonProperty
	private int aViewCnt;
	@JsonProperty
	private int aFavoriteCnt;
	@JsonProperty
	private String aPostDateCreated;
}
