package com.javajo.sunshineRoad.controller.recommendation;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityInfoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecActivityKeywordDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecImagesDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownImagesDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RecTownInfoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.RegionSidoDTO;
import com.javajo.sunshineRoad.model.dto.recommendation.TownReportDTO;
import com.javajo.sunshineRoad.model.service.IService.common.service.ImgPathToBase64Service;
import com.javajo.sunshineRoad.model.service.IService.common.service.StoreRequestImagesService;
import com.javajo.sunshineRoad.model.service.IService.common.utils.ImageInfoUploadMarker;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetOneRecActivityInfoService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetOneRecTownInfoService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecActivityInfoService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecActivityKeywordService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecImagesByImgIdService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecKeywordCntService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecSigunguCntService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecTownImagesByImgIdService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRecTownInfoService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetRegionSidoService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetSigunguActivityService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.GetSigunguFilterService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.InsertTownReportService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.PostRequestRecActivityService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.PostRequestRecKeywordService;
import com.javajo.sunshineRoad.model.service.IService.recommendation.PostRequestRecTownService;

@RestController
@RequestMapping("/recommendation")
public class RecommendationController {
	private final GetRecActivityInfoService getRecActivityInfoService;
	private final GetRecTownInfoService getRecTownInfoService;
	private final GetRecActivityKeywordService getRecActivityKeywordService;
	private final GetRegionSidoService getRegionSidoService;
	private final GetSigunguFilterService getSigunguFilterService;
	private final GetOneRecActivityInfoService getOneRecActivityInfoService;
	private final GetOneRecTownInfoService getOneRecTownInfoService;
	private final PostRequestRecActivityService postRequestRecActivityService;
	private final PostRequestRecTownService postRequestRecTownService;
	private final GetSigunguActivityService getSigunguActivityService;
	private final InsertTownReportService insertTownReportService;
	private final GetRecImagesByImgIdService getRecImagesByImgIdService;
	private final GetRecTownImagesByImgIdService getRecTownImagesByImgIdService;
	private final GetRecKeywordCntService getRecKeywordCntService;
	private final PostRequestRecKeywordService postRequestRecKeywordService;
	private final GetRecSigunguCntService getRecSigunguCntService;
	
