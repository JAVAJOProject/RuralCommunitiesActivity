package com.javajo.sunshineRoad.mappers.mypageMember;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;

public interface MypageFavoriteMapper  {
	public List<MypageFavoriteDTO> selectByMember(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);

	public int selectCount(int uId);

	public List<MypageFavoriteDTO> selectByFavoriteList(int uId);
} 