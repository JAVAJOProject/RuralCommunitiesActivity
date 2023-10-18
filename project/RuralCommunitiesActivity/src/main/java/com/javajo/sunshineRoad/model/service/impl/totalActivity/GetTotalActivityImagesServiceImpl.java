package com.javajo.sunshineRoad.model.service.impl.totalActivity;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.totalActivity.TotalActivityContentDAO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityImagesDTO;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetTotalActivityImagesService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetTotalActivityImagesServiceImpl implements GetTotalActivityImagesService {
	private final TotalActivityContentDAO totalActivityContentDAO;
	
	@Override
	public TotalActivityImagesDTO getTotalActivityImages(int aId) {
		return totalActivityContentDAO.getTotalActivityImages(aId);
	}

}
