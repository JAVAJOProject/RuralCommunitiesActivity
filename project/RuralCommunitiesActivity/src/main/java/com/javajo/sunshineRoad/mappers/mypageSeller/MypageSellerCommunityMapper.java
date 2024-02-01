package com.javajo.sunshineRoad.mappers.mypageSeller;

import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageSellerCommunityDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MypageSellerCommunityMapper {
	public int selectCount(long sId);


//    Oracle
    public List<MypageSellerCommunityDTO> selectByNo(@Param("sId") long sId, @Param("start") int start, @Param("end") int end);


//    MySQL
//    public List<MypageSellerCommunityDTO> selectByNo(@Param("sId") long sId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}