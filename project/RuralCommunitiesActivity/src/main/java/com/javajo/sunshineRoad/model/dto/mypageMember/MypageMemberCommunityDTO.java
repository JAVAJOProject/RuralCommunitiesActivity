package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("MypageMemberCommunityDTO")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageMemberCommunityDTO {
	@JsonProperty
	private int uCommunityPostId;
	@JsonProperty
	private long uId;
	private int postTypeId;
	private int communityImgId;
	@JsonProperty
	private String uCommunityContent; //clob
	@JsonProperty
	private String uCommunityDateCreated;
	private int communityLikeCnt;
	private int communityViewCnt;
	private int communityCumCnt;

}