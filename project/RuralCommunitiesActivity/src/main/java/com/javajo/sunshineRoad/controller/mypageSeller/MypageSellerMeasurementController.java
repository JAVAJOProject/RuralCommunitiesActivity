package com.javajo.sunshineRoad.controller.mypageSeller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerMeasurementDTO;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageSellerMeasurementService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage/seller")
@RequiredArgsConstructor
public class MypageSellerMeasurementController {
	private final MypageSellerMeasurementService mypageSellerMeasurementService;

	// 월별 예약자수 대비 취소자수
	@GetMapping("/measurement/monthlyreservations")
	public List<MypageSellerMeasurementDTO> getMeasurementData() {
		List<MypageSellerMeasurementDTO> measurementData = mypageSellerMeasurementService.getMeasurementData();
		return measurementData;
	}

	// 별점개수 별 리뷰
	@GetMapping("/measurement/reviewRatings")
	public List<MypageSellerMeasurementDTO> getReviewRatings() {
		List<MypageSellerMeasurementDTO> starratingData = mypageSellerMeasurementService.getReviewRatings();
		return starratingData;
	}

	// 성별 예약 개수
	@GetMapping("/measurement/gendercount")
	public List<MypageSellerMeasurementDTO> getGenderReservationData() {
		List<MypageSellerMeasurementDTO> genderReservationData = mypageSellerMeasurementService
				.getGenderReservationData();
		return genderReservationData;
	}

	// 과거의 시간이면서 예약완료 인 사람
	@GetMapping("/measurement/ratiocount")
	public List<MypageSellerMeasurementDTO> getReviewRatio() {
		List<MypageSellerMeasurementDTO> reviewRatio = mypageSellerMeasurementService.getReviewRatio();
		return reviewRatio;
	}

	// 나이대별 통계
	@GetMapping("/measurement/age")
	public List<MypageSellerMeasurementDTO> getReservationsByAge() {
		List<MypageSellerMeasurementDTO> ageRatio = mypageSellerMeasurementService.getReservationsByAge();
		return ageRatio;
	}
}
