import React, { useEffect, useState } from 'react';

import townReportImg from '../../../view_img/Service/recTown/report.jpg';
import RecTownReportTitle from '../../../components/Service/recTown/reportTitle/RecTownReportTitle';
import { useImmer } from 'use-immer';
import RecTownReportContents from '../../../components/Service/recTown/reportContent/RecTownReportContents';

const defaultContents = {
  titles: {
    mainTitle: '마을 제보하기',
    subtitle: '* 추천하고 싶은 마을을 등록해주세요. *',
    imgSrc: townReportImg,
  },
  inputContents: {
    title: {
      labelText: '제목',
      type: 'thin',
      inputName: 'townReportTitle',
    },
    townName: {
      labelText: '마을 이름',
      type: 'thin',
      inputName: 'townName',
    },
    region: {
      labelText: '지역 선택',
      thin: 'thin',
      inputName: ['region', 'sido', 'sigungu'],
    },
    site: {
      labelText: '사이트',
      type: 'thin',
      inputName: 'townSite',
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
      labelText: '제보할 내용',
      type: 'thinTextArea',
      inputName: 'townReportContent',
    },
    buttons: {
      submit: { text: '마을 제보하기', type: 'button' },
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

export default function RecTownReportPage() {
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
      <RecTownReportTitle
        imgSrc={titles.imgSrc}
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
      />
      <RecTownReportContents
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
