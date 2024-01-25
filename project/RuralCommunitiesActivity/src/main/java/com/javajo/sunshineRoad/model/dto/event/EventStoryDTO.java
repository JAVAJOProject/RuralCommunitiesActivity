package com.javajo.sunshineRoad.model.dto.event;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("EventStory")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EventStoryDTO {
    private int eventReportId;
    @JsonProperty
    private long uId;
    private int eventId;
    private int eventProgressStatusId;
    private String eventProgressStatus;
    private String eventStory;
}