package com.javajo.sunshineRoad.model.service.IService.common.service;

import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface StoreRequestImagesService {
    public void storeRequestImages(String requestPostType, ImageInfoUploadMarker uploader, List<MultipartFile> imgFiles) throws IOException;
}