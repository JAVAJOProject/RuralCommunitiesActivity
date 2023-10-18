package com.javajo.sunshineRoad.model.service.IService.common.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImgPathToBase64Service {
    public String convertBase64(MultipartFile files) throws IOException;
    public String convertBase64(String src) throws IOException;
}