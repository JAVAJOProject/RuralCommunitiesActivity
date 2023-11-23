_여기에 메인페이지 시연영상 간략한 버전으로 넣기_

# 농어촌 체험 서비스 중개 플랫폼 : 농촌빛길💫

농어촌 체험 서비스 중개 플랫폼인 농촌빛길 프로젝트는 농어촌의 자원과 잠재 관광객인 도시민을 잇는 소통과 기회의 장을 만드는 사이트입니다.

## 지원자 코드 목록 바로 보기🎇

[🙋🏻‍♀️이시향](#%EF%B8%8F이시향)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♀️김경미](#%EF%B8%8F김경미)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김규하](#%EF%B8%8F김규하)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김남호](#%EF%B8%8F김남호)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김현승](#%EF%B8%8F김현승)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♀️이효인](#%EF%B8%8F이효인)&nbsp;&nbsp;&nbsp;

## 개발 환경⚙

- 운영체제 : Windows 10, Windows 11
- FE : HTML, CSS, JavaScript/React
- BE : Java/Spring, Mybatis, Oracle 11g(+MySQL 8.0.33)
- 협업 도구 : Git/GitHub
- IDE : Eclipse/STS, IntelliJ, Visual Studio Code
- 서버 : Apache Tomcat 9.0.73
- DB 개발자 툴 : SQL Developer, DBeaver(+MySQL WorkBench)
- DB 모델링 : ERD Cloud
- UI 설계 : Figma

## 전체 구조 및 주요 기능💻

![주요 기능](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/d5cacd5c-edd8-45a5-883a-4c70dce2dead)

## DB💾

![농촌빛길 프로젝트 - 자바조](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/b707dad0-1c62-4aa1-8e93-9014ffe4e289)
[ERDCloud 전체 DB 모델링 링크](https://www.erdcloud.com/d/pTwBuwDLFnuuFYLy5)

![데이터베이스 - 회원](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/50647235-743d-4844-9ae2-10e2f5f2d30a)
![데이터베이스 - 게시판](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/022e1a3f-8076-437d-8ee7-1687c10392f3)
![데이터베이스 - 고객센터](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/c8287e4c-ed0e-4d8c-ba42-285a98ff71da)

## UI 설계💡

[Figma 전체 UI 설계 링크](https://www.figma.com/file/S7JfNevGagugPj4odQQ9SK/Final-Project-%EB%A9%94%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%80%EC%95%88?type=design&node-id=0%3A1&mode=design&t=AYwdmko1wKHNirHW-1)

## 담당 파트🔗

_* 폴더 기준으로 분류 *_

[🙋🏻‍♀️이시향](#%EF%B8%8F이시향)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♀️김경미](#%EF%B8%8F김경미)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김규하](#%EF%B8%8F김규하)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김남호](#%EF%B8%8F김남호)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김현승](#%EF%B8%8F김현승)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♀️이효인](#%EF%B8%8F이효인)&nbsp;&nbsp;&nbsp;

### **🙋🏻‍♀️이시향🎖**<br>

_여기에 메인 페이지, 메뉴바, 이벤트, 커뮤니티 시연영상 넣기_

> 총괄 및 작업 병합, 설정 관리, 커뮤니티 카테고리 담당(이벤트, 소통공간, 마을소식), 서비스 페이지 UI 설계 및 구현, DB 통합

<table width="700px">
<tr>
<th colspan="2">Spring</th>
</tr>
<tr>
<td>카테고리</td>
<td>링크</td>
</tr>
<tr>
<td>공통 기능</td>
<td>

[Controller/common(WeatherController.java 제외)](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/common)<br>[Model/DAO/common](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/common)<br>[Model/DTO/common(weather 폴더 제외)](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/common)<br>[Model/Service/IService/common(WeatherService.java 제외)](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/common)<br>[Model/Service/Impl/common(WeatherServiceImpl.java 제외)](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/common)<br>[Mappers/common](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/common)<br>[Resources/Mappers/common](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/common)

</td>
</tr>
<tr>
<td>이벤트, 커뮤니티</td>
<td>

**이벤트**<br>[Controller/event](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/event)<br>[Model/DAO/event](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/event)<br>[Model/DTO/event](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/event)<br>[Model/Service/IService/event](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/event)<br>[Model/Service/Impl/event](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/event)<br><br>**커뮤니티**<br>[Controller/community](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/community)<br>[Model/DAO/community](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/community)<br>[Model/DTO/community](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/community)<br>[Model/Service/IService/community](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/community)<br>[Model/Service/Impl/community](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/community)<br><br>**Mappers**<br>[Mappers/community](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/community)<br>[Resources/Mappers/community](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/community)

</td>
</tr>
<tr>
<td>메인 페이지</td>
<td>

[Controller/mainPage](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/mainPage)<br>[Model/DAO/mainPage](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/mainPage)<br>[Model/DTO/mainPage](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/mainPage)<br>[Model/Service/IService/mainPage](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/mainPage)<br>[Model/Service/Impl/mainPage](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/mainPage)

</td>
</tr>
<tr>
<td>설정</td>
<td>

[Config](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/config)<br>[Exception](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/exception)<br>[Resources/properties](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/properties)<br>[Resources/mybatis-config.xml](https://github.com/JAVAJOProject/RuralCommunitiesActivity/blob/main/project/RuralCommunitiesActivity/src/main/resources/mybatis-config.xml)<br>[webapp/WEB-INF(mail-context.xml 제외)](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/webapp/WEB-INF)<br>[pom.xml](https://github.com/JAVAJOProject/RuralCommunitiesActivity/blob/main/project/RuralCommunitiesActivity/pom.xml)

</td>
</tr>
<tr>
<td>기타</td>
<td>

[Resources의 Mappers(Oracle 기준)를 MySQL 버전으로 변환 mysqlMapper(admin 제외)](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mysqlMapper)

</td>
</tr>
</table>

<table width="700px">
<tr>
<th>React</th>
</tr>
<tr>
<td>

[page 폴더의 Admin, components 폴더의 common, container를 제외한 전부](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project-view)

</td>
</tr>
</table>

### **🙋🏻‍♀️김경미**<br>

_여기에 마이페이지 멤버, 마이페이지 셀러 시연영상 넣기_

> 마이페이지 카테고리 담당(서비스 이용자의 개인정보 관리, 예약 관리, 이벤트 관리, 찜 목록, 후기 관리, 내 글 목록 / 서비스 제공자의 서비스 이용통계, 사업자정보 관리, 체험 서비스 관리, 이벤트 관리, 내 글 목록 - 기능 및 DB 설계, 구현), DB 통합

<table width="700px">
<tr>
<th colspan="2">Spring</th>
</tr>
<tr>
<td>카테고리</td>
<td>링크</td>
</tr>
<tr>
<td>마이 페이지 - 서비스 이용자</td>
<td>

[Controller/mypageMember](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/mypageMember)<br>[Model/DAO/mypageMember](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/mypageMember)<br>[Model/DTO/mypageMember](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/mypageMember)<br>[Model/Service/IService/mypageMember](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/mypageMember)<br>[Model/Service/Impl/mypageMember](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/mypageMember)<br>[Mappers/mypageMember](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/mypageMember)<br>[Resources/Mappers/mypageMember](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/mypageMember)

</td>
</tr>
<tr>
<td>마이 페이지 - 서비스 제공자</td>
<td>

[Controller/mypageSeller](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/mypageSeller)<br>[Model/DAO/mypageSeller](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/mypageSeller)<br>[Model/DTO/mypageSeller](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/mypageSeller)<br>[Model/Service/IService/mypageSeller](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/mypageSeller)<br>[Model/Service/Impl/mypageSeller](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/mypageSeller)<br>[Mappers/mypageSeller](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/mypageSeller)<br>[Resources/Mappers/mypageSeller](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/mypageSeller)

</td>
</tr>
<tr>
<td>기타</td>
<td>

[Model/DTO/page](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/page)

</td>
</tr>
</table>

### **🙋🏻‍♂️김규하**<br>

_여기에 전체 체험 시연영상 넣기_

> 전체체험 카테고리 담당(테마별 체험, 지역별 체험, 농촌관광등급 기능 및 DB 설계, 구현), 회원가입 기능 구현

<table width="700px">
<tr>
<th colspan="2">Spring</th>
</tr>
<tr>
<td>카테고리</td>
<td>링크</td>
</tr>
<tr>
<td>전체 체험</td>
<td>

[Controller/totalActivity](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/totalActivity)<br>[Model/DAO/totalActivity](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/totalActivity)<br>[Model/DTO/totalActivity](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/totalActivity)<br>[Model/Service/IService/totalActivity](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/totalActivity)<br>[Model/Service/Impl/totalActivity](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/totalActivity)<br><br>**공통 Mapper**<br>[Mappers/totalActivity](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/totalActivity)<br>[Resources/Mappers/totalActivity](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/totalActivity)

</td>
</tr>
<tr>
<td>예약</td>
<td>

[Controller/reservation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/reservation)<br>[Model/DAO/reservation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/reservation)<br>[Model/DTO/reservation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/reservation)<br>[Model/Service/IService/reservation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/reservation)<br>[Model/Service/Impl/reservation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/reservation)

</td>
</tr>
<tr>
<td>전체 체험의 리뷰</td>
<td>

[Controller/review](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/review)<br>[Model/DAO/review](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/review)<br>[Model/DTO/review](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/review)<br>[Model/Service/IService/review](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/review)<br>[Model/Service/Impl/review](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/review)

</td>
</tr>
<tr>
<td>회원가입</td>
<td>

[Controller/signUp](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/signUp)<br>[Model/DAO/signUp](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/signUp)<br>[Model/DTO/signUp](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/signUp)<br>[Model/Service/IService/signUp](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/signUp)<br>[Model/Service/Impl/signUp](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/signUp)<br>[Mappers/SignUpMapper.java](https://github.com/JAVAJOProject/RuralCommunitiesActivity/blob/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/security/SignUpMapper.java)<br>[Resources/Mappers/security/signUp-mapper.xml](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/totalActivity)

</td>
</tr>
<tr>
<td>공공데이터 농촌관광등급</td>
<td>

[Controller/rating](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/rating)<br>[Model/DTO/rating](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/rating)<br>[Model/Service/Impl/rating](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/rating)

</td>
</tr>
</table>

### **🙋🏻‍♂️김남호**<br>

_여기에 추천 체험 시연영상 넣기_

> 추천체험 카테고리 담당(키워드별 추천체험, 지역별 추천체험, 지역별 추천마을 기능 및 DB 설계, 구현)

<table width="700px">
<tr>
<th colspan="2">Spring</th>
</tr>
<tr>
<td>카테고리</td>
<td>링크</td>
</tr>
<tr>
<td>추천 체험(키워드별, 지역별), 추천 마을(지역별)</td>
<td>

[Controller/recommendation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/recommendation)<br>[Model/DAO/recommendation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/recommendation)<br>[Model/DTO/recommendation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/recommendation)<br>[Model/Service/IService/recommendation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/recommendation)<br>[Model/Service/Impl/recommendation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/recommendation)<br>[Mappers/recommendation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/recommendation)<br>[Resources/Mappers/recommendation](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/recommendation)

</td>
</tr>
</table>

### **🙋🏻‍♂️김현승**<br>

_여기에 고객센터, 날씨 API 시연영상 넣기_

> 고객센터 카테고리 담당(공지사항, FAQ, 1:1 문의 기능 및 DB 설계, 구현), 공공데이터 날씨 API 설계 및 구현

<table width="700px">
<tr>
<th colspan="2">Spring</th>
</tr>
<tr>
<td>카테고리</td>
<td>링크</td>
</tr>
<tr>
<td>고객 센터(공지사항, FAQ, 1:1문의)</td>
<td>

[Controller/customerCenter](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/customerCenter)<br>[Model/DAO/customerCenter](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/customerCenter)<br>[Model/DTO/customerCenter](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/customerCenter)<br>[Model/Service/IService/customerCenter](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/customerCenter)<br>[Model/Service/Impl/customerCenter](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/customerCenter)<br>[Mappers/customerCenter](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/customerCenter)<br>[Resources/Mappers/customerCenter](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/customerCenter)

</td>
</tr>
<tr>
<td>공공 데이터 날씨예보</td>
<td>

[Controller/common/WeatherController.java](https://github.com/JAVAJOProject/RuralCommunitiesActivity/blob/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/common/WeatherController.java)<br>[Model/DTO/common/weather](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/common/weather)<br>[Model/Service/IService/WeatherService.java](https://github.com/JAVAJOProject/RuralCommunitiesActivity/blob/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/common/service/WeatherService.java)<br>[Model/Service/Impl/WeatherServiceImpl.java](https://github.com/JAVAJOProject/RuralCommunitiesActivity/blob/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/common/service/WeatherServiceImpl.java)

</td>
</tr>
</table>

### **🙋🏻‍♀️이효인**<br>

_여기에 관리자 페이지 시연영상 넣기_

> 관리자 페이지 전체 담당(기능 및 UI 설계, 구현)

<table width="700px">
<tr>
<th colspan="2">Spring</th>
</tr>
<tr>
<td>카테고리</td>
<td>링크</td>
</tr>
<tr>
<td>관리자</td>
<td>

[Controller/admin](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/controller/admin)<br>[Model/DAO/admin](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dao/admin)<br>[Model/DTO/admin](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/dto/admin)<br>[Model/Service/IService/admin](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/IService/admin)<br>[Model/Service/Impl/admin](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/model/service/impl/admin)<br>[Mappers/admin](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/java/com/javajo/sunshineRoad/mappers/admin)<br>[Resources/Mappers/admin](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project/RuralCommunitiesActivity/src/main/resources/mappers/admin)

</td>
</tr>
<tr>
<td>기타</td>
<td>

[webapp/WEB-INF/spring/mail-context.xml](https://github.com/JAVAJOProject/RuralCommunitiesActivity/blob/main/project/RuralCommunitiesActivity/src/main/webapp/WEB-INF/spring/mail-context.xml)

</td>
</tr>
</table>

<table width="700px">
<tr>
<th>React</th>
</tr>
<tr>
<td>

**관리자 페이지**<br>[page/Admin](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project-view/src/page/Admin)<br>[components/Admin/common](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project-view/src/components/Admin/common)<br>[components/Admin/container](https://github.com/JAVAJOProject/RuralCommunitiesActivity/tree/main/project-view/src/components/Admin/container)

</td>
</tr>
</table>
