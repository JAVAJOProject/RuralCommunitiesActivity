package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("Reservation")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageReservationDTO {
	private int reservationId;
	private int paymentId;
	@JsonProperty
	private int aId;
	@JsonProperty
	private long uId;
	@JsonProperty
	private String aName;
	private int reservationHeadCount;
	private int reviewStatus;
	private String reservationStatus;
	private String reservationDate;

	private String paymentStatusId; // 결제 상태
	private MypagePaymentInfoDTO paymentInfo; // 결제정보
	private MypageActivityInfoDTO activityInfo; // 예약한 체험 게시글 객체
	
	private PageInfo pageInfo; // 페이징 정보
}