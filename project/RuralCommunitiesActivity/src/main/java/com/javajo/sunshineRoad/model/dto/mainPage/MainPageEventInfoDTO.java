package com.javajo.sunshineRoad.model.dto.mainPage;

import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("MainPageEventInfo")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MainPageEventInfoDTO {
    private int eventId;
    private String eventThumbnailImg;
}