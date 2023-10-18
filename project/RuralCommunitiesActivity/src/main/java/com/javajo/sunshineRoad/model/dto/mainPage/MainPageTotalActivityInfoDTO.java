package com.javajo.sunshineRoad.model.dto.mainPage;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("MainPageTotalActivityInfo")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MainPageTotalActivityInfoDTO {
    @JsonProperty
    private int sId;
    @JsonProperty
    private int aPostId;
    @JsonProperty
    private String aName;
    @JsonProperty
    private String aOneLiner;
    @JsonProperty
    private String aThumbnailImg;
    private String sigunguName;
    private String sidoName;
}