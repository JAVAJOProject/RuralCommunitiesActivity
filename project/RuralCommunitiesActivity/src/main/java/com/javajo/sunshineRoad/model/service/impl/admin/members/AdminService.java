package com.javajo.sunshineRoad.model.service.impl.admin.members;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.admin.members.AdminCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.members.AdminDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.members.IAdminService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;

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
	

	// 아이디 조회
	@Override
	public List<AdminDTO> selectAdminID(int adminId) {
		System.out.println("[AdminService] selectAdminID(adminId)");
		return adminDAO.selectAdminID(adminId);
	}

	// 가입일 기간 조회
	@Override
	public List<AdminDTO> selectAdminDATE(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount) {
		System.out.println("[AdminService] selectAdminDATE(map)");

		int totalCount = 0;
		
		totalCount = adminCntDAO.selectAdminDATECnt(searchDTO);
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return adminDAO.selectAdminDATE(searchDTO,startPostNo,endPostNo);
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
