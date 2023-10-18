package com.javajo.sunshineRoad.controller.admin.board;

//@RestController
//@RequestMapping("/admin/board/statistics")
public class AdminStatisticsController {

//	private final AdminStatisticsService statisticsService;
//	
//
//	public AdminStatisticsController(AdminStatisticsService statisticsService) {
//		super();
//		this.statisticsService = statisticsService;
//	}
//	//통계
//	//조회
//	//접속자수 날짜별 시간별 누적
//	@Transactional
//	@GetMapping("/visitors")
//	public ResponseEntity<List<AActivityDTO>> visitorsStatistics(@PathVariable int requestPageNo) {
//		System.out.println("AdminBoardController");
//
//		List<AActivityDTO> result = new ArrayList<>();
//		try {
//			int perPagePostCount = 8;
//
//			result.addAll(statisticsService.visitorsStatistics());
//			return ResponseEntity.ok(result);
//				
//		} catch (Exception e) {
//			return ResponseEntity.badRequest().build();//400
//		}
//		
//	}
//	//예약건수 reservation
//	//날짜별 건수 월별
//	@Transactional
//	@GetMapping("/reservation")
//	public ResponseEntity<List<AActivityDTO>> reservationStatistics(@PathVariable int requestPageNo) {
//		System.out.println("AdminBoardController");
//
//		List<AActivityDTO> result = new ArrayList<>();
//		try {
//			int perPagePostCount = 8;
//
//			result.addAll(statisticsService.reservationStatistics());
//			return ResponseEntity.ok(result);
//				
//		} catch (Exception e) {
//			return ResponseEntity.badRequest().build();//400
//		}
//		
//	}

}
