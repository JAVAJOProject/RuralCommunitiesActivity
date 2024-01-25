package com.javajo.sunshineRoad.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@ComponentScan(basePackages = {"com.javajo.sunshineRoad"})
@EnableWebMvc
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    private final long MAX_AGE_SECS = 3600L;
    private final String ORIGINBE = "http://localhost:8080";
    private final String ORIGINFE = "http://localhost:3000";
    private final String ALLOWED_METHOD_NAMES = "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD";

    @Value("#{utilProperties['image.root.path']}")
    private String uploadImgFileRootPath;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(ORIGINFE, ORIGINBE)
                .allowedMethods(ALLOWED_METHOD_NAMES.split(","))
                .allowedHeaders("*")
                .allowCredentials(true)
                .exposedHeaders(HttpHeaders.AUTHORIZATION, HttpHeaders.CACHE_CONTROL)
                .maxAge(MAX_AGE_SECS);

//    .exposedHeaders("X-AUTH-TOKEN");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/uploadImgDir/**").addResourceLocations("file:///" + uploadImgFileRootPath);
    }

//    @Override
//    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
//        ObjectMapper mapper = new ObjectMapper();
//        mapper.setPropertyNamingStrategy(new CustomNamingStrategy());
//        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
//        converter.setObjectMapper(mapper);
//        converters.add(converter);
//    }
}