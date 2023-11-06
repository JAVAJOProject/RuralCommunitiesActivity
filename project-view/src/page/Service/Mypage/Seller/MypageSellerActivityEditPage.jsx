import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
import { fetchFormETCAndObj } from '../../../../config/ApiService';

import TotalActRegistrationTitle from '../../../../components/Service/totalActivity/Registration/TotalActRegistrationTitle';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';
import MypageSellerActivityEditContents from '../../../../components/Service/mypage/Provider/ActivityEdit/MypageSellerActivityEditContents';

import registrationImg from '../../../../view_img/Service/totalActivity/registration/registration.jpg';

const totalActivityRegistrationApi = ''; // 수정api

const modalConfirmContents = {
  success: {
    titleText: '체험 수정 성공',
    contentText: '체험이 성공적으로 수정되었습니다.',
  },
  failure: {
    titleText: '체험 수정 실패',
    contentText: '체험 수정을 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '체험 수정 실패',
    contentText: '필수 항목을 입력하지 않으셨습니다.',
  },
  invalidPatternMismatch: {
    titleText: '체험 수정 실패',
    contentText: '항목을 잘못 입력하셨습니다.',
  },
};
const modalYNContents = {
  titleText: '체험 수정 취소',
  contentText:
    '정말로 수정을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  yesText: '수정 취소',
};

const defaultContents = {
  titles: {
    mainTitle: '수정하기',
    subtitle: '* 수정 내역은 마이페이지에서 확인하실 수 있습니다. *',
    imgSrc: registrationImg,
  },
  inputContents: {
    postId: {
      inputName: 'aId'
    },
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
      inputName: 'aThemeId',
      inputValue: [1, 2, 3, 4],
      inputLabel: ['농촌', '어촌', '전통', '기타'],
    },
    price: {
      labelText: '체험 금액',
      type: 'thin',
      inputName: 'aCharge',
    },
    period: {
      labelText: '체험 기간',
      type: 'thin',
      inputName: ['aStartDate', 'aEndDate'],
    },
    reservationPeriod: {
      labelText: '예약 기간',
      type: 'thin',
      inputName: ['aReservationStartDate', 'aReservationDeadline'],
    },
    minPeople: {
      labelText: '예약 최소 인원',
      type: 'thin',
      inputName: 'aMinPeople',
    },
    maxPeople: {
      labelText: '예약 최대 인원',
      type: 'thin',
      inputName: 'aMaxPeople',
    },
    addr: {
      labelText: '체험 주소',
      type: 'image',
      inputName: 'aAddr',
    },
    region: {
      labelText: '지역 선택',
      type: 'thin',
      inputName: ['region', 'sidoId', 'sigunguId'],
    },
    detail: {
      labelText: '체험 내용 작성',
      type: 'thinTextArea',
      inputName: 'aPostContent',
    },
    buttons: {
      submit: {
        text: '체험 수정하기',
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
              '.mypageSellerActivityEditContents input, .mypageSellerActivityEditContents textarea, .mypageSellerActivityEditContents select'
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
            const result = await fetchFormETCAndObj(
              totalActivityRegistrationApi,
              'PUT',
              formRef,
              true
            );

            if (result && result === 'Post edit successful') {
              handleModalTexts(modalConfirmContents.success);
              handleModalBtn(true);
              handleModalOpen(true);
            } else {
              handleModalOpen(true);
            }
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

const testDbContents = {
  aId: 1,
  aPostId: 1,
  aName: '전통 요리 체험',
  aOneLiner: '전통 요리 체험 한 줄 소개',
  aThemeId: 3,
  aCharge: 10000,
  aStartDate: '2023-11-01',
  aEndDate: '2023-12-31',
  aReservationDeadline: '2023-11-20',
  aMinPeople: 3,
  aMaxPeople: 30,
  aAddr: '서울 성북구청',
  sidoId: 1,
  sigunguId: 5,
  aPostContent: '체험 내용 어쩌구 저쩌구',
};

export default function MypageSellerActivityEditPage() {
  const [regionSido, updateRegionSido] = useImmer(testRegionSido);
  const [regionSigungu, updateRegionSigungu] = useImmer([]);
  const [selectedSidoId, setSelectedSidoId] = useState('');
  const [dbContents, updateDbContents] = useImmer(testDbContents);

  useEffect(() => {
    setSelectedSidoId(dbContents.sidoId);
  }, []);
  useEffect(() => {
    if (selectedSidoId === 1) {
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
        <TotalActRegistrationTitle
          imgSrc={titles.imgSrc}
          mainTitle={titles.mainTitle}
          subtitle={titles.subtitle}
        />
        <MypageSellerActivityEditContents
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
          data={dbContents}
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
