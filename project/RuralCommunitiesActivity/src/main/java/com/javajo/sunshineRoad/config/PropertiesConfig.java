package com.javajo.sunshineRoad.config;

import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

@Configuration
public class PropertiesConfig {
//    @Bean(name="oracleInfo")
//    public PropertiesFactoryBean devFactoryBean() {
//        PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
//        ClassPathResource classPathResource = new ClassPathResource("properties/dev.info.properties");
//        propertiesFactoryBean.setLocation(classPathResource);
//        return propertiesFactoryBean;
//    }
//    @Bean(name="mysqlInfo")
//    public PropertiesFactoryBean dev2FactoryBean() {
//        PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
//        ClassPathResource classPathResource = new ClassPathResource("properties/dev2.info.properties");
//        propertiesFactoryBean.setLocation(classPathResource);
//        return propertiesFactoryBean;
//    }

//    @Bean(name="commInfoProperties")
//    public PropertiesFactoryBean commFactoryBean() {
//        PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
//        ClassPathResource classPathResource = new ClassPathResource("properties/comm.info.properties");
//        propertiesFactoryBean.setLocation(classPathResource);
//        return propertiesFactoryBean;
//    }

    @Bean(name="utilProperties")
    public PropertiesFactoryBean utilFactoryBean() {
        PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
        ClassPathResource classPathResource = new ClassPathResource("properties/util.info.properties");
        propertiesFactoryBean.setLocation(classPathResource);
        return propertiesFactoryBean;
    }
    @Bean(name="securityProperties")
    public PropertiesFactoryBean securityFactoryBean() {
        PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
        ClassPathResource classPathResource = new ClassPathResource("properties/security.info.properties");
        propertiesFactoryBean.setLocation(classPathResource);
        return propertiesFactoryBean;
    }
}