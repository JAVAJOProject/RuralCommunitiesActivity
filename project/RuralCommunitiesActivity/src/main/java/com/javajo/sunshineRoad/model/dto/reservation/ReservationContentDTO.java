package com.javajo.sunshineRoad.model.dto.reservation;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("ReservationContent")
@Getter
@Setter
@Builder
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


	@JsonProperty
	private int aPostId;
	private int paymentId;
	private int paymentStatusId;
	private int paymentAmount;
	private String paymentDeadline;
}