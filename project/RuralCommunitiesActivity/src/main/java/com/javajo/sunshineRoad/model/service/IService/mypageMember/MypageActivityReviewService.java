package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mainPage.MainPageTotalActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityReviewDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageActivityReviewService {
	public List<MypageActivityReviewDTO> getInfo(int uId, PageInfo pageInfo);

	void writeRev(MypageActivityReviewDTO rev);

	int updateRev(MypageActivityReviewDTO rev);

	public int getActivityCount(int uId);

	MainPageTotalActivityInfoDTO getOneTotalActivityData(int id);

	public int cancel(int revId, int reservationId);

	public MypageActivityReviewDTO getReview(int revId);

}