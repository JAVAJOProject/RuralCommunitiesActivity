package com.javajo.sunshineRoad.controller.totalActivity;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javajo.sunshineRoad.model.dto.totalActivity.ActSummaryListDTO;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetRequestPageTotalActivityListService;
import com.javajo.sunshineRoad.model.service.IService.totalActivity.GetTotalActivityCountService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/totalActivity")
@RequiredArgsConstructor
public class TotalActivityListController {
	private final GetTotalActivityCountService getTotalActivityCountService;
	private final GetRequestPageTotalActivityListService getRequestPageTotalActivityListService;

	@GetMapping("/totalCount")
	public int getTotalActivityCount() {
		return getTotalActivityCountService.getTotalActivityCount();
	}

	@GetMapping("/countByTheme/{tId}")
	public int getTotalActivityCountByTheme(@PathVariable int tId) {
		return getTotalActivityCountService.getTotalActivityCountByTheme(tId);
	}

	@GetMapping("/countByRegion/{sId}")
	public int getTotalActivityCountByRegion(@PathVariable int sId) {
		return getTotalActivityCountService.getTotalActivityCountByRegion(sId);
	}

	@GetMapping("/byTotalList/{boardType}/{requestPageNo}")
	public ResponseEntity<List<ActSummaryListDTO>> totalActivityByThemeList(@PathVariable int requestPageNo,
			@PathVariable String boardType) {
		if (!boardType.equals("card") && !boardType.equals("list")) {
			return ResponseEntity.badRequest().build();
		}
		int perPagePostCount = 6;

		List<ActSummaryListDTO> activityList = null;
		int totalCount = getTotalActivityCountService.getTotalActivityCount();
		activityList = getRequestPageTotalActivityListService.getAllSummaryList(totalCount, perPagePostCount,
				requestPageNo);

		return ResponseEntity.ok(activityList);
	}

	@GetMapping("/byThemeList/{boardType}/{tId}/{requestPageNo}")
	public ResponseEntity<List<ActSummaryListDTO>> totalActivityByThemeList(@PathVariable int tId,
			@PathVariable int requestPageNo, @PathVariable String boardType) {
		if (!boardType.equals("card") && !boardType.equals("list")) {
			return ResponseEntity.badRequest().build();
		}
		int perPagePostCount = 4;

		List<ActSummaryListDTO> byThemeList = null;
		int byThemeCount = getTotalActivityCountService.getTotalActivityCountByTheme(tId);
		byThemeList = getRequestPageTotalActivityListService.getByThemeList(tId, byThemeCount, perPagePostCount,
				requestPageNo);

		return ResponseEntity.ok(byThemeList);
	}

	@GetMapping("/byRegionList/{boardType}/{sId}/{requestPageNo}")
	public ResponseEntity<List<ActSummaryListDTO>> totalActivityByRegionList(@PathVariable int sId,
			@PathVariable int requestPageNo, @PathVariable String boardType) {
		if (!boardType.equals("card") && !boardType.equals("list")) {
			return ResponseEntity.badRequest().build();
		}
		int perPagePostCount = 4;

		List<ActSummaryListDTO> byRegionList = null;

		int byRegionCount = getTotalActivityCountService.getTotalActivityCountByRegion(sId);
		byRegionList = getRequestPageTotalActivityListService.getByRegionList(sId, byRegionCount, perPagePostCount,
				requestPageNo);

		return ResponseEntity.ok(byRegionList);
	}
}
