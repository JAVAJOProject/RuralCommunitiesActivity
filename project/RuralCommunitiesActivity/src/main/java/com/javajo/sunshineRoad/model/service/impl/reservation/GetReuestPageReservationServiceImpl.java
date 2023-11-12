package com.javajo.sunshineRoad.model.service.impl.reservation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.reservation.ReservationListDAO;
import com.javajo.sunshineRoad.model.dto.reservation.ResSummaryListDTO;
import com.javajo.sunshineRoad.model.dto.reservation.ReservationContentDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;
import com.javajo.sunshineRoad.model.service.IService.reservation.GetRequestPageReservationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetReuestPageReservationServiceImpl implements GetRequestPageReservationService{
private final ReservationListDAO reservationListDAO;
	
    private final OffSetBasedPaginationUtils offSetBasedPaginationUtils;


//    Oracle
	@Override
	public List<ResSummaryListDTO> getRequestPageReservitionList(int totalCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return reservationListDAO.getRequestPageReservationList(startPostNo, endPostNo);
    }
	@Override
	public List<ResSummaryListDTO> getRequestPageMyReservitionList(int uId, int totalCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return reservationListDAO.getRequestPageMyReservitionList(uId, startPostNo, endPostNo);
    }
	@Override
	public List<ResSummaryListDTO> getRequestPageMyServiceReservitionList(int aId, int totalCount, int perPagePostCount, int requestPageNo) {
		int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
        int endPostNo = offSetBasedPaginationUtils.findEndPostNo(totalCount, perPagePostCount, requestPageNo);

        return reservationListDAO.getRequestPageMyServiceReservitionList(aId, startPostNo, endPostNo);
    }


//    MySQL
//    @Override
//    public List<ResSummaryListDTO> getRequestPageReservitionList(int totalCount, int perPagePostCount, int requestPageNo) {
//        int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//        return reservationListDAO.getRequestPageReservationList(startPostNo - 1, perPagePostCount);
//    }
//    @Override
//    public List<ResSummaryListDTO> getRequestPageMyReservitionList(int uId, int totalCount, int perPagePostCount, int requestPageNo) {
//        int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//        return reservationListDAO.getRequestPageMyReservitionList(uId, startPostNo - 1, perPagePostCount);
//    }
//    @Override
//    public List<ResSummaryListDTO> getRequestPageMyServiceReservitionList(int aId, int totalCount, int perPagePostCount, int requestPageNo) {
//        int startPostNo = offSetBasedPaginationUtils.findStartPostNo(totalCount, perPagePostCount, requestPageNo);
//
//        return reservationListDAO.getRequestPageMyServiceReservitionList(aId, startPostNo - 1, perPagePostCount);
//    }
}