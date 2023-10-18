package com.javajo.sunshineRoad.model.service.IService.mypageSeller;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerMeasurementDTO;

public interface MypageSellerMeasurementService {
	public List<MypageSellerMeasurementDTO> getMeasurementData();

	public List<MypageSellerMeasurementDTO> getReviewRatings();

	public List<MypageSellerMeasurementDTO> getGenderReservationData();

	public List<MypageSellerMeasurementDTO> getReviewRatio();

	public List<MypageSellerMeasurementDTO> getReservationsByAge();

}
