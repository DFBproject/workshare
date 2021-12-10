package com.groupware.spring.member;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.groupware.spring.RoleType;

import lombok.Data;

@Data
@Entity
public class Member {
	
	@Id
	@Column(nullable = false, unique=true)
	private String id;
	
	@Column(nullable = false, unique=true)
	private String name;
	
	@Column(nullable = false, unique=true)
	private String password;
	
	@Column(nullable = false, unique=true)
	private String email;
	
	@Column(nullable = false)
	private String dept;
	
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdDate;
	
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date modDate;
	
	@Column(nullable = false)
	private RoleType roleType;
	
}

