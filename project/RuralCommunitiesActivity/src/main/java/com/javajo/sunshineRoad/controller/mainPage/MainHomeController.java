package com.javajo.sunshineRoad.controller.mainPage;

import com.javajo.sunshineRoad.model.dto.mainPage.*;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.mainPage.*;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
public class MainHomeController {
    private final GetRecommendationActivityService getRecommendationActivityService;
    private final GetOneRecommendationActivityService getOneRecommendationActivityService;
    private final GetOneImgFromPathService getOneImgFromPathService;
    private final GetTotalActivityService getTotalActivityService;
    private final GetOneTotalActivityService getOneTotalActivityService;
    private final GetRecommendationTownService getRecommendationTownService;
    private final GetOneRecommendationTownService getOneRecommendationTownService;
    private final GetEventService getEventService;
    private final GetOneEventService getOneEventService;
    private final GetNoticeService getNoticeService;

    @GetMapping("/recommendation-activity-text")
    public ResponseEntity<List<MainPageRecommendationActivityInfoDTO>> getMainRecActivityData() {
        List<MainPageRecommendationActivityInfoDTO> resultTexts = getRecommendationActivityService.getMainRecActivityData();

        return ResponseEntity.ok(resultTexts);
    }

//    @GetMapping("/recommendation-activity-image/{id}")
//    public ResponseEntity<byte[]> getRecommendationActivityData(@PathVariable int id) {
//        MainPageRecommendationActivityInfoDTO recommendationActivityInfoDTO = getOneRecommendationActivityService.getOneRecommendationActivityData(id);
//
//        return getOneImgFromPathService.getOneImgFromPath(recommendationActivityInfoDTO.getRecAThumbnailImg());
//    }
    @GetMapping("/recommendation-activity-image/{id}")
    public ResponseEntity<UrlResource> getRecommendationActivityData(@PathVariable int id) {
        MainPageRecommendationActivityInfoDTO recommendationActivityInfoDTO = getOneRecommendationActivityService.getOneRecommendationActivityData(id);
        try {
            return getOneImgFromPathService.getOneImgResourceFromPath(recommendationActivityInfoDTO.getRecAThumbnailImg());
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/total-activity-text")
    public ResponseEntity<List<MainPageTotalActivityInfoDTO>> getMainTotalActivityData() {
        List<MainPageTotalActivityInfoDTO> resultTexts = getTotalActivityService.getMainTotalActivityData();

        return ResponseEntity.ok(resultTexts);
    }

    @GetMapping("/total-activity-image/{id}")
    public ResponseEntity<UrlResource> getTotalActivityData(@PathVariable int id) {
        MainPageTotalActivityInfoDTO totalActivityInfoDTO = getOneTotalActivityService.getOneTotalActivityData(id);
        try {
            return getOneImgFromPathService.getOneImgResourceFromPath(totalActivityInfoDTO.getAThumbnailImg());
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/recommendation-town-text")
    public ResponseEntity<List<MainPageRecommendationTownInfoDTO>> getMainRecTownData() {
        List<MainPageRecommendationTownInfoDTO> resultTexts = getRecommendationTownService.getMainRecTownData();

        return ResponseEntity.ok(resultTexts);
    }

    @GetMapping("/recommendation-town-image/{id}")
    public ResponseEntity<UrlResource> getRecommendationTownData(@PathVariable int id) {
        MainPageRecommendationTownInfoDTO recommendationTownInfoDTO = getOneRecommendationTownService.getOneRecommendationTownData(id);
        try {
            return getOneImgFromPathService.getOneImgResourceFromPath(recommendationTownInfoDTO.getRecTThumbnailImg());
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/event-info")
    public ResponseEntity<List<MainPageEventInfoDTO>> getMainPageEventInfoData() {
        List<MainPageEventInfoDTO> resultTexts = getEventService.getMainPageEventData();

        return ResponseEntity.ok(resultTexts);
    }

    @GetMapping("/event-image/{id}")
    public ResponseEntity<UrlResource> getMainPageEventData(@PathVariable int id) {
        MainPageEventInfoDTO eventInfoDTO = getOneEventService.getOneEventData(id);
        try {
            return getOneImgFromPathService.getOneImgResourceFromPath(eventInfoDTO.getEventThumbnailImg());
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/notice-info")
    public ResponseEntity<List<MainPageNoticeInfoDTO>> getMainPageNoticeInfoData() {
        List<MainPageNoticeInfoDTO> resultTexts = getNoticeService.getMainPageNoticeData();

        return ResponseEntity.ok(resultTexts);
    }
}