	private final StoreRequestImagesService storeRequestImagesService;
	private final ImageInfoUploadMarker recTownReportImageInfoUploadMarker;
	private final ImgPathToBase64Service imgPathToBase64Service;
	
	
	public RecommendationController(GetRecActivityInfoService getRecActivityInfoService,
			GetRecTownInfoService getRecTownInfoService, GetRecActivityKeywordService getRecActivityKeywordService,
			GetRegionSidoService getRegionSidoService, PostRequestRecKeywordService postRequestRecKeywordService,
			GetSigunguFilterService getSigunguFilterService, GetOneRecActivityInfoService getOneRecActivityInfoService,
			GetOneRecTownInfoService getOneRecTownInfoService,
			PostRequestRecActivityService postRequestRecActivityService,
			PostRequestRecTownService postRequestRecTownService, GetSigunguActivityService getSigunguActivityService,
			InsertTownReportService insertTownReportService, StoreRequestImagesService storeRequestImagesService,
			@Qualifier("RecTownReportImageInfoUploader") ImageInfoUploadMarker recTownReportImageInfoUploadMarker,
			ImgPathToBase64Service imgPathToBase64Service, GetRecImagesByImgIdService getRecImagesByImgIdService,
			GetRecTownImagesByImgIdService getRecTownImagesByImgIdService, GetRecKeywordCntService getRecKeywordCntService,
			GetRecSigunguCntService getRecSigunguCntService) {
		super();
		this.getRecActivityInfoService = getRecActivityInfoService;
		this.getRecTownInfoService = getRecTownInfoService;
		this.getRecActivityKeywordService = getRecActivityKeywordService;
		this.getRegionSidoService = getRegionSidoService;
		this.getSigunguFilterService = getSigunguFilterService;
		this.getOneRecActivityInfoService = getOneRecActivityInfoService;
		this.getOneRecTownInfoService = getOneRecTownInfoService;
		this.postRequestRecActivityService = postRequestRecActivityService;
		this.postRequestRecTownService = postRequestRecTownService;
		this.getSigunguActivityService = getSigunguActivityService;
		this.insertTownReportService = insertTownReportService;
		this.storeRequestImagesService = storeRequestImagesService;
		this.recTownReportImageInfoUploadMarker = recTownReportImageInfoUploadMarker;
		this.imgPathToBase64Service = imgPathToBase64Service;
		this.getRecImagesByImgIdService = getRecImagesByImgIdService;
		this.getRecTownImagesByImgIdService = getRecTownImagesByImgIdService;
		this.getRecKeywordCntService = getRecKeywordCntService;
		this.postRequestRecKeywordService = postRequestRecKeywordService;
		this.getRecSigunguCntService = getRecSigunguCntService;
	}
	
	
	//activity/list?pageNo=3 (@RequestParams int pageNo)
	//activity-list/3 (@PathVariable int requestPage)
	//PostMapping Json 받아오기 ->(@RequestBody DTO recTown)
	//전체 추천 체험/recommendation/activity-list/1?requestOrderType=최신순
	@GetMapping("/activity-list/{requestPageNo}")
	public ResponseEntity<List<RecActivityInfoDTO>> getAllRecActivityList(@RequestParam String requestOrderType, @PathVariable int requestPageNo) {
		
		int perPagePostCount = 3;
		int totalCount = getRecActivityInfoService.getAllRecActivityList();
		List<RecActivityInfoDTO> responseData = postRequestRecActivityService.postRequesRecActivity(requestOrderType, totalCount, perPagePostCount, requestPageNo);

		return ResponseEntity.ok(responseData);
	}
	@GetMapping("/total-count")
	public List<Integer> totalCount() {
		int perPagePostCount = 3;
		int totalCount = getRecActivityInfoService.getAllRecActivityList();
		return new ArrayList<Integer>(Arrays.asList(perPagePostCount, totalCount));
	}

	//추천 체험 자세히보기
	@GetMapping("/activity-list-one/{recAPostId}")
	public List<RecActivityInfoDTO> getOneRecActivityInfo(@PathVariable int recAPostId) {
		return getOneRecActivityInfoService.getOneRecActivityInfo(recAPostId);
	}
	//전체 마을
	@GetMapping("/town-list/{requestPageNo}")
	public ResponseEntity<List<RecTownInfoDTO>> getAllRectownList(@RequestParam String requestOrderType, @PathVariable int requestPageNo) {
		
		int perPagePostCount = 4;
		int totalCount = getRecTownInfoService.getAllRecTownList();
		List<RecTownInfoDTO> responseData = postRequestRecTownService.postRequesRecTown(requestOrderType, totalCount, perPagePostCount, requestPageNo);

		return ResponseEntity.ok(responseData);
	}
	//마을 자세히 보기
	@GetMapping("/town-list-one/{recTId}")
	public List<RecTownInfoDTO> getOneRecTownInfo(@PathVariable int recTId){
		return getOneRecTownInfoService.getOneRecTownInfo(recTId);
	}
	//키워드별로 체험 보기
	@GetMapping("/activity-keyword/{recAKeywordId}/{requestPageNo}")
	public ResponseEntity<List<RecActivityInfoDTO>> keywordFilter(@RequestParam String requestOrderType, @PathVariable int recAKeywordId, @PathVariable int requestPageNo) {
		
		int perPagePostCount = 3;
		int totalCount = getRecKeywordCntService.getRecKeywordCnt(recAKeywordId);
		List<RecActivityInfoDTO> responseData = postRequestRecKeywordService.postRequestRecKeyword(recAKeywordId, requestOrderType, totalCount, perPagePostCount, requestPageNo);
		
		return ResponseEntity.ok(responseData);
	}
	//전체 키워드
	@GetMapping("/activity-keyword")
	public List<RecActivityKeywordDTO> gettAllRecActivityKeyword() {
		return getRecActivityKeywordService.getAllRecActivityKeyword();
	}
	//전체 시도
	@GetMapping("/sido")
	public List<RegionSidoDTO> getRegionSidoList() {
		return getRegionSidoService.getRegionSidoList(); 
	}
	//시군구 필터
	@GetMapping("/sido-sigungu/{sidoId}")
	public List<RegionSidoDTO> sigunguFilter(@PathVariable int sidoId) {
		return getSigunguFilterService.sigunguFilter(sidoId);
	}
	//시군구별 추천체험
	@GetMapping("/activity-sigungu/{sigunguId}/{requestPageNo}")
	public ResponseEntity<List<RecActivityInfoDTO>> sigunguActivityList(@PathVariable int sigunguId, @RequestParam String requestOrderType, @PathVariable int requestPageNo){
		
		int perPagePostCount = 3;
		int totalCount = getRecSigunguCntService.getRecSigunguCnt(sigunguId);
		List<RecActivityInfoDTO> responseData = getSigunguActivityService.sigunguActivityList(sigunguId, requestOrderType, totalCount, perPagePostCount, requestPageNo);
		
		return ResponseEntity.ok(responseData);
	}
	
