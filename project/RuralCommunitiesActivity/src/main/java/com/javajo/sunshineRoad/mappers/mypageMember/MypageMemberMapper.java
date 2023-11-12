package com.javajo.sunshineRoad.mappers.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import org.apache.ibatis.annotations.Param;

public interface MypageMemberMapper {
	public MypageMemberDTO selectByNo(int uId);

	public int updateByName(@Param("uName") String uName, @Param("uId") int uId);

	public boolean changeByName(int uId);
}