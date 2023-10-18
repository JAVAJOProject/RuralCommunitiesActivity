package com.javajo.sunshineRoad.model.dto.common;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ResponseDTO<T> {
    private String resultMsg;
    private String errorMsg;
    private T data;
}