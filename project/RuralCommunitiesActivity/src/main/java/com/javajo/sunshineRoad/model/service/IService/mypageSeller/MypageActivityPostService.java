package com.javajo.sunshineRoad.model.service.IService.mypageSeller;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityPostDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import com.javajo.sunshineRoad.model.dto.page.PageInfo;

public interface MypageActivityPostService {
	public List<MypageActivityPostDTO> getInfo(int sId, PageInfo pageInfo);

	public List<MypageMemberDTO> getList(int postId, PageInfo pageInfo);

	public int getActivityParticipantCount(int postId);

	public int getActivityCount(int sId);
}
