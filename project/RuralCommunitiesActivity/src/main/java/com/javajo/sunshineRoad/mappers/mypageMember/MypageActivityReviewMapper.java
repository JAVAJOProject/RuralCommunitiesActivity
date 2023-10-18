package com.javajo.sunshineRoad.mappers.mypageMember;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityReviewDTO;

public interface MypageActivityReviewMapper {
	public List<MypageActivityReviewDTO> selectByNo(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);

	public void insertRev(MypageActivityReviewDTO rev);

	public int updateRev(MypageActivityReviewDTO rev);

	public int selectCount(int uId);
}