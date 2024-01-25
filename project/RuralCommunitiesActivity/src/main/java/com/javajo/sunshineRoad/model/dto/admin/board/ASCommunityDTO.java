package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Alias("ASCommunity")
public class ASCommunityDTO {
	private int sellerCommunityPostId;
	@JsonProperty("s_id")
	private long sId;
	private int postTypeId;
	private String sellerCommunityContent;

	private String sellerCommunityDateCreated;
	private int sellerCommunityLikeCnt;
	private int sellerCommunityCumCnt;
//	private APostTypeDTO postTypeDTO;
}