package com.javajo.sunshineRoad.model.dto.mypageSeller;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypagePaymentInfoDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageReservationDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("MypageSellerMeasurementDTO")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageSellerMeasurementDTO {

	private int reservationCount; // 예약자수
	private int paymentCount; // 결제자 수

//	private int reservationDate;
//	private int totalCount;
//	private int canceledCount;

	private String month; // 달마다 예약자 수 뽑는거
	private int totalReservations;
	private int canceledReservations;

	private String gender; // 성별
	private int totalMembers;

	private int rating; // 별점
	private long count; // 해당 별점을 받은 리뷰 수
	private int reviewWrittenCount;
	private int totalVisitorsCount;
	private double reviewRatio;

	private String ageRange; // 나이대
	@JsonProperty
	private int uBirth; // member의 birth 의 생년월일
	private int memberCount; // 나이 대의 예약수

	private MypageReservationDTO mypageReservationDTO;
	private MypagePaymentInfoDTO mypagePaymentInfoDTO;
	private MypageMemberDTO mypageMemberDTO;

	public double calculateReservationPaymentRatio() {
		// 0으로 나누지 않도록 분모값 체크
		if (reservationCount == 0) {
			return 0.0;
		}
		return (double) paymentCount / reservationCount;
	}

}
