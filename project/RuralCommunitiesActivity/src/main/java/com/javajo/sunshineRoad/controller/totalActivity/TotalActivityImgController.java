package com.javajo.sunshineRoad.controller.totalActivity;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityImagesDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import com.javajo.sunshineRoad.model.service.IService.common.service.ImgPathToBase64Service;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetTotalActivityContentService;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetTotalActivityImagesService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/img")
@RequiredArgsConstructor
public class TotalActivityImgController {
	private final GetTotalActivityImagesService getTotalActivityImagesService;
	private final GetOneImgFromPathService getOneImgFromPathService;
	private final GetTotalActivityContentService getTotalActivityContentService;
	private final ImgPathToBase64Service imgPathToBase64Service;
	
    @GetMapping("/totalActivityImage/one/{aId}")
	public ResponseEntity<UrlResource> getTotalActivityData(@PathVariable int aId) {
		TotalActivityContentDTO totalActivityContentDTO = getTotalActivityContentService.getOneContent(aId);
		try {
			return getOneImgFromPathService.getOneImgResourceFromPath(totalActivityContentDTO.getAThumbnailImg());
		} catch (IOException e) {
			return ResponseEntity.badRequest().build();
		}
	}
    @GetMapping("/totalActivityImage/list/{aImgId}")
    public ResponseEntity<List<String>> getTotalActivityImage(@PathVariable int aImgId) {
    	TotalActivityImagesDTO totalActivityImages = getTotalActivityImagesService.getTotalActivityImages(aImgId);
        List<String> convertedImages = new ArrayList<String>();
        try {
            if (totalActivityImages.getAImg1() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(totalActivityImages.getAImg1()));
            }
            if (totalActivityImages.getAImg2() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(totalActivityImages.getAImg2()));
            }
            if (totalActivityImages.getAImg3() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(totalActivityImages.getAImg3()));
            }
            if (totalActivityImages.getAImg4() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(totalActivityImages.getAImg4()));
            }
            if (totalActivityImages.getAImg5() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(totalActivityImages.getAImg5()));
            }
            return ResponseEntity.ok(convertedImages);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }

    }
    
}
