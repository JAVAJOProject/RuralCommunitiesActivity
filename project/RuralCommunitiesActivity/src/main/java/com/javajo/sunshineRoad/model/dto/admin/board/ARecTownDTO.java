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
@Alias("ARTown")
public class ARecTownDTO {

	private int recTId;
	private int recTImgId;
	private int townId;
	private int postTypeId;
	private String recTTitle;
	private String recTContent;
	private String recTDateCreated;
	private int recTViewCnt;
	private int recTFavoriteCnt;
	private String recTSite;
	private String recTThumbnailImg;
}
