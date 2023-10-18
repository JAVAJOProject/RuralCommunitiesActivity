package com.javajo.sunshineRoad.model.dto.common.report;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("PostReport")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostReportDTO {
    private int boardId;
    private int statusId;
    private String status;
    private int reportCnt;
    @JsonProperty
    private String dDate;
}