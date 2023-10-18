package com.javajo.sunshineRoad.model.dto.totalActivity;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Alias("TotalActivityImages")
@Getter
@Setter
@Builder
public class TotalActivityImagesDTO {
    private int aImgId;
	@JsonProperty
    private String aImg1;
	@JsonProperty
    private String aImg2;
	@JsonProperty
    private String aImg3;
	@JsonProperty
    private String aImg4;
	@JsonProperty
    private String aImg5;
}