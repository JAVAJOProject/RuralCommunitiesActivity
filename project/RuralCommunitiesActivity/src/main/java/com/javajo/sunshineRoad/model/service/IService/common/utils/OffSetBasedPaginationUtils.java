package com.javajo.sunshineRoad.model.service.IService.common.utils;

public interface OffSetBasedPaginationUtils {
    public int findStartPostNo(int totalCount, int perPagePostCount, int requestPageNo);
    public int findEndPostNo(int totalCount, int perPagePostCount, int requestPageNo);
    public int findFinalEndPageNo(int totalCount, int perPagePostCount);
    public int findFinalEndPagePostNo(int totalCount, int perPagePostCount);
}