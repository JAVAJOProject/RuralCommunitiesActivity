package com.javajo.sunshineRoad.model.dto.recommendation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

@Alias("RegionTownInfo")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//마을지역
public class RegionTownDTO {
	private int townId;
	private int sigunguId;
	private String townName;
}