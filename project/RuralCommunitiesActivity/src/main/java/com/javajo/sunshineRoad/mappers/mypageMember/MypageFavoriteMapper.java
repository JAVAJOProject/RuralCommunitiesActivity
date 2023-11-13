package com.javajo.sunshineRoad.mappers.mypageMember;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;

@Mapper
public interface MypageFavoriteMapper  {
	public int selectCountEvent(int uId);
	public int selectByActivity(int uId);

//	Oracle
	public List<MypageFavoriteDTO> selectByMemberEvent(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);
	public List<MypageFavoriteDTO> selectByFavoriteListEvent(@Param("uId") int uId, @Param("start") int start, @Param("end") int end);
	public List<MypageFavoriteDTO> selectByFavoriteListActivity(@Param("uId")int uId, @Param("start") int start,@Param("end") int end);

//	MySQL
//	public List<MypageFavoriteDTO> selectByMemberEvent(@Param("uId") int uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
//	public List<MypageFavoriteDTO> selectByFavoriteListEvent(@Param("uId") int uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
//	public List<MypageFavoriteDTO> selectByFavoriteListActivity(@Param("uId")int uId, @Param("start") int start,@Param("perPagePostNo") int perPagePostNo);
}