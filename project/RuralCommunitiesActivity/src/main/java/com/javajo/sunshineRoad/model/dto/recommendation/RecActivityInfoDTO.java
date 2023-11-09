package com.javajo.sunshineRoad.model.dto.recommendation;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Alias("RecActivity")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//추천 체험 정보
public class RecActivityInfoDTO {
	private int recAPostId;	//게시글 코드
	private int sigunguId;	//시군구 코드
	private String recAId;	//서비스 코드
	private int recAImgId;	//이미지 코드
	private int postTypeId;	//게시글 타입 코드
	private int recAKeywordId;//키워드 코드
	private String recATitle;//제목
	private String recAContent;//내용
	private String recADateCreated;//작성일
	private int recAViewCnt;//좋아요 수
	private int recALikeCnt;//찜 갯수
	private String recAThumbnailImg;//대표이미지
}
