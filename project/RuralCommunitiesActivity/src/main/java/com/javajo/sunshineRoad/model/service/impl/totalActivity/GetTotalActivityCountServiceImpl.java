package com.javajo.sunshineRoad.model.service.impl.totalActivity;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.totalActivity.TotalActivityListDAO;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetTotalActivityCountService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetTotalActivityCountServiceImpl implements GetTotalActivityCountService {
	private final TotalActivityListDAO totalActivityDAO;

	@Override
	public int getTotalActivityCount() {
		return totalActivityDAO.getTotalActivityCount();
	}

	@Override
	public int getTotalActivityCountByTheme(int tId) {
		return totalActivityDAO.getTotalActivityCountByTheme(tId);
	}

	@Override
	public int getTotalActivityCountByRegionOfSido(int sidoId) {
		return totalActivityDAO.getTotalActivityCountByRegionOfSido(sidoId);
	}

	@Override
	public int getTotalActivityCountByRegion(int sId) {
		return totalActivityDAO.getTotalActivityCountByRegion(sId);
	}
}