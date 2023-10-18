package com.javajo.sunshineRoad.model.service.impl.common.service;

import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.IService.common.utils.StoreRequestImagesUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StoreRequestImagesServiceImpl implements StoreRequestImagesService {
    private final StoreRequestImagesUtils storeRequestImagesUtils;

    @Value("#{utilProperties['image.root.path']}")
    private String rootPath;

    @Override
    public void storeRequestImages(String requestPostType, ImageInfoUploadMarker uploader, List<MultipartFile> imgFiles) throws IOException {
        int postId = uploader.getPostCurrentIdNo();
        int imgId = uploader.getImgCurrentIdNo();

        String imgSrc = StoreRequestImagesUtils.getNewDirPathAsPerPostType(requestPostType, postId);
        StoreRequestImagesUtils.makeNewDir(rootPath, imgSrc);

        List<String> imgNames = new ArrayList<String>(5);
        for (int i = 0; i < imgFiles.size(); i++) {
            String imgOriginName = imgFiles.get(i).getOriginalFilename();
            String imgExtension = (imgOriginName != null) ? imgOriginName.substring(imgOriginName.lastIndexOf(".")) : null;

            imgNames.add(StoreRequestImagesUtils.getNewFileNameAsPerPostType(requestPostType, postId, (i + 1), imgExtension));
        }
        List<String> imgFullPaths = StoreRequestImagesUtils.getFullPathsList(imgSrc, imgNames.toArray(imgNames.toArray(new String[0])));

        storeRequestImagesUtils.saveImageFiles(imgFiles, imgFullPaths, rootPath);
        storeRequestImagesUtils.saveImageFKAndThumbnail(uploader, imgId, postId);
        storeRequestImagesUtils.saveImagePaths(uploader, imgId, imgFullPaths);
    }
}