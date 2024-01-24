package com.javajo.sunshineRoad.model.service.impl.admin.members;

import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.javajo.sunshineRoad.model.dto.admin.members.AEmailDTO;
import com.javajo.sunshineRoad.model.service.IService.admin.members.IAdminEmailService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminEmailService implements IAdminEmailService{
	
	private final JavaMailSender mailSender;
	
	@Override
	public void sendMail(AEmailDTO emailDTO) {
		try {
		//이메일 객체
		MimeMessage msg = mailSender.createMimeMessage();
		
		//수신인 설정(수신자,이메일주소 객체 생성해서 담음
		msg.addRecipient(RecipientType.TO, new InternetAddress(emailDTO.getReceiveMail()));
		//보내는 사람(발신자,주소) 이메일 발신자?
		msg.addFrom(new InternetAddress[] { new InternetAddress(emailDTO.getSenderMail(), emailDTO.getSenderName())});
		
		
		msg.setSubject(emailDTO.getSubject(), "utf-8");
		msg.setText(emailDTO.getMessage(),"utf-8");
		
		//메일 보내기
		mailSender.send(msg);
		
	}catch(Exception e) {
		e.printStackTrace();
	}
	
	
	}
}
