package com.javajo.sunshineRoad.model.service.IService.common.utils;

import java.util.List;

public interface ImageInfoUploadMarker {
    public int getPostCurrentIdNo();
    public int getImgCurrentIdNo();
    public void requestInsertToDB(int imgId, List<String> pathList);
    public void requestUpdateFK(int imgId, int postId);
}