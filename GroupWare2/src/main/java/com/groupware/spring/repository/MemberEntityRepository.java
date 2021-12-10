package com.groupware.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.groupware.spring.member.Member;

@Repository
public interface MemberEntityRepository extends JpaRepository<Member, Long>{

	public List<Member> findById(String id);
	
	public List<Member> findByName(String name);
	
	public List<Member> findByNameLike(String keyword);
	
}
