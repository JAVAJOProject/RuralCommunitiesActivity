package com.javajo.sunshineRoad.controller.common;

import com.javajo.sunshineRoad.model.dto.common.view.ViewCountDTO;
import com.javajo.sunshineRoad.model.service.IService.common.viewCount.GetCurrentViewCountService;
import com.javajo.sunshineRoad.model.service.IService.common.viewCount.UpdateViewCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/view")
@RequiredArgsConstructor
public class ViewCountController {
    private final GetCurrentViewCountService getCurrentViewCountService;
    private final UpdateViewCountService updateViewCountService;

    @GetMapping("/update")
    public void updateViewCount(@RequestParam int postId, @RequestParam int postTypeId) {
        ViewCountDTO viewCount = ViewCountDTO.builder().postId(postId).build();
        viewCount.setPostTypeId(postTypeId);

        int currentViewCount = getCurrentViewCountService.getCurrentViewCount(viewCount);
        updateViewCountService.updateViewCount(currentViewCount, viewCount);
    }
}