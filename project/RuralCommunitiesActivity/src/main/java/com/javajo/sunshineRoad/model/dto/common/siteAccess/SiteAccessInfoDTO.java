package com.javajo.sunshineRoad.model.dto.common.siteAccess;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("SiteAccessInfo")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SiteAccessInfoDTO {
    @JsonProperty
    private int bId;
    @JsonProperty
    private String bVisitedDate;
}