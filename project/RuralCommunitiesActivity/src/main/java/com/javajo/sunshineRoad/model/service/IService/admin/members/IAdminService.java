package com.javajo.sunshineRoad.model.service.IService.admin.members;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminDTO;


public interface IAdminService {

	public List<AdminDTO> getAllAdmin(int requestPageNo,int perPagePostCount);

	public List<AdminDTO> selectAdminID(int adminId);

	public List<AdminDTO> selectAdminDATE(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);

	public void updateAdmin(AdminDTO adminDTO) throws Exception;
	
	public void delAdmin(int adminId);
	
	public List<AdminDTO> appAdmin(int requestPageNo,int perPagePostCount);
	
	public void updateApp(int adminId);
	
//	public List<AdminDTO> wrotePost(int adminId,int requestPageNo,int perPagePostCount);
}
