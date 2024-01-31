import React, { useEffect } from 'react';

const dateValue = [
  { value: 0, title: '기간조회', name: 'dateType' },
  { value: 1, title: '체험시작일', name: 'dateType' },
  { value: 2, title: '체험종료일', name: 'dateType' },
  { value: 3, title: '예약마감일', name: 'dateType' },
];
const sidoValue = [
  { value: 0, title: '시/도', name: 'sido' },
  { value: 1, title: '서울', name: 'sido' },
  { value: 2, title: '부산', name: 'sido' },
  { value: 3, title: '대구', name: 'sido' },
  { value: 4, title: '인천', name: 'sido' },
  { value: 5, title: '광주', name: 'sido' },
  { value: 6, title: '대전', name: 'sido' },
  { value: 7, title: '울산', name: 'sido' },
  { value: 8, title: '경기도', name: 'sido' },
  { value: 9, title: '충청북도', name: 'sido' },
  { value: 10, title: '충청남도', name: 'sido' },
  { value: 11, title: '전라북도', name: 'sido' },
  { value: 12, title: '전라남도', name: 'sido' },
  { value: 13, title: '경상북도', name: 'sido' },
  { value: 14, title: '경상남도', name: 'sido' },
  { value: 15, title: '강원도', name: 'sido' },
  { value: 16, title: '제주도', name: 'sido' },
  { value: 17, title: '세종', name: 'sido' },
];
const sigunguValue = [
  { value: 0, sidoNo: 0, title: '시군구', name: 'sigungu' },
  { value: 1, sidoNo: 1, title: '강남구', name: 'sigungu' },
  { value: 2, sidoNo: 1, title: '강동구', name: 'sigungu' },
  { value: 3, sidoNo: 1, title: '강북구', name: 'sigungu' },
  { value: 4, sidoNo: 1, title: '강서구', name: 'sigungu' },
  { value: 5, sidoNo: 1, title: '관악구', name: 'sigungu' },
  { value: 6, sidoNo: 1, title: '광진구', name: 'sigungu' },
  { value: 7, sidoNo: 1, title: '구로구', name: 'sigungu' },
  { value: 8, sidoNo: 1, title: '금천구', name: 'sigungu' },
  { value: 9, sidoNo: 1, title: '노원구', name: 'sigungu' },
  { value: 10, sidoNo: 1, title: '도봉구', name: 'sigungu' },
  { value: 11, sidoNo: 1, title: '동대문구', name: 'sigungu' },
  { value: 12, sidoNo: 1, title: '동작구', name: 'sigungu' },
  { value: 13, sidoNo: 1, title: '마포구', name: 'sigungu' },
  { value: 14, sidoNo: 1, title: '서대문구', name: 'sigungu' },
  { value: 15, sidoNo: 1, title: '서초구', name: 'sigungu' },
  { value: 16, sidoNo: 1, title: '성동구', name: 'sigungu' },
  { value: 17, sidoNo: 1, title: '성북구', name: 'sigungu' },
  { value: 18, sidoNo: 1, title: '송파구', name: 'sigungu' },
  { value: 19, sidoNo: 1, title: '양천구', name: 'sigungu' },
  { value: 20, sidoNo: 1, title: '영등포구', name: 'sigungu' },
  { value: 21, sidoNo: 1, title: '용산구', name: 'sigungu' },
  { value: 22, sidoNo: 1, title: '은평구', name: 'sigungu' },
  { value: 23, sidoNo: 1, title: '종로구', name: 'sigungu' },
  { value: 24, sidoNo: 1, title: '중구', name: 'sigungu' },
  { value: 25, sidoNo: 1, title: '중랑구', name: 'sigungu' },
  { value: 27, sidoNo: 2, title: '금정구', name: 'sigungu' },
  { value: 28, sidoNo: 2, title: '남구', name: 'sigungu' },
  { value: 29, sidoNo: 2, title: '동구', name: 'sigungu' },
  { value: 30, sidoNo: 2, title: '동래구', name: 'sigungu' },
  { value: 31, sidoNo: 2, title: '부산진구', name: 'sigungu' },
  { value: 32, sidoNo: 2, title: '북구', name: 'sigungu' },
  { value: 33, sidoNo: 2, title: '사상구', name: 'sigungu' },
  { value: 34, sidoNo: 2, title: '사하구', name: 'sigungu' },
  { value: 35, sidoNo: 2, title: '서구', name: 'sigungu' },
  { value: 36, sidoNo: 2, title: '수영구', name: 'sigungu' },
  { value: 37, sidoNo: 2, title: '연제구', name: 'sigungu' },
  { value: 38, sidoNo: 2, title: '영도구', name: 'sigungu' },
  { value: 39, sidoNo: 2, title: '중구', name: 'sigungu' },
  { value: 40, sidoNo: 2, title: '해운대구', name: 'sigungu' },
  { value: 41, sidoNo: 3, title: '남구', name: 'sigungu' },
  { value: 42, sidoNo: 3, title: '달서구', name: 'sigungu' },
  { value: 43, sidoNo: 3, title: '동구', name: 'sigungu' },
  { value: 44, sidoNo: 3, title: '북구', name: 'sigungu' },
  { value: 45, sidoNo: 3, title: '서구', name: 'sigungu' },
  { value: 46, sidoNo: 3, title: '수성구', name: 'sigungu' },
  { value: 47, sidoNo: 3, title: '중구', name: 'sigungu' },
  { value: 48, sidoNo: 4, title: '계양구', name: 'sigungu' },
  { value: 49, sidoNo: 4, title: '남동구', name: 'sigungu' },
  { value: 50, sidoNo: 4, title: '동구', name: 'sigungu' },
  { value: 51, sidoNo: 4, title: '미추홀구', name: 'sigungu' },
  { value: 52, sidoNo: 4, title: '부평구', name: 'sigungu' },
  { value: 53, sidoNo: 4, title: '서구', name: 'sigungu' },
  { value: 54, sidoNo: 4, title: '연수구', name: 'sigungu' },
  { value: 55, sidoNo: 4, title: '중구', name: 'sigungu' },
  { value: 56, sidoNo: 5, title: '광산구', name: 'sigungu' },
  { value: 57, sidoNo: 5, title: '남구', name: 'sigungu' },
  { value: 58, sidoNo: 5, title: '동구', name: 'sigungu' },
  { value: 59, sidoNo: 5, title: '북구', name: 'sigungu' },
  { value: 60, sidoNo: 5, title: '서구', name: 'sigungu' },
  { value: 61, sidoNo: 6, title: '대덕구', name: 'sigungu' },
  { value: 62, sidoNo: 6, title: '동구', name: 'sigungu' },
  { value: 63, sidoNo: 6, title: '서구', name: 'sigungu' },
  { value: 64, sidoNo: 6, title: '유성구', name: 'sigungu' },
  { value: 65, sidoNo: 6, title: '중구', name: 'sigungu' },
  { value: 66, sidoNo: 7, title: '남구', name: 'sigungu' },
  { value: 67, sidoNo: 7, title: '동구', name: 'sigungu' },
  { value: 68, sidoNo: 7, title: '북구', name: 'sigungu' },
  { value: 69, sidoNo: 7, title: '중구', name: 'sigungu' },
  { value: 70, sidoNo: 8, title: '수원시', name: 'sigungu' },
  { value: 71, sidoNo: 8, title: '성남시', name: 'sigungu' },
  { value: 72, sidoNo: 8, title: '용인시', name: 'sigungu' },
  { value: 73, sidoNo: 8, title: '안양시', name: 'sigungu' },
  { value: 74, sidoNo: 8, title: '안산시', name: 'sigungu' },
  { value: 75, sidoNo: 8, title: '과천시', name: 'sigungu' },
  { value: 76, sidoNo: 8, title: '광명시', name: 'sigungu' },
  { value: 77, sidoNo: 8, title: '광주시', name: 'sigungu' },
  { value: 78, sidoNo: 8, title: '군포시', name: 'sigungu' },
  { value: 79, sidoNo: 8, title: '부천시', name: 'sigungu' },
  { value: 80, sidoNo: 8, title: '시흥시', name: 'sigungu' },
  { value: 81, sidoNo: 8, title: '김포시', name: 'sigungu' },
  { value: 82, sidoNo: 8, title: '안성시', name: 'sigungu' },
  { value: 83, sidoNo: 8, title: '오산시', name: 'sigungu' },
  { value: 84, sidoNo: 8, title: '의왕시', name: 'sigungu' },
  { value: 85, sidoNo: 8, title: '이천시', name: 'sigungu' },
  { value: 86, sidoNo: 8, title: '평택시', name: 'sigungu' },
  { value: 87, sidoNo: 8, title: '하남시', name: 'sigungu' },
  { value: 88, sidoNo: 8, title: '화성시', name: 'sigungu' },
  { value: 89, sidoNo: 8, title: '여주시', name: 'sigungu' },
  { value: 90, sidoNo: 8, title: '고양시', name: 'sigungu' },
  { value: 91, sidoNo: 8, title: '구리시', name: 'sigungu' },
  { value: 92, sidoNo: 8, title: '남양주시', name: 'sigungu' },
  { value: 93, sidoNo: 8, title: '동두천시', name: 'sigungu' },
  { value: 94, sidoNo: 8, title: '양주시', name: 'sigungu' },
  { value: 95, sidoNo: 8, title: '의정부시', name: 'sigungu' },
  { value: 96, sidoNo: 8, title: '파주시', name: 'sigungu' },
  { value: 97, sidoNo: 8, title: '포천시', name: 'sigungu' },
  { value: 98, sidoNo: 8, title: '양평군', name: 'sigungu' },
  { value: 99, sidoNo: 8, title: '연천군', name: 'sigungu' },
  { value: 100, sidoNo: 8, title: '가평군', name: 'sigungu' },
  { value: 101, sidoNo: 9, title: '청주시', name: 'sigungu' },
  { value: 102, sidoNo: 9, title: '충주시', name: 'sigungu' },
  { value: 103, sidoNo: 9, title: '제천시', name: 'sigungu' },
  { value: 104, sidoNo: 9, title: '보은군', name: 'sigungu' },
  { value: 105, sidoNo: 9, title: '옥천군', name: 'sigungu' },
  { value: 106, sidoNo: 9, title: '영동군', name: 'sigungu' },
  { value: 107, sidoNo: 9, title: '증평군', name: 'sigungu' },
  { value: 108, sidoNo: 9, title: '진천군', name: 'sigungu' },
  { value: 109, sidoNo: 9, title: '괴산군', name: 'sigungu' },
  { value: 110, sidoNo: 9, title: '음성군', name: 'sigungu' },
  { value: 111, sidoNo: 9, title: '단양군', name: 'sigungu' },
  { value: 112, sidoNo: 10, title: '천안시', name: 'sigungu' },
  { value: 113, sidoNo: 10, title: '공주시', name: 'sigungu' },
  { value: 114, sidoNo: 10, title: '보령시', name: 'sigungu' },
  { value: 115, sidoNo: 10, title: '아산시', name: 'sigungu' },
  { value: 116, sidoNo: 10, title: '서산시', name: 'sigungu' },
  { value: 117, sidoNo: 10, title: '논산시', name: 'sigungu' },
  { value: 118, sidoNo: 10, title: '계룡시', name: 'sigungu' },
  { value: 119, sidoNo: 10, title: '당진시', name: 'sigungu' },
  { value: 120, sidoNo: 10, title: '금산군', name: 'sigungu' },
  { value: 121, sidoNo: 10, title: '부여군', name: 'sigungu' },
  { value: 122, sidoNo: 10, title: '서천군', name: 'sigungu' },
  { value: 123, sidoNo: 10, title: '청양군', name: 'sigungu' },
  { value: 124, sidoNo: 10, title: '홍성군', name: 'sigungu' },
  { value: 125, sidoNo: 10, title: '예산군', name: 'sigungu' },
  { value: 126, sidoNo: 10, title: '태안군', name: 'sigungu' },
  { value: 127, sidoNo: 11, title: '전주시', name: 'sigungu' },
  { value: 128, sidoNo: 11, title: '익산시', name: 'sigungu' },
  { value: 129, sidoNo: 11, title: '군산시', name: 'sigungu' },
  { value: 130, sidoNo: 11, title: '정읍시', name: 'sigungu' },
  { value: 131, sidoNo: 11, title: '김제시', name: 'sigungu' },
  { value: 132, sidoNo: 11, title: '남원시', name: 'sigungu' },
  { value: 133, sidoNo: 11, title: '완주군', name: 'sigungu' },
  { value: 134, sidoNo: 11, title: '고창군', name: 'sigungu' },
  { value: 135, sidoNo: 11, title: '부안군', name: 'sigungu' },
  { value: 136, sidoNo: 11, title: '임실군', name: 'sigungu' },
  { value: 137, sidoNo: 11, title: '순창군', name: 'sigungu' },
  { value: 138, sidoNo: 11, title: '진안군', name: 'sigungu' },
  { value: 139, sidoNo: 11, title: '무주군', name: 'sigungu' },
  { value: 140, sidoNo: 11, title: '장수군', name: 'sigungu' },
  { value: 141, sidoNo: 12, title: '목포시', name: 'sigungu' },
  { value: 142, sidoNo: 12, title: '여수시', name: 'sigungu' },
  { value: 143, sidoNo: 12, title: '순천시', name: 'sigungu' },
  { value: 144, sidoNo: 12, title: '나주시', name: 'sigungu' },
  { value: 145, sidoNo: 12, title: '광양시', name: 'sigungu' },
  { value: 146, sidoNo: 12, title: '담양군', name: 'sigungu' },
  { value: 147, sidoNo: 12, title: '곡성군', name: 'sigungu' },
  { value: 148, sidoNo: 12, title: '구례군', name: 'sigungu' },
  { value: 149, sidoNo: 12, title: '고흥군', name: 'sigungu' },
  { value: 150, sidoNo: 12, title: '보성군', name: 'sigungu' },
  { value: 151, sidoNo: 12, title: '화순군', name: 'sigungu' },
  { value: 152, sidoNo: 12, title: '장흥군', name: 'sigungu' },
  { value: 153, sidoNo: 12, title: '강진군', name: 'sigungu' },
  { value: 154, sidoNo: 12, title: '해남군', name: 'sigungu' },
  { value: 155, sidoNo: 12, title: '영암군', name: 'sigungu' },
  { value: 156, sidoNo: 12, title: '무안군', name: 'sigungu' },
  { value: 157, sidoNo: 12, title: '함평군', name: 'sigungu' },
  { value: 158, sidoNo: 12, title: '영광군', name: 'sigungu' },
  { value: 159, sidoNo: 12, title: '장성군', name: 'sigungu' },
  { value: 160, sidoNo: 12, title: '완도군', name: 'sigungu' },
  { value: 161, sidoNo: 12, title: '진도군', name: 'sigungu' },
  { value: 162, sidoNo: 12, title: '신안군', name: 'sigungu' },
  { value: 163, sidoNo: 13, title: '포항시', name: 'sigungu' },
  { value: 164, sidoNo: 13, title: '경주시', name: 'sigungu' },
  { value: 165, sidoNo: 13, title: '김천시', name: 'sigungu' },
  { value: 166, sidoNo: 13, title: '안동시', name: 'sigungu' },
  { value: 167, sidoNo: 13, title: '구미시', name: 'sigungu' },
  { value: 168, sidoNo: 13, title: '영주시', name: 'sigungu' },
  { value: 169, sidoNo: 13, title: '영천시', name: 'sigungu' },
  { value: 170, sidoNo: 13, title: '상주시', name: 'sigungu' },
  { value: 171, sidoNo: 13, title: '문경시', name: 'sigungu' },
  { value: 172, sidoNo: 13, title: '경산시', name: 'sigungu' },
  { value: 173, sidoNo: 13, title: '의성군', name: 'sigungu' },
  { value: 174, sidoNo: 13, title: '청송군', name: 'sigungu' },
  { value: 175, sidoNo: 13, title: '영양군', name: 'sigungu' },
  { value: 176, sidoNo: 13, title: '영덕군', name: 'sigungu' },
  { value: 177, sidoNo: 13, title: '청도군', name: 'sigungu' },
  { value: 178, sidoNo: 13, title: '고령군', name: 'sigungu' },
  { value: 179, sidoNo: 13, title: '성주군', name: 'sigungu' },
  { value: 180, sidoNo: 13, title: '칠곡군', name: 'sigungu' },
  { value: 181, sidoNo: 13, title: '예천군', name: 'sigungu' },
  { value: 182, sidoNo: 13, title: '봉화군', name: 'sigungu' },
  { value: 183, sidoNo: 13, title: '울진군', name: 'sigungu' },
  { value: 184, sidoNo: 13, title: '울릉군', name: 'sigungu' },
  { value: 185, sidoNo: 14, title: '창원시', name: 'sigungu' },
  { value: 186, sidoNo: 14, title: '김해시', name: 'sigungu' },
  { value: 187, sidoNo: 14, title: '진주시', name: 'sigungu' },
  { value: 188, sidoNo: 14, title: '양산시', name: 'sigungu' },
  { value: 189, sidoNo: 14, title: '거제시', name: 'sigungu' },
  { value: 190, sidoNo: 14, title: '통영시', name: 'sigungu' },
  { value: 191, sidoNo: 14, title: '사천시', name: 'sigungu' },
  { value: 192, sidoNo: 14, title: '밀양시', name: 'sigungu' },
  { value: 193, sidoNo: 14, title: '함안군', name: 'sigungu' },
  { value: 194, sidoNo: 14, title: '거창군', name: 'sigungu' },
  { value: 195, sidoNo: 14, title: '창녕군', name: 'sigungu' },
  { value: 196, sidoNo: 14, title: '고성군', name: 'sigungu' },
  { value: 197, sidoNo: 14, title: '하동군', name: 'sigungu' },
  { value: 198, sidoNo: 14, title: '합천군', name: 'sigungu' },
  { value: 199, sidoNo: 14, title: '남해군', name: 'sigungu' },
  { value: 200, sidoNo: 14, title: '함양군', name: 'sigungu' },
  { value: 201, sidoNo: 14, title: '산청군', name: 'sigungu' },
  { value: 202, sidoNo: 14, title: '의령군', name: 'sigungu' },
  { value: 203, sidoNo: 15, title: '원주시', name: 'sigungu' },
  { value: 204, sidoNo: 15, title: '춘천시', name: 'sigungu' },
  { value: 205, sidoNo: 15, title: '강릉시', name: 'sigungu' },
  { value: 206, sidoNo: 15, title: '동해시', name: 'sigungu' },
  { value: 207, sidoNo: 15, title: '속초시', name: 'sigungu' },
  { value: 208, sidoNo: 15, title: '삼척시', name: 'sigungu' },
  { value: 209, sidoNo: 15, title: '태백시', name: 'sigungu' },
  { value: 210, sidoNo: 15, title: '홍천군', name: 'sigungu' },
  { value: 211, sidoNo: 15, title: '철원군', name: 'sigungu' },
  { value: 212, sidoNo: 15, title: '횡성군', name: 'sigungu' },
  { value: 213, sidoNo: 15, title: '평창군', name: 'sigungu' },
  { value: 214, sidoNo: 15, title: '정선군', name: 'sigungu' },
  { value: 215, sidoNo: 15, title: '영월군', name: 'sigungu' },
  { value: 216, sidoNo: 15, title: '인제군', name: 'sigungu' },
  { value: 217, sidoNo: 15, title: '고성군', name: 'sigungu' },
  { value: 218, sidoNo: 15, title: '양양군', name: 'sigungu' },
  { value: 219, sidoNo: 15, title: '화천군', name: 'sigungu' },
  { value: 220, sidoNo: 15, title: '양구군', name: 'sigungu' },
  { value: 221, sidoNo: 16, title: '제주시', name: 'sigungu' },
  { value: 222, sidoNo: 4, title: '광화군', name: 'sigungu' },
  { value: 223, sidoNo: 4, title: '옹진군', name: 'sigungu' },
  { value: 224, sidoNo: 16, title: '서귀포시', name: 'sigungu' },
];
const themeValue = [
  { value: 0, title: '테마선택', name: 'theme' },
  { value: 1, title: '농사', name: 'theme' },
  { value: 2, title: '어촌', name: 'theme' },
  { value: 3, title: '전통', name: 'theme' },
  { value: 4, title: '기타', name: 'theme' },
];

