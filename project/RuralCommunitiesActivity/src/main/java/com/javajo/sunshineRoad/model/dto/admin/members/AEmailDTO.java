package com.javajo.sunshineRoad.model.dto.admin.members;

import org.apache.ibatis.type.Alias;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Alias("AEmail")
public class AEmailDTO {

	private String senderName;
	private String senderMail;
	private String receiveMail;
	private String subject;
	private String message;
}
