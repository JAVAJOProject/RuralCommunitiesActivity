package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Alias("ASearch")
@Data
public class ASearchDTO {

	private int id;
	private int memTypeId = 0;
	private String startDate = "1900-01-01";
	private String endDate = "9999-01-01";
	private int dateType = 0;//체험 서비스 1시작 2종료 3예약일? , 이벤트 1응모일 2시작일 3작성일
	private int sido = 0;
	private int sigungu = 0;
	private String keyword = "ㅇㄹ어이ㅏㅇ닌";
	private int charge = 0;
	private int theme = 0;//체험 서비스 테마 ,  이벤트 모집방식
	private int status = 0;//이벤트 상태
//	private int startPostNo;
//	private int endPostNo;
	
	
}
//1	체험서비스 Activity
//2	추천체험 RecActivity
//3	추천마을 RecTown
//4	이벤트 Event
//5	소통공간  MCommunity
//6	마을소식  SCommunity
//{
//    "postType" : 3,
//    "startDate" : "",
//    "endDate" : "",
//    "dateType" : 0,
//    "sido" : 0,
//    "sigungu" : 0,
//    "keyword" : "",
//    "charge" : 0,
//    "theme" : 0
//}