package com.javajo.sunshineRoad.model.dto.common.favorites;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.ibatis.type.Alias;

@Alias("Favorites")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FavoritesDTO {
    @JsonProperty
    private int fId;
    @JsonProperty
    private int uId;
    private int boardId;
    private int postTypeId;
    private String postTypeName;
}