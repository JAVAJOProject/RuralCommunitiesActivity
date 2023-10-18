package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Alias("RecKeyword")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//추천 체험 키워드
public class RecActivityKeywordDTO {
	private int recAKeywordId;	//키워드 코드
	private String recAKeywordName;//키워드 명
}
