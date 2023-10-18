package com.javajo.sunshineRoad.model.dto.reservation;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("ResSummaryList")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResSummaryListDTO {
	private int reservationId;
	private int aId; 
	private int uId;
	private String reservationStatus;
	private String reservationDate;
}
