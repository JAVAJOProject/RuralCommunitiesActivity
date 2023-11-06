import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
import {
  fetchFormETCAndObj,
} from '../../../../config/ApiService';

import EventRegistrationTitles from '../../../../components/Service/community/event/Registration/Title/EventRegistrationTitles';
import MypageSellerEventEditContents from '../../../../components/Service/mypage/Provider/EventEdit/MypageSellerEventEditContents';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

const eventEditApi = '';

const modalConfirmContents = {
  success: {
    titleText: '이벤트 수정 성공',
    contentText: '이벤트가 성공적으로 수정되었습니다.',
  },
  failure: {
    titleText: '이벤트 수정 실패',
    contentText: '이벤트 수정을 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '이벤트 수정 실패',
    contentText: '필수 항목을 입력하지 않으셨습니다.',
  },
  invalidPatternMismatch: {
    titleText: '이벤트 수정 실패',
    contentText: '항목을 잘못 입력하셨습니다.',
  },
};
const modalYNContents = {
  titleText: '이벤트 수정 취소',
  contentText:
    '정말로 수정을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  yesText: '수정 취소',
};

const defaultContents = {
  titles: {
    main: '이벤트 수정하기',
    sub: '* 수정 내역은 마이페이지에서 확인하실 수 있습니다. *',
  },
  inputContents: {
    postId: {
      inputName: 'eventId',
    },
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
    detail: {
      labelText: '이벤트 상세내용',
      type: 'thinTextArea',
      inputName: 'eventContent',
    },
    buttons: {
      submit: {
        text: '이벤트 수정하기',
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
              '.mypageSellerEventEditContents input, .mypageSellerEventEditContents textarea, .mypageSellerEventEditContents select'
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
            await fetchFormETCAndObj(eventEditApi, 'POST', formRef);

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

const testDbContents = {
  eventId: 1,
  eventName: '이벤트 이름 어쩌구',
  eventRecruitTypeId: 4,
  eventRecruitStartDate: '2023-10-15',
  eventRecruitEndDate: '2023-12-01',
  eventStartDate: '2023-11-15',
  eventEndDate: '2023-12-31',
  eventAddr: '이벤트 주소 들어갈 곳',
  eventMaxPeople: 30,
  eventContent: '이벤트 내용 어쩌구',
};

export default function MypageSellerEventEditPage() {
  const [dbContents, updateDbContents] = useImmer(testDbContents);

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
        <MypageSellerEventEditContents
          labelTexts={inputContents}
          handleConfirmModalSet={{
            handleOpen: setModalConfirmOpen,
            handleTexts: setModalConfirmTexts,
            handleBtn: setModalConfirmSuccess,
          }}
          handleYNModalSet={{ handleOpen: setModalYNOpen }}
          data={dbContents}
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
