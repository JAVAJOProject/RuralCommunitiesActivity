package com.javajo.sunshineRoad.model.service.impl.admin.members;

import java.util.List;
import org.springframework.stereotype.Service;
import com.javajo.sunshineRoad.model.dao.admin.members.AdminMemberCntDAO;
import com.javajo.sunshineRoad.model.dao.admin.members.AdminMemberDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.AMCommunityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.dto.admin.members.AdminMemberDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.members.IAdminMemberService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminMemberService implements IAdminMemberService {

	private final AdminMemberDAO adminMemberDAO;
	private final AdminMemberCntDAO adminMemberCntDAO;
	
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	 

	// 전체조회
	public List<AdminMemberDTO> getAllMembers(int requestPageNo,int perPagePostCount) {
		System.out.println("[MemberService] getAllMembers()");
		
		int totalCount = 0;
		
		totalCount = adminMemberCntDAO.getTotalCount();
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
		
		return adminMemberDAO.getAllMembers(startPostNo,endPostNo);
	}
	
	
	// 전체 조회 total Count
	public Integer totalCountMembers() {
		System.out.println("[MemberService] totalCountMembers()");
		
		int totalCount = 0;
		totalCount = adminMemberCntDAO.getTotalCount();
		return totalCount;
	}
	
	

	// 아이디 조회
	@Override
	public List<AdminMemberDTO> selectMemberID(ASearchDTO searchDTO) {
		System.out.println("[MemberService] selectMemberID(id)");
		return adminMemberDAO.selectMemberID(searchDTO);
	}

	
	
	// 가입일 기간 조회
	@Override
	public List<AdminMemberDTO> selectMemberDate(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount) {
		System.out.println("[MemberService] selectMemberDATE(map)");
		int totalCount = 0;
		
		totalCount = adminMemberCntDAO.selectMemberDATECnt(searchDTO);
	
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        return adminMemberDAO.selectMemberDATE(searchDTO,startPostNo,endPostNo);
	}
	
	// 가입일 조회 total Count
	public Integer selectMemberDateTotalCount(ASearchDTO searchDTO) {
		System.out.println("[MemberService] selectMemberDateTotalCount()");
		
		int totalCount = 0;
		totalCount = adminMemberCntDAO.selectMemberDATECnt(searchDTO);
		return totalCount;
	}	
	
	
	// 아이디,가입일 기간 조회
	@Override
	public List<AdminMemberDTO> selectMember(ASearchDTO searchDTO,int requestPageNo,int perPagePostCount) {
		System.out.println("[MemberService] selectMember()");
		int totalCount = 0;
		
		totalCount = adminMemberCntDAO.selectMemberCnt(searchDTO);
	
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
        System.out.println(startPostNo +","+ endPostNo);
        return adminMemberDAO.selectMember(searchDTO,startPostNo,endPostNo);
	}
	
	//아이디,가입일 조회 total Count
	public Integer selectMemberTotalCount(ASearchDTO searchDTO) {
		System.out.println("[MemberService] selectMemberTotalCount()");
		
		int totalCount = 0;
		totalCount = adminMemberCntDAO.selectMemberCnt(searchDTO);
		return totalCount;
	}		

	// 수정
	@Override
	public void updateMember(AdminMemberDTO adminMemberDTO) throws Exception {
		System.out.println("[MemberService] updateMember()");
		adminMemberDAO.updateMember(adminMemberDTO);

	}

	// 삭제
	@Override
	public void delMember(int uId) {
		System.out.println("[MemberService] delMember()");
		adminMemberDAO.delMember(uId);
	}
	
	
	//작성한글 보기
	@Override
	public List<AMCommunityDTO> wrotePost(int uId,int requestPageNo,int perPagePostCount) {
		System.out.println("[MemberService] wrotePost()");
		int totalCount = 0;
		
		totalCount = adminMemberCntDAO.wrotePostCnt(uId);
		
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
		return adminMemberDAO.wrotePost(uId,startPostNo,endPostNo);
	}

	// 작성한글 조회 total Count
	public Integer wrotePostTotalCount(int uId) {
		System.out.println("[MemberService] wrotePostTotalCount()");
		
		int totalCount = 0;
		totalCount = adminMemberCntDAO.wrotePostCnt(uId);
		return totalCount;
	}	
		


}