const monthValue = [
  { value: 1, title: '1월', name: 'month' },
  { value: 2, title: '2월', name: 'month' },
  { value: 3, title: '3월', name: 'month' },
  { value: 4, title: '4월', name: 'month' },
  { value: 5, title: '5월', name: 'month' },
  { value: 6, title: '6월', name: 'month' },
  { value: 7, title: '7월', name: 'month' },
  { value: 8, title: '8월', name: 'month' },
  { value: 9, title: '9월', name: 'month' },
  { value: 10, title: '10월', name: 'month' },
  { value: 11, title: '11월', name: 'month' },
  { value: 12, title: '12월', name: 'month' },
];
const reservationValue = [
  { value: 1, title: '예약완료', name: 'reservation' },
  { value: 2, title: '예약취소', name: 'reservation' },
  { value: 3, title: '예약대기', name: 'reservation' },
];
const sellerValue = [
  { value: 0, title: '상호선택', name: 'seller' },
  { value: 1, title: 'kh딸기농장', name: 'seller' },
  { value: 2, title: '규하네딸기농장', name: 'seller' },
  { value: 3, title: '대구메론농장', name: 'seller' },
  { value: 4, title: '춘천토마토농장', name: 'seller' },
  { value: 5, title: '남해굴캐기', name: 'seller' },
  { value: 6, title: '남해시금치캐기', name: 'seller' },
  { value: 7, title: '제주도귤따기', name: 'seller' },
  { value: 8, title: '갯벌체험', name: 'seller' },
];
const eventRequestStatusValue = [
  { value: 1, title: '요청완료', name: 'eventReqeustStatus' },
  { value: 2, title: '검토중', name: 'eventReqeustStatus' },
  { value: 3, title: '승인 및 게시 대기', name: 'eventReqeustStatus' },
  { value: 4, title: '기각', name: 'eventReqeustStatus' },
  { value: 5, title: '종료', name: 'eventReqeustStatus' },
];
const eventProgressStatusValue = [
  { value: 0, title: '응모상태', name: 'eventProgressStatus' },
  { value: 1, title: '참여 예정', name: 'eventProgressStatus' },
  { value: 2, title: '결과 대기', name: 'eventProgressStatus' },
  { value: 3, title: '당첨', name: 'eventProgressStatus' },
  { value: 4, title: '꽝', name: 'eventProgressStatus' },
  { value: 5, title: '참여 완료', name: 'eventProgressStatus' },
  { value: 6, title: '취소', name: 'eventProgressStatus' },
];
const eventRecruitValue = [
  { value: 1, title: '선착순', name: 'eventRecruit' },
  { value: 2, title: '랜덤추첨', name: 'eventRecruit' },
  { value: 3, title: '조건에 맞는 신청만', name: 'eventRecruit' },
  { value: 4, title: '사연뽑기', name: 'eventRecruit' },
];

