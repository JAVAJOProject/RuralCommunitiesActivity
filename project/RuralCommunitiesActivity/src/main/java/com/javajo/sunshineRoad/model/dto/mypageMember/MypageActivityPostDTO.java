package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

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
	private int aPostId;
	private int aId;
	private int aImgId;
	private String aPostContent;
	private int aViewCnt;
	private int aFavoriteCnt;
	private String aPostDateCreated;
}
