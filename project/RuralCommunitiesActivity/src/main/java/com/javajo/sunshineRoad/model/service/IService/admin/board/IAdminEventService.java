package com.javajo.sunshineRoad.model.service.IService.admin.board;

import java.util.List;
import com.javajo.sunshineRoad.model.dto.admin.board.AEventDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

public interface IAdminEventService {


	//전체조회
	public List<AEventDTO> getAllEvent(int requestPageNo,int perPagePostCount);

	public List<AEventDTO> detailEvent(int eventId);
	
	public List<AEventDTO> selectEventDate(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount);
	
	public List<AEventDTO> selectEventRequest(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount);
	
	public void registrationEvent(AEventDTO eventDTO);
	
	public void modifyEventPost(AEventDTO eventDTO);

	public int deleteEventImg(int eventId);
	
	public int deleteEventPost(int eventId);
	
}
