package com.javajo.sunshineRoad.mappers.mypageMember;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;

@Mapper
public interface MypageFavoriteMapper  {
	public List<MypageFavoriteDTO> selectByMemberEvent(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);

	public int selectCountEvent(int uId);

	public List<MypageFavoriteDTO> selectByFavoriteListEvent(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);
}