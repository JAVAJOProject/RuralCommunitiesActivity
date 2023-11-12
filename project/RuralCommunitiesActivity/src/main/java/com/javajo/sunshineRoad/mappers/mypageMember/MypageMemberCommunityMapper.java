package com.javajo.sunshineRoad.mappers.mypageMember;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberCommunityDTO;

public interface MypageMemberCommunityMapper {
	public int selectCount(int uId);

//	Oracle
   public List<MypageMemberCommunityDTO> selectByNo(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);

//   MySQL
//	public List<MypageMemberCommunityDTO> selectByNo(@Param("uId") int uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}