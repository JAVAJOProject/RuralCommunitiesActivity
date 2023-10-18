package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Alias("AActivityImg")
@Getter
@Setter
@Builder
public class AActivityImgDTO {

    private int activityImgId;
    private String activityImg1;
    private String activityImg2;
    private String activityImg3;
    private String activityImg4;
    private String activityImg5;
}
