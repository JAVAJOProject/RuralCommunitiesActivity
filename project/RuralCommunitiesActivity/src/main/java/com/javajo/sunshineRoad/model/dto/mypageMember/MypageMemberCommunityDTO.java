package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

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

	private int uCommunity;
	private int uId;
	private int postTypeId;
	private int communityImgId;
	private String uCommunityContent; //clob
	private String uCommunityDateCreated;
	private String uCommunityLikeCnt;
	private String uCommunityCumCnt;

}
