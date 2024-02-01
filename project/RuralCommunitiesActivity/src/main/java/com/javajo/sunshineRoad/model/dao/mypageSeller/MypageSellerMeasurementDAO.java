package com.javajo.sunshineRoad.model.dao.mypageSeller;

import com.javajo.sunshineRoad.mappers.mypageSeller.MypageSellerMeasurementMapper;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerMeasurementDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MypageSellerMeasurementDAO {
	private final SqlSessionTemplate sqlSession; // MyBatis의 SqlSession을 주입 받습니다.

	// 월별 예약자수 대비 취소자수
	public List<MypageSellerMeasurementDTO> getMeasurementData() {
		System.out.println("test");
		MypageSellerMeasurementMapper mypageSellerMeasurementMapper = sqlSession
				.getMapper(MypageSellerMeasurementMapper.class);
		return mypageSellerMeasurementMapper.getMeasurementData();
	}

	// 별점개수 별 리뷰
	public List<MypageSellerMeasurementDTO> getReviewRatings() {
		System.out.println("teststart");
		MypageSellerMeasurementMapper mypageSellerMeasurementMapper = sqlSession
				.getMapper(MypageSellerMeasurementMapper.class);
		return mypageSellerMeasurementMapper.getReviewRatings();
	}

	// 성별 예약 개수
	public List<MypageSellerMeasurementDTO> getGenderReservationData() {
		System.out.println("testgender");
		MypageSellerMeasurementMapper mypageSellerMeasurementMapper = sqlSession
				.getMapper(MypageSellerMeasurementMapper.class);
		return mypageSellerMeasurementMapper.getGenderReservationData();

	}

	// 과거의 시간이면서 예약완료 인 사람
	public List<MypageSellerMeasurementDTO> getReviewRatio() {
		System.out.println("testtime");
		MypageSellerMeasurementMapper mypageSellerMeasurementMapper = sqlSession
				.getMapper(MypageSellerMeasurementMapper.class);
		return mypageSellerMeasurementMapper.getReviewRatio();

	}

	// 나이대별 통계
	public List<MypageSellerMeasurementDTO> getReservationsByAge() {
		System.out.println("testage");
		MypageSellerMeasurementMapper mypageSellerMeasurementMapper = sqlSession
				.getMapper(MypageSellerMeasurementMapper.class);
		return mypageSellerMeasurementMapper.getReservationsByAge();
	}

}