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
@Alias("AMCommunity")
public class AMCommunityDTO {

	private int communityPostId;
	@JsonProperty("u_id")
	private int uId;
	private int postTypeId;
	private int communityImgId;
	private String communityContent;
	private String communityDateCreated;
	private int communityLikeCnt;
	private int communityCumCnt;
//	private APostTypeDTO postTypeDTO;
	
}
