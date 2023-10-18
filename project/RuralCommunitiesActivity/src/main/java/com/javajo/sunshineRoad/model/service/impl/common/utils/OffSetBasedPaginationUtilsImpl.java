package com.javajo.sunshineRoad.model.service.impl.common.utils;

import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.service.IService.common.utils.OffSetBasedPaginationUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OffSetBasedPaginationUtilsImpl implements OffSetBasedPaginationUtils {
    private final int pageBundleNo = 5;

    @Override
    public int findStartPostNo(int totalCount, int perPagePostCount, int requestPageNo) {
        return ((requestPageNo - 1) * perPagePostCount) + 1;
    }

    @Override
    public int findEndPostNo(int totalCount, int perPagePostCount, int requestPageNo) {
        int startPostNo = findStartPostNo(totalCount, perPagePostCount, requestPageNo);

        if (requestPageNo < findFinalEndPageNo(totalCount, perPagePostCount)) {
            return (startPostNo + perPagePostCount) - 1;
        }

        return startPostNo + findFinalEndPagePostNo(totalCount, perPagePostCount);
    }

    @Override
    public int findFinalEndPageNo(int totalCount, int perPagePostCount) {
        return (totalCount % perPagePostCount) == 0 ? (totalCount / perPagePostCount) : ((totalCount / perPagePostCount) + 1);
    }

    @Override
    public int findFinalEndPagePostNo(int totalCount, int perPagePostCount) {
        return (totalCount % perPagePostCount) == 0 ? perPagePostCount : (totalCount % perPagePostCount);
    }
}
