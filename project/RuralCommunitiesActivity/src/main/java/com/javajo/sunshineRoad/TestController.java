package com.javajo.sunshineRoad;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {
	@GetMapping("/hello")
	public String hello1() {
		return "Test. Print this, plz";
	}
	
	@GetMapping("/hello/{msg}")
	public String hello2(@PathVariable String msg) {
		return msg;
	}
}