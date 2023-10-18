package com.javajo.sunshineRoad.model.service.impl.totalActivity;

import org.springframework.stereotype.Repository;

import com.javajo.sunshineRoad.model.dao.totalActivity.TotalActivityContentDAO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetTotalActivityContentService;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class GetTotalActivityContentServiceImpl implements GetTotalActivityContentService{
	private final TotalActivityContentDAO totalActivityContentDAO;
	@Override
	public TotalActivityContentDTO getOneContent(int aId) {
		return totalActivityContentDAO.getOneActivity(aId);
	}

}
