package com.javajo.sunshineRoad.model.service.impl.common.utils;

import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.IService.common.utils.StoreRequestImagesUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StoreRequestImagesUtilsImpl implements StoreRequestImagesUtils {
    @Override
    public void saveImageFiles(List<MultipartFile> imgFiles, List<String> fullPathsList, String rootPath) throws IOException {
        for (int i = 0; i < imgFiles.size(); i++) {
            MultipartFile requestFile = imgFiles.get(i);

            File storedFile = new File(rootPath + fullPathsList.get(i));
            requestFile.transferTo(storedFile);
        };
    }

    @Override
    public void saveImageFKAndThumbnail(ImageInfoUploadMarker imageInfoUploadMarker, int imgId, int postId) {
        imageInfoUploadMarker.requestUpdateFK(imgId, postId);
    }

    @Override
    public void saveImagePaths(ImageInfoUploadMarker imageInfoUploader, int imgId, List<String> imgFullPaths) {
        imageInfoUploader.requestInsertToDB(imgId, imgFullPaths);
    }
}