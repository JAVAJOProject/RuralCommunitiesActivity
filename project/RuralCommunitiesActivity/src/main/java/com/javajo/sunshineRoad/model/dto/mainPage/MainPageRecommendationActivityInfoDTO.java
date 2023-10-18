package com.javajo.sunshineRoad.model.dto.mainPage;

import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("MainPageRecommendationActivityInfo")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MainPageRecommendationActivityInfoDTO {
    private int recAPostId;
    private String recATitle;
    private String recAThumbnailImg;
}