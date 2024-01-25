package com.javajo.sunshineRoad.model.service.IService.reservation;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.reservation.ResSummaryListDTO;

public interface GetRequestPageReservationService {
	public List<ResSummaryListDTO> getRequestPageReservitionList(int totalCount, int perPagePostCount, int requestPageNo);
	public List<ResSummaryListDTO> getRequestPageMyReservitionList(long uId, int myResrevationCount, int perPagePostCount, int requestPageNo);
    public List<ResSummaryListDTO> getRequestPageMyServiceReservitionList(int aId, int myServiceResrevationCount, int perPagePostCount, int requestPageNo);

}