//package com.javajo.sunshineRoad.config;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.io.FileSystemResource;
//import org.springframework.web.multipart.commons.CommonsMultipartResolver;
//
//import java.io.IOException;
//
//@Configuration
//public class MultipartResolverConfig {
//    @Value("#{utilProperties['image.max-upload-size']}")
//    private long fileSize;
//    @Value("#{utilProperties['image.max-in-memory-size']}")
//    private int memorySize;
//    @Value("#{utilProperties['image.default-encoding']}")
//    private String fileEncoding;
//
//    @Value("#{utilProperties['image.root.path']}")
//    private String rootPath;
//
//    @Bean
//    public CommonsMultipartResolver multipartResolver() throws IOException {
//        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
//        multipartResolver.setMaxUploadSize(fileSize);
//        multipartResolver.setMaxInMemorySize(memorySize);
//        multipartResolver.setDefaultEncoding(fileEncoding);
//        multipartResolver.setUploadTempDir(new FileSystemResource(rootPath));
//        return multipartResolver;
//    }
//}