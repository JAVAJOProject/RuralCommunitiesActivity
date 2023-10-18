package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("MypageSellerImgDTO")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MypageSellerImgDTO {
	private int eventId;
	private String eventThumbnailImg;
}
