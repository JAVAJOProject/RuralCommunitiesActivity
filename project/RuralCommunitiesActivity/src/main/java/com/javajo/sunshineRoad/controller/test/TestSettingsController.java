package com.javajo.sunshineRoad.controller.test;

import com.javajo.sunshineRoad.model.dto.test.TestDTO;
import com.javajo.sunshineRoad.model.service.IService.test.GetAllTestContentsService;
import com.javajo.sunshineRoad.model.service.IService.test.GetOneTestContentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestSettingsController {
	private final GetAllTestContentsService getAllTestContentsService;
	private final GetOneTestContentService getOneTestContentService;

	// 초기 설정이 잘 되어 있는지 테스트
	@GetMapping("/hello")
	public String hello1() {
		return "Test, plz";
	}
	
	@GetMapping("/hello/{msg}")
	public String hello2(@PathVariable String msg) {
		return msg;
	}

	// DB, MyBatis 연결이 잘 되어 있는지 테스트
	@GetMapping("/db_conn/test_contents")
	public List<TestDTO> getAllTestContents() {
		return getAllTestContentsService.getAllTestContents();
	}

	@GetMapping("/db_conn/one_test_content/{id}")
	public TestDTO getOneTestContent(@PathVariable int id) {
		TestDTO result = getOneTestContentService.getOneTestContent(id);

		if (result == null) {
			TestDTO empty = TestDTO.builder().id(0).content("empty").dateCreated("0000-00-00 00:00:00").build();
			return empty;
		}

		return result;
	}
}