package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Alias("MypageActivityCustomerDTO")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageActivityCustomerDTO {
	@JsonProperty
	private int aCustomerId;
	@JsonProperty
	private int aPostId;
	@JsonProperty
	private long uId;
}