package com.javajo.sunshineRoad.model.service.impl.common.service;

import com.javajo.sunshineRoad.model.service.IService.common.service.GetOneImgFromPathService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class GetOneImgFromPathServiceImpl implements GetOneImgFromPathService {
    @Value("#{utilProperties['image.root.path']}")
    private String imageRootPath;

    @Override
    public ResponseEntity<byte[]> getOneImgFromPath(String imagePath) {
        ResponseEntity<byte[]> image = null;

        try {
            String srcFileName = URLDecoder.decode(imageRootPath + imagePath, StandardCharsets.UTF_8);
            File file = new File(srcFileName);
            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Type", Files.probeContentType(file.toPath()));

            image = new ResponseEntity<byte[]>(FileCopyUtils.copyToByteArray(file), headers, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<byte[]>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return image;
    }

    @Override
    public ResponseEntity<UrlResource> getOneImgResourceFromPath(String imagePath) throws IOException {
        String srcFileName = URLDecoder.decode(imageRootPath + imagePath, StandardCharsets.UTF_8);
        MediaType mediaType = MediaType.parseMediaType(Files.probeContentType(Paths.get(srcFileName)));
        UrlResource resource = new UrlResource("file:" + srcFileName);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, mediaType.toString())
                .body(resource);
    }
}