package com.javajo.sunshineRoad.model.service.IService.totalActivity;

public interface GetTotalActivityCountService {
	public int getTotalActivityCount();
    public int getTotalActivityCountByTheme(int tId);
    public int getTotalActivityCountByRegion(int sId);
 }
