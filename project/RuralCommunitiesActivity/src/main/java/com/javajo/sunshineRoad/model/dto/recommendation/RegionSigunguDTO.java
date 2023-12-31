package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("Sigungu")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//시군구
public class RegionSigunguDTO {
	private int sigunguId;
	private int sidoId;
	private String sigunguName;
}
