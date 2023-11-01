import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { fetchFormPOSTAndObj } from '../../../config/ApiService';

import TotalActReservationTitle from '../../../components/Service/totalActivity/Reservation/Title/TotalActReservationTitle';
import TotalActReservationContentsBoxSet from '../../../components/Service/totalActivity/Reservation/Contents/TotalActReservationContentsBoxSet';
import AppConfirmModal from '../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../components/Service/common/Modal/AppYNModal';

import reservationTitleImg from '../../../view_img/Service/totalActivity/reservation/title.svg';

const totalActivityReservationApi = '/regReservation/add';

const modalConfirmContents = {
  failure: {
    titleText: '체험 예약 실패',
    contentText: '체험 예약에 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '체험 예약 실패',
    contentText: '필수 항목을 입력하지 않으셨습니다.',
  },
  invalidPatternMismatch: {
    titleText: '체험 예약 실패',
    contentText: '항목을 잘못 입력하셨습니다.',
  },
};
const modalYNContents = {
  success: {
    titleText: '체험 예약 완료',
    contentText:
      '체험 예약을 완료하였습니다. 예약 현황은 마이페이지에서 확인하실 수 있습니다.',
    yesText: '지금 결제하기',
    noText: '나중에 결제하기',
  },
  cancel: {
    titleText: '체험 예약 취소',
    contentText: '정말로 예약을 취소하시겠습니까?',
    yesText: '예약 취소',
  },
};

const defaultContents = {
  titles: {
    mainTitle: '예약하기',
    subtitle: '* 예약 내역은 마이페이지에서 확인하실 수 있습니다. *',
    imgSrc: reservationTitleImg,
  },
  inputContents: {
    postId: {
      inputName: 'aId',
    },
    title: {
      labelText: '참여 체험명',
      type: 'thin',
      inputName: 'aName',
    },
    date: {
      labelText: '참여 일자',
      type: 'thin',
      inputName: 'reservationDate',
    },
    actAddr: {
      labelText: '참여 장소',
      type: 'thin',
      inputName: 'aAddr',
    },
    participant: {
      labelText: '예약자명',
      type: 'thin',
      inputName: 'participantName',
    },
    headCount: {
      labelText: '참여 인원',
      type: 'thin',
      inputName: 'reservationHeadcount',
    },
    payment: {
      labelText: '결제 금액',
      type: 'thin',
      inputName: 'payment',
    },
    paymentDeadline: {
      labelText: '결제 기한',
      type: 'thin',
      inputName: 'deadline',
    },
    map: {
      labelText: '약도보기',
      type: 'thinTextArea',
      inputName: 'map',
    },
    buttons: {
      submit: {
        text: '예약하기',
        type: 'button',
        async submit(
          e,
          handleModalOpen,
          handleModalTexts,
          handleModalBtn,
          formRef,
          handleWasValidated,
          handleSuccessModalTexts,
          handleSuccessModalOpen
        ) {
          e.preventDefault();

          handleWasValidated(true);

          const inputs = Array.from(
            formRef.current.querySelectorAll(
              '.totalActReservationContentsBoxSet input, .totalActReservationContentsBoxSet textarea, .totalActReservationContentsBoxSet select'
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
            const result = await fetchFormPOSTAndObj(
              totalActivityReservationApi,
              formRef
            );

            if (result && result === 'Registration successful') {
              handleSuccessModalTexts(modalYNContents.success);
              handleModalBtn(true);
              handleSuccessModalOpen(true);
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

const testContents = {
  aId: 1,
  aName: '전통 요리 체험',
  aStartDate: '2023-10-01',
  aEndDate: '2023-12-31',
  aAddr: '울산광역시 남구 중앙로 201',
  aCharge: 10000,
};

export default function TotalActReservationPage() {
  const { aPostId } = useParams();
  const [dbContents, updateDbContents] = useImmer(testContents);

  useEffect(() => {
    // 서버에서 받아와야 하는 임시 데이터
    updateDbContents((draft) => {
      draft.availablePeople = 30;
    });
    defaultContents.inputContents.participant.value = '김경미';
    // 여기서 서버로 넘길 때 결제 기한도 등록해야 함
  }, [aPostId]);

  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [modalConfirmTexts, setModalConfirmTexts] = useState(
    modalConfirmContents.failure
  );
  const [modalConfirmSuccess, setModalConfirmSuccess] = useState(false);
  const [modalYNOpen, setModalYNOpen] = useState(false);
  const [modalYNTexts, setModalYNTexts] = useState(modalYNContents.cancel);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  const { titles, inputContents } = defaultContents;

  return (
    <>
      <div>
        <TotalActReservationTitle
          imgSrc={titles.imgSrc}
          mainTitle={titles.mainTitle}
          subtitle={titles.subtitle}
        />
        <TotalActReservationContentsBoxSet
          contents={inputContents}
          data={dbContents}
          handleConfirmModalSet={{
            handleOpen: setModalConfirmOpen,
            handleTexts: setModalConfirmTexts,
            handleBtn: setModalConfirmSuccess,
          }}
          handleYNModalSet={{
            handleOpen: setModalYNOpen,
            handleTexts: setModalYNTexts,
            handleBtn: setModalConfirmSuccess,
          }}
        />
      </div>

      <AppConfirmModal
        texts={modalConfirmTexts}
        isOpen={modalConfirmOpen}
        confirmModal={() => {
          setModalConfirmOpen(false);
          setModalConfirmTexts(modalConfirmContents.failure);
        }}
      />
      <AppYNModal
        texts={modalYNTexts}
        isOpen={modalYNOpen}
        yesAction={
          modalConfirmSuccess
            ? () => {
                alert('[임시]결제 금액 있을 때 결제창 연결해야 함');
                navigate('..');
              }
            : handleNavigate
        }
        noAction={
          modalConfirmSuccess
            ? handleNavigate
            : () => {
                setModalYNOpen(false);
              }
        }
      />
    </>
  );
}
