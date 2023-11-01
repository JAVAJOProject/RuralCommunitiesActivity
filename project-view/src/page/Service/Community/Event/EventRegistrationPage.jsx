import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDataAndImgPOST } from '../../../../config/ApiService';

import EventRegistrationTitles from '../../../../components/Service/community/event/Registration/Title/EventRegistrationTitles';
import EventRegistrationSet from '../../../../components/Service/community/event/Registration/EventRegistrationSet';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

const eventRegistrationApi = '/event/registration';

const modalConfirmContents = {
  success: {
    titleText: '이벤트 등록 성공',
    contentText: '이벤트가 성공적으로 등록되었습니다.',
  },
  failure: {
    titleText: '이벤트 등록 실패',
    contentText: '이벤트 등록을 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '이벤트 등록 실패',
    contentText: '필수 항목을 입력하지 않으셨습니다.',
  },
  invalidPatternMismatch: {
    titleText: '이벤트 등록 실패',
    contentText: '항목을 잘못 입력하셨습니다.',
  },
};
const modalYNContents = {
  titleText: '이벤트 등록 취소',
  contentText:
    '정말로 작성을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  yesText: '작성 취소',
};

const defaultContents = {
  titles: {
    main: '이벤트 게재 요청하기',
    sub: '* 이벤트 카테고리는 참여자를 선별하는 방식을 뜻합니다. *',
  },
  inputContents: {
    title: {
      labelText: '이벤트 제목',
      type: 'thin',
      inputName: 'eventName',
    },
    category: {
      labelText: '이벤트 카테고리',
      type: 'thin',
      inputName: 'eventRecruitTypeId',
      inputValue: [1, 2, 3, 4],
      inputLabel: [
        '선착순 모집',
        '랜덤 모집',
        '조건에 맞는 신청만',
        '사연 뽑기',
      ],
    },
    recruitDate: {
      labelText: '모집 기간',
      type: 'thin',
      inputName: ['eventRecruitStartDate', 'eventRecruitEndDate'],
    },
    date: {
      labelText: '참여 기간',
      type: 'thin',
      inputName: ['eventStartDate', 'eventEndDate'],
    },
    addr: {
      labelText: '이벤트 장소',
      type: 'thin',
      inputName: 'eventAddr',
    },
    maxPeople: {
      labelText: '이벤트 모집인원',
      type: 'thin',
      inputName: 'eventMaxPeople',
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
      labelText: '이벤트 상세내용',
      type: 'thinTextArea',
      inputName: 'eventContent',
    },
    buttons: {
      submit: {
        text: '이벤트 게재 요청하기',
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
              '.eventRegistrationSet input, .eventRegistrationSet textarea, .eventRegistrationSet select'
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
            const result = await fetchDataAndImgPOST(
              eventRegistrationApi,
              formRef
            );

            if (result.resultMsg && result.resultMsg === 'succeeded') {
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

export default function EventRegistrationPage() {
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
      <main className="appMain">
        <EventRegistrationTitles titles={titles} />
        <EventRegistrationSet
          labelTexts={inputContents}
          handleConfirmModalSet={{
            handleOpen: setModalConfirmOpen,
            handleTexts: setModalConfirmTexts,
            handleBtn: setModalConfirmSuccess,
          }}
          handleYNModalSet={{ handleOpen: setModalYNOpen }}
        />
      </main>

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
