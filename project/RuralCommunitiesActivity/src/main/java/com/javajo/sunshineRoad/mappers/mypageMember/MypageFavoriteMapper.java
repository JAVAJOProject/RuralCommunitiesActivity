package com.javajo.sunshineRoad.mappers.mypageMember;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageFavoriteDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MypageFavoriteMapper  {
	public int selectCountEvent(long uId);
	public int selectByActivity(long uId);

//	Oracle
//	public List<MypageFavoriteDTO> selectByMemberEvent(@Param("uId") long uId, @Param("start") int start, @Param("end") int end);
//	public List<MypageFavoriteDTO> selectByFavoriteListEvent(@Param("uId") long uId, @Param("start") int start, @Param("end") int end);
//	public List<MypageFavoriteDTO> selectByFavoriteListActivity(@Param("uId")long uId, @Param("start") int start,@Param("end") int end);

//	MySQL
	public List<MypageFavoriteDTO> selectByMemberEvent(@Param("uId") long uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
	public List<MypageFavoriteDTO> selectByFavoriteListEvent(@Param("uId") long uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
	public List<MypageFavoriteDTO> selectByFavoriteListActivity(@Param("uId")long uId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}