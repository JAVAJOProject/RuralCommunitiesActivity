package com.javajo.sunshineRoad.model.dto.admin;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AdminResponseDTO<A> {
	
	private String resultMsg;
	private String errorMsg;
	private A response;

}