	//마을 제보하기
	@Transactional
    @PostMapping(value = "/registration",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {"application/json; charset=utf-8"})
	public void insertTownReport(
            @RequestPart(value = "files", required = false) List<MultipartFile> imgFiles,
            @RequestPart(value = "data") TownReportDTO town) {
		try {
				insertTownReportService.insertTownReport(town);		
				
				String requestPostType = "recTownReport";
				storeRequestImagesService.storeRequestImages(requestPostType, recTownReportImageInfoUploadMarker, imgFiles);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	//추천 체험 이미지
	@GetMapping("/activity-image/{imageId}")
    public ResponseEntity<List<String>> getRecImage(@PathVariable int imageId) {
        RecImagesDTO recImages = getRecImagesByImgIdService.getRecImagesByImgIdService(imageId);
        List<String> convertedImages = new ArrayList<String>();
        try {
            if (recImages.getRecAImg1() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(recImages.getRecAImg1()));
            }
            if (recImages.getRecAImg2() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(recImages.getRecAImg2()));
            }
            if (recImages.getRecAImg3() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(recImages.getRecAImg3()));
            }
            if (recImages.getRecAImg4() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(recImages.getRecAImg4()));
            }
            if (recImages.getRecAImg5() != null) {
                convertedImages.add(imgPathToBase64Service.convertBase64(recImages.getRecAImg5()));
            }
            return ResponseEntity.ok(convertedImages);
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }

    }
	
	//추천 마을 이미지
		@GetMapping("/town-image/{imageId}")
	    public ResponseEntity<List<String>> getRecTownImage(@PathVariable int imageId) {
	        RecTownImagesDTO recTownImages = getRecTownImagesByImgIdService.getRecTownImagesByImgIdService(imageId);
	        List<String> convertedImages = new ArrayList<String>();
	        try {
	            if (recTownImages.getRecTownImg1() != null) {
	                convertedImages.add(imgPathToBase64Service.convertBase64(recTownImages.getRecTownImg1()));
	            }
	            if (recTownImages.getRecTownImg2() != null) {
	                convertedImages.add(imgPathToBase64Service.convertBase64(recTownImages.getRecTownImg2()));
	            }
	            if (recTownImages.getRecTownImg3() != null) {
	                convertedImages.add(imgPathToBase64Service.convertBase64(recTownImages.getRecTownImg3()));
	            }
	            if (recTownImages.getRecTownImg4() != null) {
	                convertedImages.add(imgPathToBase64Service.convertBase64(recTownImages.getRecTownImg4()));
	            }
	            if (recTownImages.getRecTownImg5() != null) {
	                convertedImages.add(imgPathToBase64Service.convertBase64(recTownImages.getRecTownImg5()));
	            }
	            return ResponseEntity.ok(convertedImages);
	        } catch (IOException e) {
	            return ResponseEntity.badRequest().build();
	        }

	    }
}
