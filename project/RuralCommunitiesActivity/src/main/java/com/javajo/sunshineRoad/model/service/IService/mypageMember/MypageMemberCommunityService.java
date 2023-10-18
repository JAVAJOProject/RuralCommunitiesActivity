package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberCommunityDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageMemberCommunityService {
	public List<MypageMemberCommunityDTO> getInfo(int uId, PageInfo pageInfo);
	// public ReservationDTO getInfo(int reservationId);

	public int getActivityCount(int uId);

//	public List<MypageMemberCommunityDTO> getListInfo(int uId);
//

}
