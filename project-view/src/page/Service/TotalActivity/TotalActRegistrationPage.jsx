import React, { useEffect, useState } from 'react';
import TotalActRegistrationTitle from '../../../components/Service/totalActivity/Registration/TotalActRegistrationTitle';

import registrationImg from '../../../view_img/Service/totalActivity/registration/registration.jpg';
import TotalActRegistrationContents from '../../../components/Service/totalActivity/Registration/TotalActRegistrationContents';
import { useImmer } from 'use-immer';

const defaultContents = {
  titles: {
    mainTitle: '등록하기',
    subtitle: '* 등록 내역은 마이페이지에서 확인하실 수 있습니다. *',
    imgSrc: registrationImg,
  },
  inputContents: {
    title: {
      labelText: '체험명',
      type: 'thin',
      inputName: 'aName',
    },
    oneLiner: {
      labelText: '한 줄 소개',
      type: 'thin',
      inputName: 'aOneLiner',
    },
    themeType: {
      labelText: '테마 선택',
      type: 'thin',
      inputName: 'aTypeId',
      inputValue: [1, 2, 3, 4],
      inputLabel: ['농촌', '어촌', '전통', '기타'],
    },
    price: {
      labelText: '체험 금액',
      type: 'thin',
      inputName: 'aPrice',
    },
    period: {
      labelText: '체험 기간',
      type: 'thin',
      inputName: ['startDate', 'endDate'],
    },
    reservationPeriod: {
      labelText: '예약 기간',
      type: 'thin',
      inputName: ['recruitStartDate', 'recruitEndDate'],
    },
    minPeople: {
      labelText: '예약 최소 인원',
      type: 'thin',
      inputName: 'minPeople',
    },
    maxPeople: {
      labelText: '예약 최대 인원',
      type: 'thin',
      inputName: 'maxPeople',
    },
    addr: {
      labelText: '체험 주소',
      type: 'image',
      inputName: 'addr',
    },
    region: {
      labelText: '지역 선택',
      type: 'thin',
      inputName: ['region', 'sido', 'sigungu'],
    },
    images: {
      labelText: ['이미지\n\n(첫번째 이미지가\n대표이미지가 됩니다.)'],
      type: 'image',
      inputName: 'files',
      isFileRequired: true,
      fileBtnText: '파일 선택',
      fileLimitText: '첨부파일은 500MB 이하의 jpg, png 파일 5개 이하까지 가능',
    },
    detail: {
      labelText: '체험 내용 작성',
      type: 'thinTextArea',
      inputName: 'aContent',
    },
    buttons: {
      submit: { text: '체험 등록하기', type: 'button' },
      cancel: { text: '입력 취소', type: 'reset' },
    },
  },
};

const testRegionSido = [
  { text: '서울', typeId: 1 },
  { text: '경기', typeId: 2 },
  { text: '인천', typeId: 3 },
  { text: '충북', typeId: 4 },
  { text: '세종', typeId: 5 },
  { text: '대전', typeId: 6 },
  { text: '충남', typeId: 7 },
  { text: '전북', typeId: 8 },
  { text: '전남', typeId: 9 },
  { text: '광주', typeId: 10 },
  { text: '강원', typeId: 11 },
  { text: '경북', typeId: 12 },
  { text: '대구', typeId: 13 },
  { text: '경남', typeId: 14 },
  { text: '부산', typeId: 15 },
  { text: '울산', typeId: 16 },
  { text: '제주', typeId: 17 },
];
const testRegionSigungu = [
  { text: '도봉', typeId: 1 },
  { text: '노원', typeId: 2 },
  { text: '강북', typeId: 3 },
  { text: '중랑', typeId: 4 },
  { text: '성북', typeId: 5 },
  { text: '종로', typeId: 6 },
  { text: '동대문', typeId: 7 },
  { text: '은평', typeId: 8 },
  { text: '서대문', typeId: 9 },
  { text: '용산', typeId: 10 },
  { text: '중(구)', typeId: 11 },
  { text: '성동', typeId: 12 },
  { text: '광진', typeId: 13 },
  { text: '강동', typeId: 14 },
  { text: '송파', typeId: 15 },
  { text: '강남', typeId: 16 },
  { text: '서초', typeId: 17 },
  { text: '관악', typeId: 18 },
  { text: '동작', typeId: 19 },
  { text: '금천', typeId: 20 },
  { text: '영등포', typeId: 21 },
  { text: '양천', typeId: 22 },
  { text: '구로', typeId: 23 },
  { text: '강서', typeId: 24 },
  { text: '마포', typeId: 25 },
];

export default function TotalActRegistrationPage() {
  const [regionSido, updateRegionSido] = useImmer(testRegionSido);
  const [regionSigungu, updateRegionSigungu] = useImmer([]);
  const [selectedSidoId, setSelectedSidoId] = useState('');
  useEffect(() => {
    if (selectedSidoId === '1') {
      updateRegionSigungu((draft) => {
        draft.length = 0;
        testRegionSigungu.forEach((sigungu) => draft.push(sigungu));
      });
    } else {
      updateRegionSigungu([]);
    }
  }, [selectedSidoId]);

  const { titles, inputContents } = defaultContents;

  return (
    <div>
      <TotalActRegistrationTitle
        imgSrc={titles.imgSrc}
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
      />
      <TotalActRegistrationContents
        labelTexts={inputContents}
        api={''}
        method="post"
        regionSido={regionSido}
        regionSigungu={regionSigungu}
        selectedSido={[selectedSidoId, setSelectedSidoId]}
      />
    </div>
  );
}
