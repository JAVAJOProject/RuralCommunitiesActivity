package com.javajo.sunshineRoad.model.dto.test;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

@Alias("Test")
@Getter
@Setter
@Builder
public class TestDTO {
    private long id;
    private String content;
    private String dateCreated;
}