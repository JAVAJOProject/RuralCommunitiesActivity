package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;
import com.javajo.sunshineRoad.model.dto.event.EventImagesDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Alias("ARecTownImg")
@Getter
@Setter
@Builder
public class ARecTownImgDTO {

    private int recTownImgId;
    private String recTownImg1;
    private String recTownImg2;
    private String recTownImg3;
    private String recTownImg4;
    private String recTownImg5;
}
