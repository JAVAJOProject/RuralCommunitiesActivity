package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("AStatistics")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AStatisticsDTO {

	private String type;
	private int count;

	
}
