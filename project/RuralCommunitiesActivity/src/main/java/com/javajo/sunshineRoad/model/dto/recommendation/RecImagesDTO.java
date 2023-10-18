package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("RecImages")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
//추천 체험 이미지
public class RecImagesDTO {
	private int recAImgId;	//이미지 코드
	private String recAImg1;
	private String recAImg2;
	private String recAImg3;
	private String recAImg4;
	private String recAImg5;
}
