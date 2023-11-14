package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Alias("RecTown")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//추천 마을
public class RecTownInfoDTO {
	private int recTId;		//게시글 코드
	private int recTImgId;	//추천 마을 이미지 코드
	private int townId;		//마을지역 코드
	private int sigunguId; //시군구 코드
	private int sidoId; //시도 코드
	private String townName; //마일지역명
	private String sigunguName; //시군구명
	private String sidoName; //시도명
	private int postTypeId;	//게시글 타입 코드
	private String recTTitle;//제목
	private String recTContent;//내용
	private String recTDateCreated;//작성일
	private int recTViewCnt;//좋아요 수
	private int recTLikeCnt;//찜 개수
	private String recTSite;	// 사이트
	private String recTThumbnailImg;//대표 이미지
}