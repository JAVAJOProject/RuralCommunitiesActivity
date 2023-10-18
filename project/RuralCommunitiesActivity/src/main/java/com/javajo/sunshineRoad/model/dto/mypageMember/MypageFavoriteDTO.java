package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageActivityInfoDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("MypageFavoriteDTO")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageFavoriteDTO {

	private String fId;
	private int uId;
	private int boardId;
	private int postTypeId;
	
	private MypageActivityInfoDTO activityInfo;
	private MypageEventDTO mypageEvent;
}
