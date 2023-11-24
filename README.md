<a href="https://drive.google.com/file/d/1SkUexTQnjUNuD0BpjQEpzotYy7y8fQCL/view?usp=sharing">

![메인 타이틀](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/f37f2dd3-9d49-4589-9cb9-5624f5d6f60b)
</a>

# 농어촌 체험 서비스 중개 플랫폼 : 농촌빛길💫

✨농어촌 체험 서비스 중개 플랫폼인 농촌빛길 프로젝트는 농어촌의 자원과 잠재 관광객인 도시민을 잇는 소통과 기회의 장을 만드는 사이트입니다.

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

※ 이미지는 브라우저 테마를 Light에 맞추어 제작되었습니다.<br><br>
![주요 기능](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/d5cacd5c-edd8-45a5-883a-4c70dce2dead)

- 주요 서비스인 체험 서비스와 마케팅, 소통, 이용안내, 사용자의 서비스 관리, 관리자의 서비스 관리 등의 목적에 따라 세부 컨텐츠로 나눔
- 메뉴바 카테고리 참고 사항
  - 체험 서비스 → 전체 체험
  - 마케팅 → 추천 체험
  - 소통공간 → 커뮤니티
  - 사용자 서비스 관리 → 마이 페이지
  - 이용안내 → 고객센터
  - 전체 서비스 관리 → 관리자 사이트 분리

## DB💾

<a href="https://www.erdcloud.com/d/pTwBuwDLFnuuFYLy5">

