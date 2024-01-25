package com.javajo.sunshineRoad.model.service.impl.admin.board;

import com.javajo.sunshineRoad.model.dao.admin.board.ARecActivityDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecActivityDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminRecActivityService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminRecActivityService implements IAdminRecActivityService{

	
	private final ARecActivityDAO recActivityDAO;
	private final AdminRecActivityCntService recActivityCntService;
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;


	//상세조회
	@Override
	public List<ARecActivityDTO> detailRecActivity(int recAPostId) {
		System.out.println("RecActivityService detailRecActivity()");
		return recActivityDAO.detailRecActivity(recAPostId);
	}

	//등록하기
	public void registrationRecActivity(ARecActivityDTO aRecActivityDTO) {
		System.out.println("RecActivityService registrationRecActivity()");
		recActivityDAO.registrationRecActivity(aRecActivityDTO);
	}

	//수정하기 객체
	public void modifyRecActivityPost(ARecActivityDTO aRecActivityDTO) {
		System.out.println("RecActivityService modifyRecActivityPost()");
		recActivityDAO.modifyRecActivityPost(aRecActivityDTO);
	}

	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteRecActivityImg(int recAPostId) {
		System.out.println("RecActivityService deleteRecActivityImg()");
		return recActivityDAO.deleteRecActivityImg(recAPostId);
	}

	//삭제하기 객체
	public int deleteRecActivityPost(int recAPostId) {
		System.out.println("RecActivityService deleteRecActivityPost()");
		return recActivityDAO.deleteRecActivityPost(recAPostId);
	}




	// Oracle
//	//전체조회
//	@Override
//	public List<ARecActivityDTO> getAllRecActivity(int requestPageNo,int perPagePostCount) {
//		System.out.println("[RecActivityService] getAllRecActivity()");
//
//		int totalCount = 0;
//
//		totalCount = recActivityCntService.getTotalCount();
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//
//
//		return recActivityDAO.getAllRecActivity(startPostNo,endPostNo);
//	}
//
//	//필터링 조회
//	@Override
//	public List<ARecActivityDTO> selectDateRecActivity(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {
//		System.out.println("[RecActivityService] selectDateRecActivity()");
//
//		int totalCount = 0;
//
//		//날짜가 혹시 없는경우 전체 조회
//		if(searchDTO.getStartDate() == null || searchDTO.getStartDate().isEmpty() || searchDTO.getStartDate().equals("")) {
//			searchDTO.setStartDate("2020-01-01");
//			if(searchDTO.getEndDate() == null || searchDTO.getEndDate().isEmpty() || searchDTO.getEndDate().equals("")) {
//				searchDTO.setEndDate("2025-12-31");
//			}
//		}
//
//		totalCount = recActivityCntService.selectDateRecActivityCnt(searchDTO);
//		System.out.println(totalCount);
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//		int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//
//
//		return recActivityDAO.selectDateRecActivity(searchDTO,startPostNo,endPostNo);
//	}
//
//	//필터링조회 키워드
//	@Override
//	public List<ARecActivityDTO> selectRecActivity(ASearchDTO searchDTO, int requestPageNo, int perPagePostCount) {
//		System.out.println("[RecActivityService] SelectRecActivity()");
//
//		int totalCount = 0;
//
//
//		//키워드가 없는경우 다른 쿼리에 영향 없도록
////		if(searchDTO.getKeyword() == null || searchDTO.getKeyword().isEmpty() || searchDTO.getKeyword().equals("")) {
////			searchDTO.setKeyword("%나다%");
////		}
//
//
//		totalCount = recActivityCntService.selectRecActivityCnt(searchDTO);
//		System.out.println(totalCount);
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//		int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		List<ARecActivityDTO> result = recActivityDAO.selectRecActivity(searchDTO,startPostNo,endPostNo);
//		System.out.println(result.get(0).getPostTypeId() + ", " + result.get(0).getRecAContent() + ", " + result.size());
//		return result;
//	}

	// MySQL
	//전체조회
	@Override
	public List<ARecActivityDTO> getAllRecActivity(int requestPageNo, int perPagePostCount) {
		System.out.println("[RecActivityService] getAllRecActivity()");

		int totalCount = 0;

		totalCount = recActivityCntService.getTotalCount();
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);


		return recActivityDAO.getAllRecActivity(startPostNo - 1, perPagePostCount);
	}

	//필터링 조회
	@Override
	public List<ARecActivityDTO> selectDateRecActivity(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {
		System.out.println("[RecActivityService] selectDateRecActivity()");

		int totalCount = 0;

		//날짜가 혹시 없는경우 전체 조회
		if(searchDTO.getStartDate() == null || searchDTO.getStartDate().isEmpty() || searchDTO.getStartDate().equals("")) {
			searchDTO.setStartDate("2020-01-01");
			if(searchDTO.getEndDate() == null || searchDTO.getEndDate().isEmpty() || searchDTO.getEndDate().equals("")) {
				searchDTO.setEndDate("2025-12-31");
			}
		}

		totalCount = recActivityCntService.selectDateRecActivityCnt(searchDTO);
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);

		return recActivityDAO.selectDateRecActivity(searchDTO, startPostNo - 1, perPagePostCount);
	}

	//필터링조회 키워드
	@Override
	public List<ARecActivityDTO> selectRecActivity(ASearchDTO searchDTO, int requestPageNo, int perPagePostCount) {
		System.out.println("[RecActivityService] SelectRecActivity()");

		int totalCount = 0;


		//키워드가 없는경우 다른 쿼리에 영향 없도록
//		if(searchDTO.getKeyword() == null || searchDTO.getKeyword().isEmpty() || searchDTO.getKeyword().equals("")) {
//			searchDTO.setKeyword("%나다%");
//		}


		totalCount = recActivityCntService.selectRecActivityCnt(searchDTO);
		System.out.println(totalCount);
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);

		List<ARecActivityDTO> result = recActivityDAO.selectRecActivity(searchDTO, startPostNo - 1, perPagePostCount);
		System.out.println(result.get(0).getPostTypeId() + ", " + result.get(0).getRecAContent() + ", " + result.size());
		return result;
	}
}