package com.javajo.sunshineRoad.model.dto.common.likes;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("Likes")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LikesDTO {
    @JsonProperty
    private int lId;
    @JsonProperty
    private long uId;
    private int boardId;
    private int postTypeId;
    private String postTypeName;
}