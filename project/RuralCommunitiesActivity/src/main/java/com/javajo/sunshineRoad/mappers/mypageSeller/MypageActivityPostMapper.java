package com.javajo.sunshineRoad.mappers.mypageSeller;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageActivityPostDTO;
import com.javajo.sunshineRoad.model.dto.mypageMember.MypageMemberDTO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageActivityInfoDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MypageActivityPostMapper {
	public List<MypageActivityInfoDTO> selectDetailsInfoByPostId(int postId);

	public int selectCount(long sId);

	public int selectParticipantCount(int postId);

//	Oracle
//	public List<MypageActivityPostDTO> selectByNo(@Param("sId") long sId, @Param("start") int start, @Param("end") int end);
//	public List<MypageMemberDTO> selectInfoByPostId(@Param("postId") int postId, @Param("start") int start, @Param("end") int end);


//	MySQL
	public List<MypageActivityPostDTO> selectByNo(@Param("sId") long sId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
	public List<MypageMemberDTO> selectInfoByPostId(@Param("postId") int postId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}