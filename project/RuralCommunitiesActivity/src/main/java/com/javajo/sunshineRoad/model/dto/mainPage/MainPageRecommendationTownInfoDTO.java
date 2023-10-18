package com.javajo.sunshineRoad.model.dto.mainPage;

import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("MainPageRecommendationTownInfo")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MainPageRecommendationTownInfoDTO {
    private int recTId;
    private String townName;
    private String recTThumbnailImg;
    private String sigunguName;
    private String sidoName;
    private String recTTitle;
    private String recTContent;
    private int recTFavoriteCnt;
}