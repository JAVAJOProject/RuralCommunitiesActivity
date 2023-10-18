package com.javajo.sunshineRoad.model.service.IService.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;

public interface MypageMemberService {
    public MypageMemberDTO getInfo(int uId);

	public int changeInfo(String uName);

	public boolean delMember(int uId);

	boolean changeInfo(int uId);
}
