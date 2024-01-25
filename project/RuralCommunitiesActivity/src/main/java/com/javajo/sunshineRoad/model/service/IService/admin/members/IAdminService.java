package com.javajo.sunshineRoad.model.service.IService.admin.members;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminDTO;

import java.util.List;

public interface IAdminService {

	public List<AdminDTO> getAllAdmin(int requestPageNo,int perPagePostCount);
	public Integer totalCountAdmin();
	
	public List<AdminDTO> selectAdminID(long adminId);


	public List<AdminDTO> selectAdminDate(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);
	public Integer selectAdminDateCount(ASearchDTO searchDTO);

	
	public List<AdminDTO> selectAdmin(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);
	public Integer selectAdminTotalCount(ASearchDTO searchDTO);

	public void registrationAdmin(AdminDTO adminDTO);
	
	
	public void updateAdmin(AdminDTO adminDTO) throws Exception;
	
	public void delAdmin(long adminId);
	
	
	public List<AdminDTO> appAdmin(int requestPageNo,int perPagePostCount);
	public Integer appAdminTotalCount();
	public void updateApp(long adminId);
	
//	public List<AdminDTO> wrotePost(int adminId,int requestPageNo,int perPagePostCount);
}