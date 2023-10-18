package com.javajo.sunshineRoad.controller.common;

import com.javajo.sunshineRoad.model.service.IService.common.siteAccess.RecordVisitationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/site/access")
@RequiredArgsConstructor
public class SiteAccessController {
    private final RecordVisitationService recordVisitationService;

    @GetMapping("/visitor/record")
    public void recordVisitation() {
        recordVisitationService.recordVisitation();
    }
}