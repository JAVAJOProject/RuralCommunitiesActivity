package com.javajo.sunshineRoad.model.service.impl.mypageMember;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageMember.MypageActivityReviewDAO;
import com.javajo.sunshineRoad.model.dto.mainPage.MainPageTotalActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityReviewDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageActivityReviewService;
import com.javajo.sunshineRoad.model.dao.mainPage.MainPageDAO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageActivityReviewImpl implements MypageActivityReviewService {

	private final MypageActivityReviewDAO aReviewDAO;
	private final MainPageDAO mainPageDAO;

	@Override
	public List<MypageActivityReviewDTO> getInfo(long uId, PageInfo pageInfo) {
		return aReviewDAO.getInfo(uId, pageInfo);
	}

	@Override
	public void writeRev(MypageActivityReviewDTO rev) {
		aReviewDAO.writeRev(rev);
	}

	@Override
	public int updateRev(MypageActivityReviewDTO rev) {
		return aReviewDAO.updateRev(rev);
	}

	@Override
	public int getActivityCount(long uId) {
		return aReviewDAO.getActivityCount(uId);
	}

	@Override
	public MainPageTotalActivityInfoDTO getOneTotalActivityData(int id) {
		return mainPageDAO.getOneMainTotalActivityData(id);
	}

	@Override
	public int cancel(int revId, int reservationId) {
		return aReviewDAO.cancel(revId, reservationId);
	}

	@Override
	public MypageActivityReviewDTO getReview(int revId) {
		return aReviewDAO.getReview(revId);
	}
}