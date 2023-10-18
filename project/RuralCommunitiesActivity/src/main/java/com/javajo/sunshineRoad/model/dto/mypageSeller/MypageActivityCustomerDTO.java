package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

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
	private int aCustomerId;
	private int aPostId;
	private int uId;
}