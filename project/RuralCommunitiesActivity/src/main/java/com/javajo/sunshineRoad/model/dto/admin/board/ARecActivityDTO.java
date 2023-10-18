package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Alias("ARActivity")
public class ARecActivityDTO {

	private int recAPostId;
	private int sigunguId;
	private String recAId;
	private int recAImgId;
	private int postTypeId;
	private int recAKeywordId;
	private String recATitle;
	private String recAContent;
	private String recADateCreated;
	private int recAViewCount;
	private int recAFavoriteCnt;
	private String recAThumbnailImg;
}
