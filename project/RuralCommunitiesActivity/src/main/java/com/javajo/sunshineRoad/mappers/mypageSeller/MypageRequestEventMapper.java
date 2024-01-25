package com.javajo.sunshineRoad.mappers.mypageSeller;

import com.javajo.sunshineRoad.model.dto.mypageMember.MypageEventWinnerDTO;
import com.javajo.sunshineRoad.model.dto.mypageSeller.MypageRequestEventDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MypageRequestEventMapper {
	public MypageRequestEventDTO selectByNo(int eventId);

    //public boolean RequestEventDTO selectByNo(int eventId);
	public MypageRequestEventDTO getEventModifyInfo(int eventId);

	public int updateByCancel(int eventId);

	//param(key 이름) type명과 변수명 인데 xml에서 파라미터타입을 map으로 하고, key값을 변수에 넣으면 ({})
	// 키값에 해당하는 변수의 값이 나옴. "키" value ,각각 담김 type 은 상관없음 2개이상의 변수일때 param과 map을사용
	public int updateByEvent(@Param("eventId") int eventId, @Param("eventName") String eventName);

	public int selectCount(long sId);

	public int selectParticipantCount(int eventId);

	public int selectWinnerCount(int eventId);


//	Oracle
//    public List<MypageRequestEventDTO> getEventInfo(@Param("sId") long sId, @Param("start") int start, @Param("end") int end);
//	public List<MypageEventWinnerDTO> selectParticipantByNo(@Param("eventId") int eventId, @Param("start") int start, @Param("end") int end);
//	public List<MypageEventWinnerDTO> selectWinnerByNo(@Param("eventId") int eventId, @Param("start") int start, @Param("end") int end);


//	MySQL
	public List<MypageRequestEventDTO> getEventInfo(@Param("sId") long sId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
	public List<MypageEventWinnerDTO> selectParticipantByNo(@Param("eventId") int eventId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
	public List<MypageEventWinnerDTO> selectWinnerByNo(@Param("eventId") int eventId, @Param("start") int start, @Param("perPagePostNo") int perPagePostNo);
}