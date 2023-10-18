package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Alias("Sido")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//시도
public class RegionSidoDTO {
	private int sidoId;
	private String sidoName;
}