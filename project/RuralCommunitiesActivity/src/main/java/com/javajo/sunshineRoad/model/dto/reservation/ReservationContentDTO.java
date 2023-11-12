package com.javajo.sunshineRoad.model.dto.reservation;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("ReservationContent")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationContentDTO {
	private int reservationId;
	@JsonProperty
	private int aId;
	@JsonProperty
	private int uId;
	private int reservationHeadcount;
	private int reviewStatus;
	private String reservationStatus;
	private String reservationDate;


	private int paymentId;
	private int paymentStatusId;
	private int paymentAmount;
	private String paymentDeadline;
}