package com.javajo.sunshineRoad.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminHomeController {

	@GetMapping({"","/"})
	public void MainPage() {
		System.out.println("로그인페이지");
	}
	
	@GetMapping("/main")
	public void DashBoard() {
		System.out.println("dashboard");
	}
	
}
