//package com.javajo.sunshineRoad.config;
//
//import org.apache.ibatis.type.JdbcType;
//import org.mybatis.spring.SqlSessionFactoryBean;
//import org.mybatis.spring.SqlSessionTemplate;
//import org.mybatis.spring.annotation.MapperScan;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.*;
//import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
//import org.springframework.jdbc.datasource.DataSourceTransactionManager;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.transaction.PlatformTransactionManager;
//
//import javax.sql.DataSource;
//import java.io.IOException;
//import java.util.Objects;
//
//@Configuration
//@EnableAspectJAutoProxy
//@ComponentScan(basePackages = {"com.javajo.sunshineRoad"}, excludeFilters = {@ComponentScan.Filter(type = FilterType.ASPECTJ, pattern = {"com.javajo.sunshineRoad.controller.*"})})
//@MapperScan(basePackages = {"com.javajo.sunshineRoad.mappers"},
//            annotationClass = org.apache.ibatis.annotations.Mapper.class)
//public class RootConfig {
////    @Value("#{oracleInfo['db.driver']}")
////    private String dbDriver;
////    @Value("#{oracleInfo['db.url']}")
////    private String dbUrl;
////    @Value("#{oracleInfo['db.username']}")
////    private String dbUsername;
////    @Value("#{oracleInfo['db.password']}")
////    private String dbPassword;
//
//    @Value("#{mysqlInfo['db.driver']}")
//    private String dbDriver;
//    @Value("#{mysqlInfo['db.url']}")
//    private String dbUrl;
//    @Value("#{mysqlInfo['db.username']}")
//    private String dbUsername;
//    @Value("#{mysqlInfo['db.password']}")
//    private String dbPassword;
//
//    @Bean
//    public DataSource dataSource() {
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        dataSource.setDriverClassName(dbDriver);
//        dataSource.setUrl(dbUrl);
//        dataSource.setUsername(dbUsername);
//        dataSource.setPassword(dbPassword);
//        return dataSource;
//    }
//
//    @Bean
//    public SqlSessionFactoryBean sqlSessionFactoryBean() throws IOException {
//        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
//        sqlSessionFactoryBean.setDataSource(dataSource());
//        sqlSessionFactoryBean.setConfiguration(mybatisConfig());
//        sqlSessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath*:/mappers/*-mapper.xml"));
//        sqlSessionFactoryBean.setTypeAliasesPackage("com.javajo.sunshineRoad.model.dto");
//        return sqlSessionFactoryBean;
//    }
//
//    @Bean
//    public org.apache.ibatis.session.Configuration mybatisConfig() {
//        org.apache.ibatis.session.Configuration mybatisConfig = new org.apache.ibatis.session.Configuration();
//        mybatisConfig.setJdbcTypeForNull(JdbcType.NULL);
//        mybatisConfig.setMapUnderscoreToCamelCase(true);
//        mybatisConfig.setCallSettersOnNulls(true);
//        return mybatisConfig;
//    }
//
//    @Bean
//    public SqlSessionTemplate sqlSessionTemplate() throws Exception {
//        return new SqlSessionTemplate(Objects.requireNonNull(sqlSessionFactoryBean().getObject()));
//    }
//
//    @Bean
//    public PlatformTransactionManager transactionManager() {
//        DataSourceTransactionManager transactionManager = new DataSourceTransactionManager();
//        transactionManager.setDataSource(dataSource());
//        return transactionManager;
//    }
//}