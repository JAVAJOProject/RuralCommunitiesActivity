package com.javajo.sunshineRoad.controller.totalActivity;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetTotalActivityContentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/totalActivityContent")
@RequiredArgsConstructor
public class TotalActivityContentController {
    private final GetTotalActivityContentService getTotalActivityContentService;

    @GetMapping("/one/{aPostId}")
    public ResponseEntity<TotalActivityContentDTO> totalActivityContent(@PathVariable int aPostId) {
        TotalActivityContentDTO result = getTotalActivityContentService.getOneContent(aPostId);

        return ResponseEntity.ok(result);
    }

}