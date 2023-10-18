package com.javajo.sunshineRoad.model.service.IService.admin.members;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;

public interface IAdminMemberService {

	public List<AdminMemberDTO> getAllMembers(int requestPageNo,int perPagePostCount);

	public List<AdminMemberDTO> selectMemberID(int uId);

	public List<AdminMemberDTO> selectMemberDATE(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);

	public void updateMember(AdminMemberDTO adminMemberDTO) throws Exception;
	
	public void delMember(int uId);
	
	public List<AMCommunityDTO> wrotePost (int uId,int requestPageNo,int perPagePostCount);
}
