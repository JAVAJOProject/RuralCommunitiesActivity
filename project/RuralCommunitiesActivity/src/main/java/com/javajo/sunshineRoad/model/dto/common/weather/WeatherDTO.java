package com.javajo.sunshineRoad.model.dto.common.weather;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class WeatherDTO {
	 	private double temperature;  // 온도 (예: 섭씨 또는 화씨)
	    private String weatherCondition;  // 날씨 상태 (예: 맑음, 흐림, 비, 눈, 등)
	    private int weatherConditionId;
	  
}
