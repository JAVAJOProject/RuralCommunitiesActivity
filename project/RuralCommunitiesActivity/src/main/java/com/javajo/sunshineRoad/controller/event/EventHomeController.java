package com.javajo.sunshineRoad.controller.event;

import com.javajo.sunshineRoad.model.dao.event.UpdateEventStoryContentService;
import com.javajo.sunshineRoad.model.dto.common.ResponseDTO;
import com.javajo.sunshineRoad.model.dto.event.EventDTO;
import com.javajo.sunshineRoad.model.dto.event.EventImagesDTO;
import com.javajo.sunshineRoad.model.dto.event.EventStoryDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.ImgPathToBase64Service;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.IService.event.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/event")
public class EventHomeController {
    private final GetTotalActiveEventCountService getTotalActiveEventCountService;
    private final GetRequestPageEventListService getRequestPageEventListService;
    private final GetRecruitingActiveEventOnlyCountService getRecruitingActiveEventOnlyCountService;
    private final GetRequestPageRecruitingEventListOnlyService getRequestPageRecruitingEventListOnlyService;
    private final PostRequestEventPostService requestEventPostService;

    private final ImageInfoUploadMarker eventImageInfoUploadMarker;
    private final StoreRequestImagesService storeRequestImagesService;
    private final GetEventRecruitTypeIdService getEventRecruitTypeIdService;
    private final PostRequestEventStoryService postRequestEventStoryService;
    private final GetEventDetailFromEventIdService getEventDetailFromEventIdService;
    private final GetEventImagesByImgIdService getEventImagesByImgIdService;
    private final ImgPathToBase64Service imgPathToBase64Service;
    private final GetEventStoryContentService getEventStoryContentService;
    private final UpdateEventStoryContentService updateEventStoryContentService;

    public EventHomeController(GetTotalActiveEventCountService getTotalActiveEventCountService, GetRequestPageEventListService getRequestPageEventListService, GetRecruitingActiveEventOnlyCountService getRecruitingActiveEventOnlyCountService, GetRequestPageRecruitingEventListOnlyService getRequestPageRecruitingEventListOnlyService, PostRequestEventPostService requestEventPostService, @Qualifier("EventImageInfoUploader") ImageInfoUploadMarker eventImageInfoUploadMarker, StoreRequestImagesService storeRequestImagesService, GetEventRecruitTypeIdService getEventRecruitTypeIdService, PostRequestEventStoryService postRequestEventStoryService, GetEventDetailFromEventIdService getEventDetailFromEventIdService, GetEventImagesByImgIdService getEventImagesByImgIdService, ImgPathToBase64Service imgPathToBase64Service, GetEventStoryContentService getEventStoryContentService, UpdateEventStoryContentService updateEventStoryContentService) {
        this.getTotalActiveEventCountService = getTotalActiveEventCountService;
        this.getRequestPageEventListService = getRequestPageEventListService;
        this.getRecruitingActiveEventOnlyCountService = getRecruitingActiveEventOnlyCountService;
        this.getRequestPageRecruitingEventListOnlyService = getRequestPageRecruitingEventListOnlyService;
        this.requestEventPostService = requestEventPostService;
        this.eventImageInfoUploadMarker = eventImageInfoUploadMarker;
        this.storeRequestImagesService = storeRequestImagesService;
        this.getEventRecruitTypeIdService = getEventRecruitTypeIdService;
        this.postRequestEventStoryService = postRequestEventStoryService;
        this.getEventDetailFromEventIdService = getEventDetailFromEventIdService;
        this.getEventImagesByImgIdService = getEventImagesByImgIdService;
        this.imgPathToBase64Service = imgPathToBase64Service;
        this.getEventStoryContentService = getEventStoryContentService;
        this.updateEventStoryContentService = updateEventStoryContentService;
    }

