package com.javajo.sunshineRoad.controller.totalActivity;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.javajo.sunshineRoad.model.dto.common.ResponseDTO;
import com.javajo.sunshineRoad.model.dto.totalActivity.TotalActivityContentDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.RegTotalActivityService;

@RestController
@RequestMapping("/regActivity")
public class RegActivityController {
    private final RegTotalActivityService regTotalActivityService;
    private final ImageInfoUploadMarker totalActivityImageInfoUploadMarker;
    private final StoreRequestImagesService storeRequestImagesService;

    @Autowired
	public RegActivityController(RegTotalActivityService regTotalActivityService,
			@Qualifier("RegTotalActivityImageInfoUploader") ImageInfoUploadMarker totalActivityImageInfoUploadMarker,
			StoreRequestImagesService storeRequestImagesService) {
		this.regTotalActivityService = regTotalActivityService;
		this.totalActivityImageInfoUploadMarker = totalActivityImageInfoUploadMarker;
		this.storeRequestImagesService = storeRequestImagesService;
	}
    
    @GetMapping("/listContents")
    public ResponseEntity<List<TotalActivityContentDTO>> totalActivityList() {
        List<TotalActivityContentDTO> contentList = regTotalActivityService.getTotalList();
        if (!contentList.isEmpty()) {
            return ResponseEntity.ok(contentList);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @Transactional
    @PostMapping(value = "/add",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
    public ResponseEntity<ResponseDTO> regTotalActivity(
            @RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
            @RequestPart(value = "data") TotalActivityContentDTO totalActivityContentDTO
    ) {
        if (imgFiles.size() > 5) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("이미지는 5개까지 업로드 가능").build();
            return ResponseEntity.badRequest().body(response);
        }

        try {
        	regTotalActivityService.addTotalActivityContent(totalActivityContentDTO);//사진 이외

        if (!imgFiles.isEmpty()) {
            String requestPostType = "totalActivity";
            storeRequestImagesService.storeRequestImages(requestPostType, totalActivityImageInfoUploadMarker, imgFiles);
        }

//            return ResponseEntity.created(URI.create("내역조회할수있는URI api")).body("등록 완료");
            ResponseDTO response = ResponseDTO.builder().resultMsg("이미지 등록 완료!").build();
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            ResponseDTO response = ResponseDTO.builder().errorMsg("이미지 등록 실패!").build();
            return ResponseEntity.unprocessableEntity().body(response);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateTotalActivity(@RequestBody TotalActivityContentDTO totalActivityContentDTO) {
        int success = regTotalActivityService.updateTotalActivity(totalActivityContentDTO);
        if (success >= 1) {
            return ResponseEntity.ok("Post edit successful");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed edit request");
        }
    }

    @DeleteMapping("/delete/{imgId}")
    public ResponseEntity<String> deleteActivity(@PathVariable int imgId) {
        try {
            int success = regTotalActivityService.deleteTotalActivity(imgId);
            if (success > 0) {
                return ResponseEntity.ok("Delete successful");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed delete request");
            }
        } catch (Exception e) {  
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed delete request " + e.getMessage());
        }
    }
}
