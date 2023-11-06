import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFormPOSTAndObj } from '../../../../config/ApiService';

import InquiryPostTitle from '../../../../components/Service/customerCenter/inquiry/inquiryPost/title/InquiryPostTitle';
import InquiryPostContent from '../../../../components/Service/customerCenter/inquiry/inquiryPost/content/InquiryPostContent';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

import titleImg from '../../../../view_img/Service/customerService/inquiryPost.svg';

const inquiryRegistrationApi = '/inquiry/detail/insert';

const modalConfirmContents = {
  success: {
    titleText: '문의글 등록 성공',
    contentText: '문의글이 성공적으로 등록되었습니다.',
  },
  failure: {
    titleText: '문의글 등록 실패',
    contentText: '문의글 등록을 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '문의글 등록 실패',
    contentText: '필수 항목을 입력하지 않으셨습니다.',
  },
  invalidPatternMismatch: {
    titleText: '문의글 등록 실패',
    contentText: '항목을 잘못 입력하셨습니다.',
  },
};
const modalYNContents = {
  titleText: '문의글 등록 취소',
  contentText:
    '정말로 작성을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  yesText: '작성 취소',
};

const defaultContents = {
  title: {
    text: '1:1 문의하기',
    imgSrc: titleImg,
  },
  inputContents: {
    title: {
      labelText: '제목',
      type: 'thin',
      inputName: 'inquiryTitle',
    },
    category: {
      labelText: '문의 카테고리',
      type: 'thin',
      inputName: 'inquiryTypeId',
      inputValue: [1, 2, 3, 4],
      inputLabel: ['건의 사항', '불편 사항', '콜라보 제안', '기타'],
    },
    detail: {
      labelText: '문의 내용',
      type: 'thickTextArea',
      inputName: 'inquiryContent',
    },
    buttons: {
      submit: {
        text: '문의하기',
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
              '.inquiryPostContent input, .inquiryPostContent textarea, .inquiryPostContent select'
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
            await fetchFormPOSTAndObj(inquiryRegistrationApi, formRef);

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

export default function InquiryPostPage() {
  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [modalConfirmTexts, setModalConfirmTexts] = useState(
    modalConfirmContents.failure
  );
  const [modalConfirmSuccess, setModalConfirmSuccess] = useState(false);
  const [modalYNOpen, setModalYNOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/app/customerService/inquiry/list');
  };

  const { title, inputContents } = defaultContents;

  return (
    <>
      <div>
        <InquiryPostTitle title={title.text} imgSrc={title.imgSrc} />
        <InquiryPostContent
          inputContents={inputContents}
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
