package com.javajo.sunshineRoad.model.dto.mypageMember;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("PaymentInfo")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypagePaymentInfoDTO {
	private int paymentId;
	private int paymentStatusId; // 1: 결제완료, 2: 결제대기, 3: 결제취소
	private int paymentAmount;
	private String paymentDeadline;
}
