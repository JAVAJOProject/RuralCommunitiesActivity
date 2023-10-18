package com.javajo.sunshineRoad.model.dto.customerCenter.faq;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Alias("FaqInfo")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FaqInfoDTO {

	private int faqId;
	private int faqTypeId;
	private String faqQ;
	private String faqA;
}