    @GetMapping("/total-count")
    public List<Integer> getTotalActiveEventCount(@RequestParam boolean isRecruiting) {
        int perPagePostCount = 6;
        int totalPostNo;
        if (isRecruiting) {
            totalPostNo = getRecruitingActiveEventOnlyCountService.getRecruitingActiveEventOnlyCount();
        } else {
            totalPostNo = getTotalActiveEventCountService.getTotalActiveEventCount();
        }
        return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalPostNo));
    }

    @GetMapping( "/event-list/{boardType}/{requestPageNo}")
    public ResponseEntity<List<EventDTO>> getRequestPageEventList(@PathVariable int requestPageNo, @PathVariable String boardType, @RequestParam boolean isRecruiting) {
        if (!boardType.equals("card") && !boardType.equals("list")) {
            return ResponseEntity.badRequest().build();
        }

        int perPagePostCount = 6;

        List<EventDTO> resultPosts = null;
        if (isRecruiting) {
            int totalCount = getRecruitingActiveEventOnlyCountService.getRecruitingActiveEventOnlyCount();
            resultPosts = getRequestPageRecruitingEventListOnlyService.getRequestPageRecruitingEventListOnly(totalCount, 			perPagePostCount, requestPageNo);
        } else {
            int totalCount = getTotalActiveEventCountService.getTotalActiveEventCount();
            resultPosts = getRequestPageEventListService.getRequestPageEventList(totalCount, perPagePostCount, requestPageNo);
        }

        return ResponseEntity.ok(resultPosts);
    }

    @GetMapping("/event-detail/{eventId}")
    public ResponseEntity<EventDTO> GetEventDetailFromEventId(@PathVariable int eventId) {
        EventDTO event = getEventDetailFromEventIdService.getEventDetailFromEventId(eventId);
        return ResponseEntity.ok(event);
    }

    @GetMapping("/event-image/{imageId}")
    public ResponseEntity<List<String>> getEventImage(@PathVariable int imageId) {
        EventImagesDTO eventImages = getEventImagesByImgIdService.getEventImagesByImgId(imageId);
        List<String> convertedImages = new ArrayList<String>();
        try {
            if (eventImages.getEventImg1() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(eventImages.getEventImg1()));
            }
            if (eventImages.getEventImg2() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(eventImages.getEventImg2()));
            }
            if (eventImages.getEventImg3() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(eventImages.getEventImg3()));
            }
            if (eventImages.getEventImg4() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(eventImages.getEventImg4()));
            }
            if (eventImages.getEventImg5() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(eventImages.getEventImg5()));
            }
            return ResponseEntity.ok(convertedImages);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }

    }

    // 필터링?

    // 테스트용 json
    // {"sId": 3,"sigunguId": 3,"eventRecruitTypeId": 1,"eventName": "이벤트 이름 테스트","eventContent": "어쩌구 저쩌구 내용","eventRecruitStartDate": "2023-10-01","eventRecruitEndDate": "2023-10-31","eventStartDate": "2023-11-01","eventEndDate": "2023-12-31","eventMaxPeople": 200,"eventAddr": "온라인"}
    @Transactional
    @PostMapping(value = "/registration",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
    public ResponseEntity<ResponseDTO> postEventRegistrationRequest(
            @RequestPart(value = "files") List<MultipartFile> imgFiles,
            @RequestPart(value = "data") EventDTO event
    ) {
        if (imgFiles.size() > 5) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("이미지는 5개까지 업로드 가능").build();
            return ResponseEntity.badRequest().body(response);
        }

        try {
            requestEventPostService.postRequestEventPost(event);

        if (!imgFiles.isEmpty()) {
            String requestPostType = "event";
            storeRequestImagesService.storeRequestImages(requestPostType, eventImageInfoUploadMarker, imgFiles);
        }

//            return ResponseEntity.created(URI.create("내역조회할수있는URI api")).body("등록 완료");
            ResponseDTO response = ResponseDTO.builder().resultMsg("succeeded").build();
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("failed").build();
            return ResponseEntity.unprocessableEntity().body(response);
        }
    }

    @Transactional
    @PostMapping(value = "/apply",
            produces = {"application/json; charset=utf-8"})
    public ResponseEntity<ResponseDTO> postEventReservationRequest(@RequestBody EventStoryDTO eventStory) {
        int eventRecruitType = getEventRecruitTypeIdService.getEventRecruitTypeId(eventStory.getEventId());

        String resultMsg;
        switch (eventRecruitType) {
            case 1: resultMsg = "신청 완료";
                eventStory.setEventProgressStatusId(1);
                break;
            case 2: resultMsg = "응모 완료";
                eventStory.setEventProgressStatusId(2);
                break;
            case 3: resultMsg = "신청 완료(검토중)";
                eventStory.setEventProgressStatusId(2);
                break;
            case 4: resultMsg = "사연 응모 완료";
                eventStory.setEventProgressStatusId(2);
                break;
            default:
                String errorMsg = "잘못된 요청";
                ResponseDTO response = ResponseDTO.builder().errorMsg(errorMsg).build();
                return ResponseEntity.badRequest().body(response);
        }

        postRequestEventStoryService.postRequestEventStory(eventStory);

        ResponseDTO response = ResponseDTO.builder().resultMsg(resultMsg).data(eventStory).build();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/apply/story")
    public ResponseEntity<EventStoryDTO> getStoryContent(@RequestParam int eventReportId) {
        EventStoryDTO eventStory = getEventStoryContentService.getEventStoryContent(eventReportId);
        return ResponseEntity.ok(eventStory);
    }
    @PatchMapping("/apply/story")
    public ResponseEntity<ResponseDTO> editStoryContent(EventStoryDTO eventStory) {
        try {
            updateEventStoryContentService.updateEventStoryContent(eventStory);
            ResponseDTO response = ResponseDTO.builder().resultMsg("수정 완료").build();
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("수정 실패").build();
            return ResponseEntity.ok(response);
        }
    }
}