![농촌빛길 프로젝트 - 자바조](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/b707dad0-1c62-4aa1-8e93-9014ffe4e289)
</a>
[ERDCloud 전체 DB 모델링 링크](https://www.erdcloud.com/d/pTwBuwDLFnuuFYLy5)<br><br>

![데이터베이스 - 회원](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/50647235-743d-4844-9ae2-10e2f5f2d30a)
▲ 필요한 정보가 회원 타입에 따라 상이하기 때문에 사이트 이용 방식에 따라 회원 테이블을 분리<br>
▲ 사이트 이용자의 경우 전체 명단이 필요한 기능도 있기 때문에 회원 타입 테이블과 더불어 사이트 이용자 명단만 관리하는 테이블을 만들고 트리거로 관리<br><br>
![데이터베이스 - 게시판](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/022e1a3f-8076-437d-8ee7-1687c10392f3)
▲ 목적에 따라 큰 카테고리를 나누고 주제에 따라 세부 게시판을 분리하여 테이블 관리<br>
▲ 회원과 마찬가지로 전체 게시판 목록이 필요한 기능이 있어 게시판 타입과 함께 전체 게시판을 관리하는 테이블을 만들고 트리거로 관리<br><br>
![데이터베이스 - 고객센터](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/c8287e4c-ed0e-4d8c-ba42-285a98ff71da)
▲ 고객센터의 경우 사이트 이용방식에 대한 안내를 목적으로 하기 때문에 다른 게시판과 성격이 달라 분리하여 관리<br><br>
※ 마이 페이지와 관리자 페이지는 관리하는 데이터 내용이 중복되어 생략

## UI 설계💡

[Figma 전체 UI 설계 링크](https://www.figma.com/file/S7JfNevGagugPj4odQQ9SK/Final-Project-%EB%A9%94%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%80%EC%95%88?type=design&node-id=0%3A1&mode=design&t=AYwdmko1wKHNirHW-1)<br><br>

## 담당 파트🔗

[🙋🏻‍♀️이시향](#%EF%B8%8F이시향)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♀️김경미](#%EF%B8%8F김경미)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김규하](#%EF%B8%8F김규하)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김남호](#%EF%B8%8F김남호)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♂️김현승](#%EF%B8%8F김현승)&nbsp;&nbsp;&nbsp;
[🙋🏻‍♀️이효인](#%EF%B8%8F이효인)&nbsp;&nbsp;&nbsp;
<br>

_* 코드는 폴더 기준으로 분류 *_<br>
**시연 영상을 고화질로 자세히 보려면 영상 클릭**<br>

<hr>

### **🙋🏻‍♀️이시향🔰**<br>

> 총괄 및 작업 병합, 설정 관리, 커뮤니티 카테고리 담당(이벤트, 소통공간, 마을소식), 서비스 페이지 UI 설계 및 구현, DB 통합<br><br>**GitHub >** https://github.com/biyoonx<br>**Email >** ok2geoya@gmail.com

#### 메인 페이지

<a href="https://drive.google.com/file/d/1gfqGfRImh8eQK9ifWrBCtvQhb1K_cRp4/view?usp=sharing">

![메인 페이지](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/fece936e-cbbd-4594-93e2-096aedb81ce7)
</a>

#### 커뮤니티 - 이벤트

<a href="https://drive.google.com/file/d/1n47nrcg1X2rvVESqHqnsOOdf9dI-_CzZ/view?usp=sharing">

![커뮤니티 - 이벤트](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/0f020637-dd55-41c6-8123-5f05a5c18be5)
</a>

#### 커뮤니티 - 소통공간

<a href="https://drive.google.com/file/d/1f4kAJeyNCvu6stu50x5xzSphIN3S4LEd/view?usp=sharing">

![커뮤니티 - 소통공간](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/4f1c3f5e-7832-4a45-8a42-5659dfcbd880)
</a>

#### 커뮤니티 - 마을소식

<a href="https://drive.google.com/file/d/1Y1RZ7IQH7TifzNs-mBzjoTX4PWN-Z7d6/view?usp=sharing">

![커뮤니티 - 마을소식](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/4043158c-0511-46a4-8f7c-b0abba9f9f79)
</a>

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

> 마이페이지 카테고리 담당(서비스 이용자의 개인정보 관리, 예약 관리, 이벤트 관리, 찜 목록, 후기 관리, 내 글 목록 / 서비스 제공자의 서비스 이용통계, 사업자정보 관리, 체험 서비스 관리, 이벤트 관리, 내 글 목록 - 기능 및 DB 설계, 구현), DB 통합<br><br>**GitHub >** https://github.com/kyungmii<br>**Email >** kyungme0812@gmail.com

#### 마이페이지 - 서비스 이용자

<a href="https://drive.google.com/file/d/1e-A_FIqQJgywP2lc4FsNmywzlANRYhAP/view?usp=sharing">

![마이 페이지 - 멤버](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/8f5c03ea-a86b-4e92-9134-54004cbaf6f6)
</a>

#### 마이페이지 - 서비스 제공자

<a href="https://drive.google.com/file/d/1mDWzW1G7mZArfS5CqM5oGBK3rl03iw8I/view?usp=sharing">

![마이 페이지 - 셀러1](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/c7ebfc75-a5bd-4497-a82d-addb204212a4)
</a>

<a href="https://drive.google.com/file/d/1ZAAcNr0QajLtmfu6PZdWPzWpN8Wc3jIm/view?usp=sharing">

![마이 페이지 - 셀러2](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/54cf8754-cecb-457f-9c22-e4c4d2393df4)
</a>

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

> 전체체험 카테고리 담당(테마별 체험, 지역별 체험, 농촌관광등급 기능 및 DB 설계, 구현), 회원가입 기능 구현<br><br>**GitHub >** https://github.com/kimgyuha<br>**Email >** sideway360@gmail.com

#### 전체 체험 - 테마별 체험

<a href="https://drive.google.com/file/d/1teIHZc3nEuB7mzFuZNaoFT_WVZfcoRNK/view?usp=sharing">

![전체 체험 - 테마별(압축)](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/b8bdb0f3-34cd-4899-b5de-8cc4a166d6f7)
</a>

#### 전체 체험 - 지역별 체험

<a href="https://drive.google.com/file/d/1JmraPsxW2XBtEMfdTM64O5uEST78ADrq/view?usp=sharing">

![전체 체험 - 지역별](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/b6100bd3-7a86-4ba3-be50-0a68e98b876a)
</a>

#### 농어촌관광등급

<a href="https://drive.google.com/file/d/1vGX0FU2Xmv7GuBSUrslb456VVJUertSJ/view?usp=sharing">

![전체 체험 - 농어촌관광등급](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/a6ca97e8-12e9-4ca0-b9cf-23cb06125b06)
</a>

#### 민박

<a href="https://drive.google.com/file/d/1j-LlJyZ9UqT1BSwn89XoB5Mnmj9f-GNh/view?usp=sharing">

![전체 체험 - 민박](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/58d29247-166b-4eed-8e06-7c7f9d1467b9)
</a>

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

> 추천체험 카테고리 담당(키워드별 추천체험, 지역별 추천체험, 지역별 추천마을 기능 및 DB 설계, 구현)<br><br>**GitHub >** https://github.com/namo012<br>**Email >** olg3737@gmail.com

#### 추천 체험 - 키워드

<a href="https://drive.google.com/file/d/11zcfCPod4GshgKIu4UFVEe6ovo9D8jlY/view?usp=sharing">

![추천 체험 - 키워드별](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/4da51c18-621a-4829-acb9-e98cf7a12138)
</a>

#### 추천 체험 - 지도콕콕

<a href="https://drive.google.com/file/d/1413kLbQxU4yptupOGMD0tlWijHk4S2tu/view?usp=sharing">

![추천 체험 - 지역별](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/8f28391d-cca1-46aa-87c2-d508e8ca4622)
</a>

#### 추천 체험 - 마을도감

<a href="https://drive.google.com/file/d/1qWec4HIkO9A_OHZHqZYAbwPHPrr8oWH9/view?usp=sharing">

![추천 체험 - 추천 마을](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/3983ec1d-4ca9-4fbe-a04b-3ea0368cca2f)
</a>

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

> 고객센터 카테고리 담당(공지사항, FAQ, 1:1 문의 기능 및 DB 설계, 구현), 공공데이터 날씨 API 설계 및 구현<br><br>**GitHub >** https://github.com/foo158<br>**Email >** kimhseung158@gmail.com

#### 헤더 - 날씨 API

<a href="https://drive.google.com/file/d/1Abv8wJA2rAOXYjVrPna52shoPtuEl0og/view?usp=sharing">
<img src="https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/1031be61-4844-4e0f-8d00-6b16bdcb2e6f" alt="날씨 API" width="200" />
<!-- ![날씨 API](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/1031be61-4844-4e0f-8d00-6b16bdcb2e6f) -->
</a>

#### 고객센터 - 공지사항

<a href="https://drive.google.com/file/d/1IPY9XV9bmnjlrJxr4QzR7MWuar264YCt/view?usp=sharing">

![고객센터 - 공지사항](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/579b3e84-d535-4dd7-bf11-7bcdd0f3e73a)
</a>

#### 고객센터 - FAQ

<a href="https://drive.google.com/file/d/18xSWjq3efyrPXGC2E_RVr-1M-dE5Zgz6/view?usp=sharing">

![고객센터 - FAQ](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/726d95f2-0338-44ff-8ab1-d2b555315c4c)
</a>

#### 고객센터 - 문의하기

<a href="https://drive.google.com/file/d/1ThxLFLEG79UAEHh8AuIaKtFJV6o0uS8_/view?usp=sharing">

![고객센터 - 문의하기](https://github.com/JAVAJOProject/RuralCommunitiesActivity/assets/135206920/6618e67a-4cbf-4c8d-97eb-dcccb2e73bdf)
</a>

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

> 관리자 페이지 전체 담당(기능 및 UI 설계, 구현)<br><br>**GitHub >** https://github.com/ssslee77g<br>**Email >** ssslee79@gmail.com

#### 관리자 페이지 - 회원 관리

_여기에 관리자 페이지 시연영상 넣기_

#### 관리자 페이지 - 게시판 관리

_여기에 관리자 페이지 시연영상 넣기_

#### 관리자 페이지 - 예약 관리

_여기에 관리자 페이지 시연영상 넣기_

#### 관리자 페이지 - 통계 관리

_여기에 관리자 페이지 시연영상 넣기_

#### 관리자 페이지 - 서비스 관리

_여기에 관리자 페이지 시연영상 넣기_

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
