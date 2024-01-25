package com.javajo.sunshineRoad.model.dto.recommendation;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("RecActSellerInfo")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecActSellerInfoDTO {
    @JsonProperty
    private long sId;
    @JsonProperty
    private String sTel;
    @JsonProperty
    private String sAddr;
    @JsonProperty
    private String sSite;
    @JsonProperty
    private int aId;
}