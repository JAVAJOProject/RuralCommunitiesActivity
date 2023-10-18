package com.javajo.sunshineRoad.model.service.impl.common.service;

import com.javajo.sunshineRoad.model.service.IService.common.service.ImgPathToBase64Service;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Base64;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ImgPathToBase64ServiceImpl implements ImgPathToBase64Service {
    @Value("#{utilProperties['image.root.path']}")
    private String rootPath;

    @Override
    public String convertBase64(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));

        BufferedImage image = ImageIO.read(file.getInputStream());
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            ImageIO.write(image, fileName.substring(fileName.lastIndexOf(".") + 1), baos);
            return Base64.getEncoder().encodeToString(baos.toByteArray());
        }
    }

    @Override
    public String convertBase64(String src) throws IOException {
        String fullPath = StringUtils.cleanPath(rootPath + src);
        String extension = fullPath.substring(fullPath.lastIndexOf(".") + 1);

        BufferedImage image = ImageIO.read(new File(fullPath));
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            ImageIO.write(image, extension, baos);
            return "data:image/" + extension + ";base64," + Base64.getEncoder().encodeToString(baos.toByteArray());
        }
    }
}