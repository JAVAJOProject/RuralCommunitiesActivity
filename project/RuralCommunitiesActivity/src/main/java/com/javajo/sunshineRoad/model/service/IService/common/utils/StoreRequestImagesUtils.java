package com.javajo.sunshineRoad.model.service.IService.common.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public interface StoreRequestImagesUtils {
    public static String getNewDirPathAsPerPostType(String requestPostType, int postId) {
        String imgSrc;
        switch(requestPostType) {
            case "totalActivity": imgSrc = "total_activity_img/activity_" + postId + "/";
                break;
            case "recActivity": imgSrc = "recommendation_img/activity/activity_" + postId + "/";
                break;
            case "recTown": imgSrc = "recommendation_img/town/town_" + postId + "/";
                break;
            case "recTownReport": imgSrc = "recommendation_img/town_report/town_report_" + postId + "/";
                break;
            case "event": imgSrc = "event_img/event_" + postId + "/";
                break;
            case "notice": imgSrc = "notice_img/notice_" + postId + "/";
                break;
            default: throw new IllegalArgumentException("Illegal Post Type: " + requestPostType);
        }
        return imgSrc;
    }

    public static String getNewFileNameAsPerPostType(String requestPostType, int postId, int imgNo, String imgExtension) {
        String imgName;
        switch(requestPostType) {
            case "event": imgName = "event" + postId + "_img" + imgNo + imgExtension;
                break;
            case "totalActivity": imgName = "activity" + postId + "_img" + imgNo + imgExtension;;
                break;
            case "recActivity": imgName = "rec_a_img" + postId + "_" + imgNo + imgExtension;;
                break;
            case "recTown": imgName = "rec_town_img" + postId + "_" + imgNo + imgExtension;;
                break;
            case "recTownReport": imgName = "town_report" + postId + "_img" + imgNo + imgExtension;;
                break;
            case "notice": imgName = "notice_img_" + imgNo + imgExtension;;
                break;
            default: throw new IllegalArgumentException("잘못된 유형: " + requestPostType);
        }
        return imgName;
    }

    public static void makeNewDir(String rootPath, String imgSrc) throws IOException {
        Files.createDirectories(Paths.get(rootPath + imgSrc));
    }

    public static List<String> getFullPathsList(String imgSrc, String...imgNames) {
        List<String> imgFullPaths = new ArrayList<String>();
        imgFullPaths.add(imgSrc + imgNames[0]);
        imgFullPaths.add((imgNames.length >= 2) && (imgNames[1] != null) ? (imgSrc + imgNames[1]) : null);
        imgFullPaths.add((imgNames.length >= 3) && (imgNames[2] != null) ? (imgSrc + imgNames[2]) : null);
        imgFullPaths.add((imgNames.length >= 4) && (imgNames[3] != null) ? (imgSrc + imgNames[3]) : null);
        imgFullPaths.add((imgNames.length == 5) && (imgNames[4] != null) ? (imgSrc + imgNames[4]) : null);
        return imgFullPaths;
    }

    public void saveImageFiles(List<MultipartFile> imgFiles, List<String> fullPathsList, String rootPath) throws IOException;
    public void saveImageFKAndThumbnail(ImageInfoUploadMarker imageInfoUploadMarker, int imgId, int postId);
    public void saveImagePaths(ImageInfoUploadMarker imageInfoUploader, int imgId, List<String> imgFullPaths);
}