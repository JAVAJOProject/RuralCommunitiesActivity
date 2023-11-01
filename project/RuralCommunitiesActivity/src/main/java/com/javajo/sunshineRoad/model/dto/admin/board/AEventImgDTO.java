package com.javajo.sunshineRoad.model.dto.admin.board;

import org.apache.ibatis.type.Alias;
import com.javajo.sunshineRoad.model.dto.event.EventImagesDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Alias("AEventImg")
@Getter
@Setter
@Builder
public class AEventImgDTO {

    private int eventImgId;
    private String eventImg1;
    private String eventImg2;
    private String eventImg3;
    private String eventImg4;
    private String eventImg5;
}
