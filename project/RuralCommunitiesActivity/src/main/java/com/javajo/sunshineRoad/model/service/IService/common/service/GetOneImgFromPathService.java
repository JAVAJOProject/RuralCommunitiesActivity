package com.javajo.sunshineRoad.model.service.IService.common.service;

import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

public interface GetOneImgFromPathService {
    public ResponseEntity<byte[]> getOneImgFromPath(String imagePath);

    public ResponseEntity<UrlResource> getOneImgResourceFromPath(String imagePath) throws IOException;
}