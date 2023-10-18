package com.javajo.sunshineRoad.controller.common;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.common.ResponseDTO;
import com.javajo.sunshineRoad.model.dto.common.report.PostReportDTO;
import com.javajo.sunshineRoad.model.service.IService.common.postReport.CheckIsReportedService;
import com.javajo.sunshineRoad.model.service.IService.common.postReport.GetCurrentReportedCountService;
import com.javajo.sunshineRoad.model.service.IService.common.postReport.PostReportPostService;
import com.javajo.sunshineRoad.model.service.IService.common.postReport.UpdateReportedCountService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/report/post")
public class PostReportController {
    private final CheckIsReportedService checkIsReportedService;
    private final PostReportPostService postReportPostService;
    private final GetCurrentReportedCountService getCurrentReportedCountService;
    private final UpdateReportedCountService updateReportedCountService;
    // 로그인 한 사람만 신고가 가능하도록 만들기

    @GetMapping("/community/member")
    public ResponseEntity<ResponseDTO> reportPost(@RequestParam int boardId) {
        boolean isReported = checkIsReportedService.checkIsReported(boardId);

        // 로그인 아닐 시
//        ResponseDTO response = ResponseDTO.builder().errorMsg("신고 권한 없음").build();
//        return ResponseEntity.badRequest().body(response);

        if (!isReported) {
            postReportPostService.postReportPost(boardId);

            ResponseDTO response = ResponseDTO.builder().resultMsg("신고 완료").build();
            return ResponseEntity.ok(response);
        } else {
            int currentCount = getCurrentReportedCountService.getCurrentReportedCount(boardId);

            PostReportDTO postReport = PostReportDTO.builder().boardId(boardId).reportCnt(currentCount + 1).build();
            updateReportedCountService.updateReportedCount(postReport);

            ResponseDTO response = ResponseDTO.builder().resultMsg("신고 완료").build();
            return ResponseEntity.ok(response);
        }
    }
}