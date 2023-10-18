package com.javajo.sunshineRoad.mappers.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;

public interface MypageMemberMapper {
	public MypageMemberDTO selectByNo(int uId);

	public int updateByName(String uName);
	
	public boolean changeByName(int uId);
}
