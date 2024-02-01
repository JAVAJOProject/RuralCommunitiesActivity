package com.javajo.sunshineRoad.mappers.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityReviewDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MypageActivityReviewMapper {

	public void insertRev(MypageActivityReviewDTO rev);
	public void updateRevStatus(int reservationId);

	public int updateRev(MypageActivityReviewDTO rev);

	public int selectCount(long uId);

	public int deleteReview(int revId);
	public void deleteRevStatus(int reservationId);

	public MypageActivityReviewDTO selectReview(int revId);

//	Oracle
	public List<MypageActivityReviewDTO> selectByNo(@Param("uId") long uId, @Param("start") int start, @Param("end") int end);

//	MySQL
//	public List<MypageActivityReviewDTO> selectByNo(@Param("uId") long uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}