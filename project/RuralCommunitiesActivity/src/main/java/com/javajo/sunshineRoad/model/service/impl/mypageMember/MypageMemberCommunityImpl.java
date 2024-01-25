package com.javajo.sunshineRoad.model.service.impl.mypageMember;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.mypageMember.MypageMemberCommunityDAO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;
import com.javajo.sunshineRoad.model.service.IService.mypageMember.MypageMemberCommunityService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MypageMemberCommunityImpl implements MypageMemberCommunityService {
	
    private final MypageMemberCommunityDAO memCommunityDAO;

	@Override
	public List<MypageMemberCommunityDTO> getInfo(long uId, PageInfo pageInfo) {
		 return memCommunityDAO.getInfo(uId, pageInfo);
	}


	@Override
	public int getActivityCount(long uId) {
		return memCommunityDAO.getActivityCount(uId);
	}

//	@Override
//	public List<MypageMemberCommunityDTO> getListInfo(long uId) {
//		return memCommunityDAO.getListInfo(uId);
//
//	}
}