package com.javajo.sunshineRoad.model.dto.recommendation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
