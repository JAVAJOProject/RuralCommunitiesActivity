package com.javajo.sunshineRoad.model.service.impl.totalActivity;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dao.totalActivity.RegTotalActivityContentDAO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityImagesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;

import lombok.RequiredArgsConstructor;

@Service
@Qualifier("RegTotalActivityImageInfoUploader")
@RequiredArgsConstructor
public class RegTotalActivityImageInfoUploaderMarkerImpl implements ImageInfoUploadMarker {
    private final RegTotalActivityContentDAO regTotalActivityContentDAO;

    @Override
    public int getPostCurrentIdNo() {
        return regTotalActivityContentDAO.getTotalActivityCurrentId();
    }

    @Override
    public int getImgCurrentIdNo() {
        return regTotalActivityContentDAO.getTotalActivityImgCurrentId();
    }

    @Override
    public void requestInsertToDB(int imgId, List<String> pathList) {
    	TotalActivityImagesDTO totalActivityImages = TotalActivityImagesDTO.builder()
                .aImgId(imgId)
                .aImg1(pathList.get(0))
                .aImg2(pathList.get(1))
                .aImg3(pathList.get(2))
                .aImg4(pathList.get(3))
                .aImg5(pathList.get(4))
                .build();
        regTotalActivityContentDAO.insertTotalActivityImagesValues(totalActivityImages);
    }

    @Override
    public void requestUpdateFK(int imgId, int postId) {
    	TotalActivityContentDTO regTotalActivity = TotalActivityContentDTO.builder()
                .aImgId(imgId + 1)
                .aId(postId)
                .build();

        regTotalActivityContentDAO.updateTotalActivityImagesIdInfo(regTotalActivity);
    }
}
