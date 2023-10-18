package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("RecTownImages")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//추천 마을 이미지
public class RecTownImagesDTO {
	private int recTownImgId;
	private String recTownImg1;
	private String recTownImg2;
	private String recTownImg3;
	private String recTownImg4;
	private String recTownImg5;
}
