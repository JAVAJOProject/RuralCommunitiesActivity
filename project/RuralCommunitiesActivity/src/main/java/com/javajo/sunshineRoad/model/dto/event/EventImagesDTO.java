package com.javajo.sunshineRoad.model.dto.event;

import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("EventImages")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventImagesDTO {
    private int eventImgId;
    private String eventImg1;
    private String eventImg2;
    private String eventImg3;
    private String eventImg4;
    private String eventImg5;
}