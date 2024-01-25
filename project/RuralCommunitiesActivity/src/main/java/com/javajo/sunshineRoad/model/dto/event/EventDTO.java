package com.javajo.sunshineRoad.model.dto.event;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("Event")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
    private int eventId;
    @JsonProperty
    private long sId;
    private int postTypeId;
    private int eventImgId;
    private int sigunguId;
    private int eventRecruitTypeId;
    private String eventRecruitType;
    private int eventStatusId;
    private String eventStatus;
    private String eventName;
    private String eventContent;
    private String eventThumbnailImg;
    private String eventDateCreated;
    private String eventRecruitStartDate;
    private String eventRecruitEndDate;
    private String eventStartDate;
    private String eventEndDate;
    private int eventMaxPeople;
    private String eventAddr;
    private int eventFavoriteCnt;
    private int eventViewCnt;
}