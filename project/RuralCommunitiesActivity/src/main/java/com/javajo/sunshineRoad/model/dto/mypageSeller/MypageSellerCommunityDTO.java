package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("MypageSellerCommunityDTO")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageSellerCommunityDTO {

	private int sellerCommunityPostId;
	@JsonProperty
	private long sId;
	private int postTypeId;
	private String sellerCommunityContent; //clob 
	private String sellerCommunityDateCreated;
	private int communityLikeCnt;
	private int communityViewCnt;
	private int communityCumCnt;

}