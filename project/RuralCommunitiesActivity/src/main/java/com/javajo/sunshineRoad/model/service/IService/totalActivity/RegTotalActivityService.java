package com.javajo.sunshineRoad.model.service.IService.totalActivity;

import java.util.List;

import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;

public interface RegTotalActivityService {
	public List<TotalActivityContentDTO> getTotalList();
	public int addTotalActivityContent(TotalActivityContentDTO totalActivityContentDTO);
    public int updateTotalActivity(TotalActivityContentDTO totalActivityContentDTO);
    public int deleteTotalActivity(int Id);
}