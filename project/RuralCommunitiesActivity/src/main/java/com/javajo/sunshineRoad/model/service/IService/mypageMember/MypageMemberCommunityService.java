package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageMemberCommunityService {
	public List<MypageMemberCommunityDTO> getInfo(long uId, PageInfo pageInfo);
	// public ReservationDTO getInfo(int reservationId);

	public int getActivityCount(long uId);

//	public List<MypageMemberCommunityDTO> getListInfo(long uId);
//

}