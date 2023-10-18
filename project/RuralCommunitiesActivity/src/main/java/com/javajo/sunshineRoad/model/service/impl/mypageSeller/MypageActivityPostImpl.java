package com.javajo.sunshineRoad.model.service.impl.mypageSeller;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageSeller.MypageActivityPostDAO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityPostDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageSeller.MypageActivityPostService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageActivityPostImpl implements MypageActivityPostService {

	private final MypageActivityPostDAO activityInfoDAO;

	@Override
	public List<MypageActivityPostDTO> getInfo(int sId, PageInfo pageInfo) {
		return activityInfoDAO.getInfo(sId, pageInfo);
	}

	@Override
	public List<MypageMemberDTO> getList(int postId, PageInfo pageInfo) {
		return activityInfoDAO.getList(postId, pageInfo);
	}

	@Override
	public int getActivityParticipantCount(int postId) {
		return activityInfoDAO.getActivityParticipantCount(postId);
	}

	@Override
	public int getActivityCount(int sId) {
		return activityInfoDAO.getActivityCount(sId);

	}

}
