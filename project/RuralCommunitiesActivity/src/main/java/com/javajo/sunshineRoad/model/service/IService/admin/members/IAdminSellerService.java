package com.javajo.sunshineRoad.model.service.IService.admin.members;

import java.util.HashMap;
import java.util.List;
import com.javajo.sunshineRoad.model.dto.admin.board.ASCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import com.javajo.sunshineRoad.model.dto.admin.members.AdminSellerDTO;


public interface IAdminSellerService {

	public List<AdminSellerDTO> getAllSeller(int requestPageNo,int perPagePostCount);
	public Integer totalCountSeller();
	
	public List<AdminSellerDTO> selectSellerID(int sId);

	public List<AdminSellerDTO> selectSellerDate(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);
	public Integer selectSellerDateTotalCount(ASearchDTO searchDTO);
	

	public void updateSeller(AdminSellerDTO adminSellerDTO) throws Exception;
	
	public void delSeller(int sId);
	
	public List<AdminSellerDTO> appSeller(int requestPageNo,int perPagePostCount);//가입승인요청 조회
	public Integer appSellerTotalCount();
	
	public void updateApp(int sId);
	

	public List<AdminSellerDTO> wrotePost(int sId,int requestPageNo,int perPagePostCount);
	public Integer wrotePostTotalCount(int id);
}
