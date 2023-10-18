package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Alias("ARActivityImg")
@Getter
@Setter
@Builder
public class ARActivityImgDTO {

    private int recAImgId;
    private String recAImg1;
    private String recAImg2;
    private String recAImg3;
    private String recAImg4;
    private String recAImg5;
}
