package com.javajo.sunshineRoad.model.dto.common.weather;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApiDataDTO {
	private String baseDate;  // 데이터의 기준 날짜
    private String baseTime;  // 데이터의 기준 시간
    private String category;  // 데이터의 카테고리 (온도, 강수량, 바람 정보 등)
    private String fcstDate;  // 예보 날짜
    private String fcstTime;  // 예보 시간
    private String fcstValue; // 예보된 값
    private int nx;          // 예보 지점 X 좌표 값
    private int ny;          // 예보 지점 Y 좌표 값

    @JsonProperty
    private double t1h;     // 기온
    private double rn1;     // 1시간 강수량
    private String sky;     // 하늘 상태
    private double uuu;     // 동서바람 성분
    private double vvv;     // 남북바람 성분
    private int reh;        // 습도
    private String pty;     // 강수 형태
    private int lgt;        // 낙뢰
    private double vec;     // 풍향
    private double wsd;     // 풍속
}
