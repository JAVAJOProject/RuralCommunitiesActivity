package com.javajo.sunshineRoad.model.dto.rating;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingDTO {
	private long 선정연도;
    private String 시도;
    private String 마을이름;
    private String 시군구;
    private char 으뜸촌;
    private int 체험;
    private int 음식;
    private int 숙박;
    private int totalCount;
}