package com.javajo.sunshineRoad.model.service.IService.admin.members;

import java.util.List;
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;

public interface IAdminMemberService {

	public List<AdminMemberDTO> getAllMembers(int requestPageNo, int perPagePostCount);
	public Integer totalCountMembers();
	
	public List<AdminMemberDTO> selectMemberID(long uId);


	public List<AdminMemberDTO> selectMemberDate(ASearchDTO searchDTO, int requestPageNo, int perPagePostCount);
	public Integer selectMemberDateTotalCount(ASearchDTO searchDTO);

	public List<AdminMemberDTO> selectMember(ASearchDTO searchDTO, int requestPageNo, int perPagePostCount);
	public Integer selectMemberTotalCount(ASearchDTO searchDTO);

	public void registrationMember(AdminMemberDTO adminMemberDTO);
	public void updateMember(AdminMemberDTO adminMemberDTO) throws Exception;
	
	public void delMember(long uId);
	
	public List<AMCommunityDTO> wrotePost (long uId, int requestPageNo, int perPagePostCount);
	public Integer wrotePostTotalCount(long uId);

}