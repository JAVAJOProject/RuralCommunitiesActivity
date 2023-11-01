import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
import { fetchDataAndImgPOST } from '../../../config/ApiService';

import RecTownReportTitle from '../../../components/Service/recTown/reportTitle/RecTownReportTitle';
import RecTownReportContents from '../../../components/Service/recTown/reportContent/RecTownReportContents';
import AppConfirmModal from '../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../components/Service/common/Modal/AppYNModal';

import townReportImg from '../../../view_img/Service/recTown/report.jpg';

const recTownReportApi = '/recommendation/registration';

const modalConfirmContents = {
  success: {
    titleText: '마을 제보 완료',
    contentText: '마을 제보를 완료하였습니다.',
  },
  failure: {
    titleText: '마을 제보 실패',
    contentText: '마을 제보를 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '마을 제보 실패',
    contentText: '필수 항목을 입력하지 않으셨습니다.',
  },
  invalidPatternMismatch: {
    titleText: '마을 제보 실패',
    contentText: '항목을 잘못 입력하셨습니다.',
  },
};
const modalYNContents = {
  titleText: '마을 제보 취소',
  contentText:
    '정말로 작성을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  yesText: '제보 취소',
};

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
      inputName: 'tRTitle',
    },
    townName: {
      labelText: '마을 이름',
      type: 'thin',
      inputName: 'tRName',
    },
    region: {
      labelText: '지역 선택',
      thin: 'thin',
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
      labelText: '제보할 내용',
      type: 'thinTextArea',
      inputName: 'tRContent',
    },
    buttons: {
      submit: {
        text: '마을 제보하기',
        type: 'button',
        async submit(
          e,
          handleModalOpen,
          handleModalTexts,
          handleModalBtn,
          formRef,
          handleWasValidated
        ) {
          e.preventDefault();

          handleWasValidated(true);

          const inputs = Array.from(
            formRef.current.querySelectorAll(
              '.recTownReportContents input, .recTownReportContents textarea, .recTownReportContents select'
            )
          );

          const valueMissing = inputs.some(
            (item) => item.validity.valueMissing
          );
          if (valueMissing) {
            handleModalTexts(modalConfirmContents.invalidValueMissing);
            handleModalOpen(true);
            return;
          }

          const patternMismatch = inputs.some(
            (item) => item.validity.patternMismatch
          );
          if (patternMismatch) {
            handleModalTexts(modalConfirmContents.invalidPatternMismatch);
            handleModalOpen(true);
            return;
          }

          try {
            await fetchDataAndImgPOST(recTownReportApi, formRef);

            handleModalTexts(modalConfirmContents.success);
            handleModalBtn(true);
            handleModalOpen(true);
          } catch (error) {
            console.error(error);
            handleModalOpen(true);
          }
        },
      },
      cancel: {
        text: '입력 취소',
        type: 'reset',
        cancel(e, handleModalOpen) {
          e.preventDefault();

          handleModalOpen(true);
        },
      },
    },
  },
};

const testRegionSido = [
  { sidoName: '서울', sidoId: 1 },
  { sidoName: '경기', sidoId: 2 },
  { sidoName: '인천', sidoId: 3 },
  { sidoName: '충북', sidoId: 4 },
  { sidoName: '세종', sidoId: 5 },
  { sidoName: '대전', sidoId: 6 },
  { sidoName: '충남', sidoId: 7 },
  { sidoName: '전북', sidoId: 8 },
  { sidoName: '전남', sidoId: 9 },
  { sidoName: '광주', sidoId: 10 },
  { sidoName: '강원', sidoId: 11 },
  { sidoName: '경북', sidoId: 12 },
  { sidoName: '대구', sidoId: 13 },
  { sidoName: '경남', sidoId: 14 },
  { sidoName: '부산', sidoId: 15 },
  { sidoName: '울산', sidoId: 16 },
  { sidoName: '제주', sidoId: 17 },
];
const testRegionSigungu = [
  { sidoId: 1, sigunguName: '도봉', sigunguId: 1 },
  { sidoId: 1, sigunguName: '노원', sigunguId: 2 },
  { sidoId: 1, sigunguName: '강북', sigunguId: 3 },
  { sidoId: 1, sigunguName: '중랑', sigunguId: 4 },
  { sidoId: 1, sigunguName: '성북', sigunguId: 5 },
  { sidoId: 1, sigunguName: '종로', sigunguId: 6 },
  { sidoId: 1, sigunguName: '동대문', sigunguId: 7 },
  { sidoId: 1, sigunguName: '은평', sigunguId: 8 },
  { sidoId: 1, sigunguName: '서대문', sigunguId: 9 },
  { sidoId: 1, sigunguName: '용산', sigunguId: 10 },
  { sidoId: 1, sigunguName: '중(구)', sigunguId: 11 },
  { sidoId: 1, sigunguName: '성동', sigunguId: 12 },
  { sidoId: 1, sigunguName: '광진', sigunguId: 13 },
  { sidoId: 1, sigunguName: '강동', sigunguId: 14 },
  { sidoId: 1, sigunguName: '송파', sigunguId: 15 },
  { sidoId: 1, sigunguName: '강남', sigunguId: 16 },
  { sidoId: 1, sigunguName: '서초', sigunguId: 17 },
  { sidoId: 1, sigunguName: '관악', sigunguId: 18 },
  { sidoId: 1, sigunguName: '동작', sigunguId: 19 },
  { sidoId: 1, sigunguName: '금천', sigunguId: 20 },
  { sidoId: 1, sigunguName: '영등포', sigunguId: 21 },
  { sidoId: 1, sigunguName: '양천', sigunguId: 22 },
  { sidoId: 1, sigunguName: '구로', sigunguId: 23 },
  { sidoId: 1, sigunguName: '강서', sigunguId: 24 },
  { sidoId: 1, sigunguName: '마포', sigunguId: 25 },
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

  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [modalConfirmTexts, setModalConfirmTexts] = useState(
    modalConfirmContents.failure
  );
  const [modalConfirmSuccess, setModalConfirmSuccess] = useState(false);
  const [modalYNOpen, setModalYNOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  const { titles, inputContents } = defaultContents;

  return (
    <>
      <div>
        <RecTownReportTitle
          imgSrc={titles.imgSrc}
          mainTitle={titles.mainTitle}
          subtitle={titles.subtitle}
        />
        <RecTownReportContents
          labelTexts={inputContents}
          regionSido={regionSido}
          regionSigungu={regionSigungu}
          selectedSido={[selectedSidoId, setSelectedSidoId]}
          handleConfirmModalSet={{
            handleOpen: setModalConfirmOpen,
            handleTexts: setModalConfirmTexts,
            handleBtn: setModalConfirmSuccess,
          }}
          handleYNModalSet={{ handleOpen: setModalYNOpen }}
        />
      </div>

      <AppConfirmModal
        texts={modalConfirmTexts}
        isOpen={modalConfirmOpen}
        confirmModal={
          modalConfirmSuccess
            ? handleNavigate
            : () => {
                setModalConfirmOpen(false);
                setModalConfirmTexts(modalConfirmContents.failure);
              }
        }
      />
      <AppYNModal
        texts={modalYNContents}
        isOpen={modalYNOpen}
        yesAction={handleNavigate}
        noAction={() => {
          setModalYNOpen(false);
        }}
      />
    </>
  );
}
