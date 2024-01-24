package com.javajo.sunshineRoad.model.service.impl.admin.members;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.members.AdminSellerCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.members.AdminSellerDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASCommunityDTO;

import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;

import com.javajo.sunshineRoad.model.dto.admin.members.AdminSellerDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.members.IAdminSellerService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminActivityCntService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AdminSellerService implements IAdminSellerService {

	private final AdminSellerDAO adminSellerDAO;
	private final AdminSellerCntDAO adminSellerCntDAO;
	
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	 
	
	
	//전체조회
	public List<AdminSellerDTO> getAllSeller(int requestPageNo, int perPagePostCount){
		System.out.println("[SellerService] getAllSeller()");
		
		int totalCount = 0;
		
		totalCount = adminSellerCntDAO.getTotalCount();
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

		return adminSellerDAO.getAllSeller(startPostNo,endPostNo);
	}

	
	// total Count
	public Integer totalCountSeller() {
		System.out.println("[SellerService] totalCountSeller()");
		int totalCount = 0;
		totalCount = adminSellerCntDAO.getTotalCount();
		return totalCount;
	}
	
	
	
	// 아이디 조회
	@Override
	public List<AdminSellerDTO> selectSellerID(int sId) {
		System.out.println("[SellerService] selectSellerID(id)");
		return adminSellerDAO.selectSellerID(sId);
	}

	// 가입일 기간 조회
	@Override

	public List<AdminSellerDTO> selectSellerDate(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {

		System.out.println("[SellerService] selectSellerDATE(map)");
		
		int totalCount = 0;
		totalCount = adminSellerCntDAO.selectSellerDATECnt(searchDTO);

		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        return adminSellerDAO.selectSellerDATE(searchDTO,startPostNo,endPostNo);
	}

	// 가입일 조회 total Count
	public Integer selectSellerDateTotalCount(ASearchDTO searchDTO) {
		System.out.println("[SellerService] selectSellerDateTotalCount()");
		
		int totalCount = 0;
		totalCount = adminSellerCntDAO.selectSellerDATECnt(searchDTO);
		return totalCount;
	}	
	
	
	
	// 수정
	@Override
	public void updateSeller(AdminSellerDTO adminSellerDTO) throws Exception {
		System.out.println("[SellerService] updateSeller()");
		adminSellerDAO.updateSeller(adminSellerDTO);

	}

	// 삭제
	@Override
	public void delSeller(int sId) {
		System.out.println("[SellerService] delSeller()");
		adminSellerDAO.delSeller(sId);
	}
	//가입승인조회
	@Override
	public List<AdminSellerDTO> appSeller(int requestPageNo, int perPagePostCount) {
		System.out.println("[SellerService] appSeller()");
		
		int totalCount = 0;
		
		totalCount = adminSellerCntDAO.appSellerCnt();
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return adminSellerDAO.appSeller(startPostNo,endPostNo);
	}
	
	// 가입승인 조회 total Count
	public Integer appSellerTotalCount() {
		System.out.println("[SellerService] appSellerTotalCount()");
		
		int totalCount = 0;
		totalCount = adminSellerCntDAO.appSellerCnt();
		return totalCount;
	}		
	
	

	//가입승인하기
	public void updateApp(int sId) {
		System.out.println("[SellerService] updateApp()");
		adminSellerDAO.updateApp(sId);
	}

	//작성한글 보기
	@Override

	public List<AdminSellerDTO> wrotePost(int id,int requestPageNo, int perPagePostCount) {

		System.out.println("[SellerService] wrotePost()");
		
		int totalCount = 0;
		totalCount = adminSellerCntDAO.wrotePostCnt(id);
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);      

        return adminSellerDAO.wrotePost(id,startPostNo,endPostNo);
	}
	
	// 작성한글 조회 total Count
	public Integer wrotePostTotalCount(int id) {
		System.out.println("[SellerService] appSellerTotalCount()");
		
		int totalCount = 0;
		totalCount = adminSellerCntDAO.wrotePostCnt(id);
		return totalCount;
	}		
		
	
}
