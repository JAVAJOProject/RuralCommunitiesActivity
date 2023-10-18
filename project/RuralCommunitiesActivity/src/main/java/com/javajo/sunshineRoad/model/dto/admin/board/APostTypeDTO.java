package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;
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
@Alias("APostType")
public class APostTypeDTO {

	private int postTypeId;
	private String postTypeName;

}

//1	체험서비스 Activity
//2	추천체험 RecActivity
//3	추천마을 RecTown
//4	이벤트 Event
//5	소통공간  MCommunity
//6	마을소식  SCommunity