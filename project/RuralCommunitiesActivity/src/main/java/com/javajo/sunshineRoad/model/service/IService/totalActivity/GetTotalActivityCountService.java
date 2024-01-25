package com.javajo.sunshineRoad.model.service.IService.totalActivity;

public interface GetTotalActivityCountService {
	public int getTotalActivityCount();
    public int getTotalActivityCountByTheme(int tId);
    public int getTotalActivityCountByRegionOfSido(int sidoId);
    public int getTotalActivityCountByRegion(long sId);
    
 }