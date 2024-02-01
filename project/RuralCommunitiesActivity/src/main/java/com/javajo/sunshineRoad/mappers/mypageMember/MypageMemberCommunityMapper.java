package com.javajo.sunshineRoad.mappers.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberCommunityDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MypageMemberCommunityMapper {
	public int selectCount(long uId);

//	Oracle
   public List<MypageMemberCommunityDTO> selectByNo(@Param("uId") long uId, @Param("start") int start, @Param("end") int end);

//   MySQL
//	public List<MypageMemberCommunityDTO> selectByNo(@Param("uId") long uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}