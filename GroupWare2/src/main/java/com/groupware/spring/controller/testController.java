package com.groupware.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class testController {
	
	@GetMapping("/index")
	public String home() {
		return "/index";
	}
	
	@GetMapping("home")
	public String test1() {
		return "/home";
	}
	
	@GetMapping("/address_p")
	public String addRess_p() {
		return "/adress_private";
	}
	
	@GetMapping("/address")
	public String address() {
		return "/adress";
	}
}