export default function SelectDateValue({
  selectType,
  sido,
  values,
  setValues,
  sigungu,
  setSigungu,
}) {
  useEffect(() => {
    if (selectType === 'dateType') {
      setValues((draft) => {
        draft.length = 0;
        dateValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'sido') {
      setValues((draft) => {
        draft.length = 0;
        sidoValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'sido') {
      setValues((draft) => {
        draft.length = 0;
        sidoValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'sigungu') {
      setSigungu((draft) => {
        draft.length = 0;
        sigunguValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'theme') {
      setValues((draft) => {
        draft.length = 0;
        themeValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'month') {
      setValues((draft) => {
        draft.length = 0;
        monthValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'reservation') {
      setValues((draft) => {
        draft.length = 0;
        reservationValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'seller') {
      setValues((draft) => {
        draft.length = 0;
        sellerValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'eventRequestStatus') {
      setValues((draft) => {
        draft.length = 0;
        eventRequestStatusValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'eventRecruit') {
      setValues((draft) => {
        draft.length = 0;
        eventRecruitValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
    if (selectType === 'eventProgressStatus') {
      setValues((draft) => {
        draft.length = 0;
        eventProgressStatusValue.forEach((item) => {
          draft.push({
            ...item,
          });
        });
      });
    }
  }, [selectType]);

  useEffect(() => {
    const sidoNumber = parseInt(sido, 10);
    setSigungu((draft) => {
      draft.length = 0;
      draft.push(...sigunguValue.filter((item) => item.sidoNo === sidoNumber));
    });
  }, [sido]);

  return (
    <>
      {selectType === 'sigungu'
        ? sigungu.map((item) => (
            <option key={`${selectType}_${item.value}`} value={item.value}>
              {item.title}
            </option>
          ))
        : values.map((item) => (
            <option key={`${selectType}_${item.value}`} value={item.value}>
              {item.title}
            </option>
          ))}
    </>
  );
}
