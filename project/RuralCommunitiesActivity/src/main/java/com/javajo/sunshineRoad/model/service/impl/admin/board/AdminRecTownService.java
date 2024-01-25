package com.javajo.sunshineRoad.model.service.impl.admin.board;

import com.javajo.sunshineRoad.model.dao.admin.board.ARecTownDAO;
import com.javajo.sunshineRoad.model.dto.admin.board.ARecTownDTO;
import com.javajo.sunshineRoad.model.dto.admin.board.ASearchDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.board.IAdminRecTownService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class AdminRecTownService implements IAdminRecTownService {

	
	private final ARecTownDAO RecTownDAO;
	private final AdminRecTownCntService recTownCntService;
	
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;




	//등록하기
	public void registrationRecTown(ARecTownDTO recTownDTO) {
		System.out.println("RecTownService  registrationRecTown() 객체등록");
		RecTownDAO.registrationRecTown(recTownDTO);
	};

	//수정하기 객체
	public void modifyRecTownPost(ARecTownDTO recTownDTO) {
		System.out.println("RecTownService  modifyRecTownPost 객체 수정하기");
		RecTownDAO.modifyRecTownPost(recTownDTO);
	}
	//이미지 삭제 --수정하는경우 먼저 삭제후 등록 메서드 실행
	public int deleteRecTownImg(int recTId) {
		System.out.println("RecTownService   deleteRecTownImg 이미지 삭제");
		return RecTownDAO.deleteRecTownImg(recTId);
	}

	//삭제하기 객체
	public int deleteRecTownPost(int recTId) {
		System.out.println("RecTownService   deleteRecTownPost 객체 삭제");
		return RecTownDAO.deleteRecTownPost(recTId);
	}

	//상세조회
	@Override
	public List<ARecTownDTO> detailRecTown(int recTId) {
		System.out.println("RecTownService   detailRecTown()");
		return RecTownDAO.detailRecTown(recTId);
	}




	// Oracle
//	//전체조회
//	@Override
//	public List<ARecTownDTO> getAllRecTown(int requestPageNo,int perPagePostCount) {
//		System.out.println("[RecTownService] getAll()");
//
//		int totalCount = 0;
//
//		totalCount = recTownCntService.getTotalCount();
//
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		return RecTownDAO.getAllRecTown(startPostNo,endPostNo);
//	}
//
//	//필터링조회
//	@Override
//	public List<ARecTownDTO> selectRecTown(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {
//		System.out.println("[RecTownService] selectRecTown()");
//
//		int totalCount = 0;
//		int startPostNo = 0;
//		int endPostNo = 0;
//
//
//		//키워드가 없는경우 다른 쿼리에 영향 없도록
//		if(searchDTO.getKeyword() == null || searchDTO.getKeyword().isEmpty() || searchDTO.getKeyword().equals("")) {
//			searchDTO.setKeyword("%나다%");
//		}
//
//		totalCount = recTownCntService.selectRecTownCnt(searchDTO);
//		startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//		endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);
//		return RecTownDAO.selectRecTown(searchDTO,startPostNo,endPostNo);
//	}

	// MySQL
	//전체조회
	@Override
	public List<ARecTownDTO> getAllRecTown(int requestPageNo,int perPagePostCount) {
		System.out.println("[RecTownService] getAll()");

		int totalCount = 0;

		totalCount = recTownCntService.getTotalCount();

		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);

		return RecTownDAO.getAllRecTown(startPostNo - 1, perPagePostCount);
	}

	//필터링조회
	@Override
	public List<ARecTownDTO> selectRecTown(ASearchDTO searchDTO,int requestPageNo, int perPagePostCount) {
		System.out.println("[RecTownService] selectRecTown()");

		int totalCount = 0;
		int startPostNo = 0;


		//키워드가 없는경우 다른 쿼리에 영향 없도록
		if(searchDTO.getKeyword() == null || searchDTO.getKeyword().isEmpty() || searchDTO.getKeyword().equals("")) {
			searchDTO.setKeyword("%나다%");
		}

		totalCount = recTownCntService.selectRecTownCnt(searchDTO);
		startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);

		return RecTownDAO.selectRecTown(searchDTO, startPostNo - 1, perPagePostCount);
	}
}