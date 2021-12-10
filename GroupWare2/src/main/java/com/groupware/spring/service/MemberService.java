package com.groupware.spring.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.groupware.spring.member.Member;
import com.groupware.spring.repository.MemberEntityRepository;

@Service
public class MemberService {

	@Autowired
	private MemberEntityRepository mr;
	
	public List<Member> findAll(){
		List<Member> members = new ArrayList<Member>();
		mr.findAll().forEach(e -> members.add(e));
		return members;
	}
	
}
