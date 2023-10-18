//package com.javajo.sunshineRoad.config;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
//
//@Configuration
//public class NamingConfig {
//    private final CustomNamingStrategy customNamingStrategy = new CustomNamingStrategy();
//
//    @Bean
//    public ObjectMapper objectMapper() {
//        return Jackson2ObjectMapperBuilder.json()
//                .propertyNamingStrategy(customNamingStrategy)
//                .build();
//    }
//}