package com.javajo.sunshineRoad.model.service.IService.totalActivity;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListOfSidoDTO;

public interface GetRequestPageTotalActivityListService {
	public List<ActSummaryListDTO> getAllSummaryList(int totalCount, int perPagePostCount, int requestPageNo);
    public List<ActSummaryListDTO> getByThemeList(int tId, int totalCount, int perPagePostCount, int requestPageNo);
    public List<ActSummaryListOfSidoDTO> getByRegionListOfSido(int sidoId, int byRegionOfSidoCount, int perPagePostCount, int requestPageNo);
    public List<ActSummaryListDTO> getByRegionList(int sId, int totalCount, int perPagePostCount, int requestPageNo);
}