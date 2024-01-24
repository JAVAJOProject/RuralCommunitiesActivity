package com.javajo.sunshineRoad.model.service.impl.admin.members;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.members.AdminCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.members.AdminDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.members.IAdminService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.impl.admin.board.AdminActivityCntService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class AdminService implements IAdminService {

	private final AdminDAO adminDAO;
	private final AdminCntDAO adminCntDAO;
	
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	 
	
	
	//전체조회
	public List<AdminDTO> getAllAdmin(int requestPageNo, int perPagePostCount){
		System.out.println("[AdminService] getAllAdmin()");

		int totalCount = 0;
		
		totalCount = adminCntDAO.getTotalCount();
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

		return adminDAO.getAllAdmin(startPostNo,endPostNo);
	}
	
	// total Count
	public Integer totalCountAdmin() {
		System.out.println("[AdminService] totalCountAdmin()");
		int totalCount = 0;
		
		totalCount = adminCntDAO.getTotalCount();
		return totalCount;
	}
	
	
	
	// 아이디 조회
	@Override
	public List<AdminDTO> selectAdminID(int adminId) {
		System.out.println("[AdminService] selectAdminID(adminId)");
		return adminDAO.selectAdminID(adminId);
	}

	// 가입일 기간 조회
	@Override

	public List<AdminDTO> selectAdminDate(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount) {

		System.out.println("[AdminService] selectAdminDATE()");

		int totalCount = 0;
		totalCount = adminCntDAO.selectAdminDATECnt(searchDTO);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return adminDAO.selectAdminDATE(searchDTO,startPostNo,endPostNo);
	}

	//가입일 기간 조회 필터링
	public Integer selectAdminDateCount(ASearchDTO searchDTO) {

		System.out.println("[AdminService] selectAdminDateCount()");

		int totalCount = 0;
		totalCount = adminCntDAO.selectAdminDATECnt(searchDTO);

        return totalCount;
	}
	
	
	
	// 아이디,가입일 기간 조회
	@Override
	public List<AdminDTO> selectAdmin(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount) {
		System.out.println("[AdminService] selectMember()");
		int totalCount = 0;
		
		totalCount = adminCntDAO.selectAdminCnt(searchDTO);
	
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        System.out.println(startPostNo +","+ endPostNo);
        return adminDAO.selectAdmin(searchDTO,startPostNo,endPostNo);
	}
	
	//아이디,가입일 조회 total Count
	public Integer selectAdminTotalCount(ASearchDTO searchDTO) {
		System.out.println("[AdminService] selectAdminTotalCount()");
		
		int totalCount = 0;
		totalCount = adminCntDAO.selectAdminCnt(searchDTO);
		return totalCount;
	}		
	
	//등록
	public void registrationAdmin(AdminDTO adminDTO) {
		System.out.println("[AdminService] registrationAdmin()");
		adminDAO.registrationAdmin(adminDTO);
	}
	
	
	
	
	// 수정
	@Override
	public void updateAdmin(AdminDTO adminDTO) throws Exception {
		System.out.println("[AdminService] updateAdmin()");
		adminDAO.updateAdmin(adminDTO);

	}

	// 삭제
	@Override
	public void delAdmin(int adminId) {
		System.out.println("[AdminService] delMember()");
		adminDAO.delAdmin(adminId);
	}

	// 승인조회
	@Override
	public List<AdminDTO> appAdmin(int requestPageNo,int perPagePostCount) {
		System.out.println("[AdminService] adminApp()");
		int totalCount = 0;
		
		totalCount = adminCntDAO.appAdminCnt();
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return adminDAO.appAdmin(startPostNo,endPostNo);
	}

	// 승인조회 필터링
	@Override
	public Integer appAdminTotalCount() {
		System.out.println("[AdminService] appAdminTotalCount()");
		int totalCount = 0;
		
		totalCount = adminCntDAO.appAdminCnt();	
        return totalCount;
	}
	
	
	
	//승인하기
	@Override
	public void updateApp(int adminId) {
		System.out.println("[AdminService] updateApp()");
		adminDAO.updateApp(adminId);
		
	}


//	@Override
//	public List<AdminDTO> wrotePost(int adminId,int requestPageNo,int perPagePostCount) {
//		
//		int totalCount = 0;
//		
//		totalCount = adminCntDAO.wrotePostCnt();
//		
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//
//        return adminDAO.wrotePost(adminId,startPostNo,endPostNo);
//
//}



}
