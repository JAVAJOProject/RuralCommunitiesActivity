package com.javajo.sunshineRoad.model.service.IService.admin.members;

import com.javajo.sunshineRoad.model.dto.admin.members.AEmailDTO;

public interface IAdminEmailService {

	
	public void sendMail(AEmailDTO emailDTO);
}
