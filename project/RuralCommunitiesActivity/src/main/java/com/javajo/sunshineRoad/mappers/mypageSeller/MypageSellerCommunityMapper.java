package com.javajo.sunshineRoad.mappers.mypageSeller;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerCommunityDTO;

public interface MypageSellerCommunityMapper {
	public int selectCount(int sId);


//    Oracle
    public List<MypageSellerCommunityDTO> selectByNo(@Param("sId") int sId, @Param("start") int start, @Param("end") int end);


//    MySQL
//    public List<MypageSellerCommunityDTO> selectByNo(@Param("sId") int sId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}