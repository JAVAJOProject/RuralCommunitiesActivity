import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFormPOSTAndObj } from '../../../../config/ApiService';

import InquiryPostTitle from '../../../../components/Service/customerCenter/inquiry/inquiryPost/title/InquiryPostTitle';
import InquiryPostContent from '../../../../components/Service/customerCenter/inquiry/inquiryPost/content/InquiryPostContent';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

import titleImg from '../../../../view_img/Service/customerService/inquiryPost.svg';
import { useImmer } from 'use-immer';
import InquiryEditContents from '../../../../components/Service/customerCenter/inquiry/inquiryPost/content/InquiryEditContents';

const inquiryRegistrationApi = '/inquiry/detail/insert';

const modalConfirmContents = {
  success: {
    titleText: '문의글 수정 성공',
    contentText: '문의글이 성공적으로 수정되었습니다.',
  },
  failure: {
    titleText: '문의글 수정 실패',
    contentText: '문의글 수정을 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '문의글 수정 실패',
    contentText: '필수 항목을 입력하지 않으셨습니다.',
  },
  invalidPatternMismatch: {
    titleText: '문의글 수정 실패',
    contentText: '항목을 잘못 입력하셨습니다.',
  },
};
const modalYNContents = {
  titleText: '문의글 수정 취소',
  contentText:
    '정말로 수정을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  yesText: '수정 취소',
};

const defaultContents = {
  title: {
    text: '1:1 문의 수정하기',
    imgSrc: titleImg,
  },
  inputContents: {
    postNo: {
      inputName: 'inquiryId',
    },
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

const testContents = {
  inquiryId: 1,
  inquiryStatusId: 4,
  inquiryStatus: '답변완료',
  inquiryTitle: '농어촌 콜라보 제안 관련해서 문의 드립니다.',
  memId: 1,
  userInfo: {
    uId: 3,
    memTypeId: 1,
    uName: '이름임',
    uNick: '프레첼',
    sId: null,
    sComName: null,
  },
  inquiryDateCreated: '2023-09-19',
  inquiryContent: `안녕하세요. 한국농어촌공사 연구기획부 대리 000입니다.
이번에 저희 팀에서 2023년 9월 5일 ~ 2023년 9월 10일까지 농어촌 관련 연구를 위해 00지역 **마을에서 워크숍을 진행하려고 합니다. 워크숍 기간에 마을 체험을 오는 체험자들과 00콜라보를 진행하려고 하는데 어떠한 절차를 거쳐야 하는지 알려주시면 감사하겠습니다.`,
  // inquiryA: `안녕하세요. 콜라보 제안 담당자 ***입니다. 우선 제안을 해주신 것에 감사합니다.
  // 기획안을 wooril@java.jo로 보내주시면 내부 검토 후 연락드립니다.
  // 자세한 사항은 010-0000-0000으로 연락주시면 답변드리겠습니다.`,
};

export default function InquiryEditPage() {
  const { inquiryId } = useParams();
  const [dbContents, updateDbContents] = useImmer({});
  useEffect(() => {
    updateDbContents(testContents);
  }, [inquiryId]);

  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [modalConfirmTexts, setModalConfirmTexts] = useState(
    modalConfirmContents.failure
  );
  const [modalConfirmSuccess, setModalConfirmSuccess] = useState(false);
  const [modalYNOpen, setModalYNOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/app/customerService/inquiry/detail/${inquiryId}`);
    window.scrollTo(0, 0);
  };

  const { title, inputContents } = defaultContents;

  return (
    <>
      <div>
        <InquiryPostTitle title={title.text} imgSrc={title.imgSrc} />
        {dbContents?.inquiryId && (
          <InquiryEditContents
            inputContents={inputContents}
            handleConfirmModalSet={{
              handleOpen: setModalConfirmOpen,
              handleTexts: setModalConfirmTexts,
              handleBtn: setModalConfirmSuccess,
            }}
            handleYNModalSet={{ handleOpen: setModalYNOpen }}
            data={dbContents}
          />
        )}
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
