package com.groupware.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class testController {
	
	@GetMapping("/home")
	public String home() {
		return "/index";
	}
	
	@GetMapping("test1")
	public String test1() {
		return "/test1";
	}
}
