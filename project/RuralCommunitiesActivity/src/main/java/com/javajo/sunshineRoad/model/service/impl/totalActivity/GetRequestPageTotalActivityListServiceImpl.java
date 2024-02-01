package com.javajo.sunshineRoad.model.service.impl.totalActivity;

import com.javajo.sunshineRoad.model.dao.totalActivity.TotalActivityListDAO;
import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListOfSidoDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetRequestPageTotalActivityListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetRequestPageTotalActivityListServiceImpl implements GetRequestPageTotalActivityListService{
	private final TotalActivityListDAO totalActivityListDAO;
	
	private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;
	

//	Oracle
	@Override
	public List<ActSummaryListDTO> getAllSummaryList(int totalCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return totalActivityListDAO.getTotalActivitySummaryList(startPostNo, endPostNo);
	}
	@Override
	public List<ActSummaryListDTO> getByThemeList(int tId, int byThemeCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(byThemeCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(byThemeCount, perPagePostCount, requestPageNo);

        return totalActivityListDAO.getRequestPageTotalActivityByThemeList(tId, startPostNo, endPostNo);
	}
	@Override
	public List<ActSummaryListOfSidoDTO> getByRegionListOfSido(int sidoId, int byRegionOfSidoCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(byRegionOfSidoCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(byRegionOfSidoCount, perPagePostCount, requestPageNo);

        return totalActivityListDAO.getRequestPageTotalActivityByRegionOfSidoList(sidoId, startPostNo, endPostNo);
	}
	@Override
	public List<ActSummaryListDTO> getByRegionList(long sId, int byRegionCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(byRegionCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(byRegionCount, perPagePostCount, requestPageNo);

        return totalActivityListDAO.getRequestPageTotalActivityByRegionList(sId, startPostNo, endPostNo);
	}


//	MySQL
//	@Override
//	public List<ActSummaryListDTO> getAllSummaryList(int totalCount, int perPagePostCount, int requestPageNo) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//		return totalActivityListDAO.getTotalActivitySummaryList(startPostNo - 1, perPagePostCount);
//	}
//	@Override
//	public List<ActSummaryListDTO> getByThemeList(int tId, int byThemeCount, int perPagePostCount, int requestPageNo) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(byThemeCount, perPagePostCount, requestPageNo);
//
//		return totalActivityListDAO.getRequestPageTotalActivityByThemeList(tId, startPostNo - 1, perPagePostCount);
//	}
//	@Override
//	public List<ActSummaryListOfSidoDTO> getByRegionListOfSido(int sidoId, int byRegionOfSidoCount, int perPagePostCount, int requestPageNo) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(byRegionOfSidoCount, perPagePostCount, requestPageNo);
//
//		return totalActivityListDAO.getRequestPageTotalActivityByRegionOfSidoList(sidoId, startPostNo - 1, perPagePostCount);
//	}
//	@Override
//	public List<ActSummaryListDTO> getByRegionList(long sId, int byRegionCount, int perPagePostCount, int requestPageNo) {
//		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(byRegionCount, perPagePostCount, requestPageNo);
//
//		return totalActivityListDAO.getRequestPageTotalActivityByRegionList(sId, startPostNo - 1, perPagePostCount);
//	}
}