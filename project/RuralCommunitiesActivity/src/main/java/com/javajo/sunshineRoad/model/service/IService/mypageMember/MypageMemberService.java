package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;

public interface MypageMemberService {
    public MypageMemberDTO getInfo(long uId);

	public int changeInfo(String uName, long uId);

	public boolean delMember(long uId);

	boolean changeInfo(long uId);
}