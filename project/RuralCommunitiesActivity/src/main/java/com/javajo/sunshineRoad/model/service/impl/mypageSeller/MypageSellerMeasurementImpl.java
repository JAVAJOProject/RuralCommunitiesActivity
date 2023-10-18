package com.javajo.sunshineRoad.model.service.impl.mypageSeller;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageSeller.MypageSellerMeasurementDAO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerMeasurementDTO;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageSellerMeasurementService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageSellerMeasurementImpl implements MypageSellerMeasurementService {

	private final MypageSellerMeasurementDAO mypageSellerMeasurementDAO;

	@Override
	public List<MypageSellerMeasurementDTO> getMeasurementData() {
		return mypageSellerMeasurementDAO.getMeasurementData();
	}

	@Override
	public List<MypageSellerMeasurementDTO> getReviewRatings() {
		return mypageSellerMeasurementDAO.getReviewRatings();

	}

	@Override
	public List<MypageSellerMeasurementDTO> getGenderReservationData() {
		return mypageSellerMeasurementDAO.getGenderReservationData();

	}

	@Override
	public List<MypageSellerMeasurementDTO> getReviewRatio() {
		return mypageSellerMeasurementDAO.getReviewRatio();

	}

	@Override
	public List<MypageSellerMeasurementDTO> getReservationsByAge() {
		return mypageSellerMeasurementDAO.getReservationsByAge();

	}
}
