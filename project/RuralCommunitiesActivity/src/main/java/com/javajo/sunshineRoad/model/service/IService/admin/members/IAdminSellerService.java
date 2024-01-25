package com.javajo.sunshineRoad.model.service.IService.admin.members;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminSellerDTO;

import java.util.List;


public interface IAdminSellerService {

	public List<AdminSellerDTO> getAllSeller(int requestPageNo,int perPagePostCount);
	public Integer totalCountSeller();
	
	public List<AdminSellerDTO> selectSellerID(long sId);

	public List<AdminSellerDTO> selectSellerDate(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount);
	public Integer selectSellerDateTotalCount(ASearchDTO searchDTO);
	

	public void updateSeller(AdminSellerDTO adminSellerDTO) throws Exception;
	
	public void delSeller(long sId);
	
	public List<AdminSellerDTO> appSeller(int requestPageNo,int perPagePostCount);//가입승인요청 조회
	public Integer appSellerTotalCount();
	
	public void updateApp(long sId);
	

	public List<AdminSellerDTO> wrotePost(long sId, int requestPageNo, int perPagePostCount);
	public Integer wrotePostTotalCount(long id);
}