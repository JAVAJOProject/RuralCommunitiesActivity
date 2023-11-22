import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import {
  fetchFormPOSTAndObj,
  fetchOneContentGET,
} from '../../../../config/ApiService';

import EventRegistrationTitles from '../../../../components/Service/community/event/Registration/Title/EventRegistrationTitles';
import EventApplyEditContents from '../../../../components/Service/community/event/EventApply/EventApplyEditContents';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

const eventApplyEditApi = '/event/apply/story';

const modalConfirmContents = {
  success: {
    titleText: '사연 수정 완료',
    contentText:
      '사연 수정을 완료하였습니다. 신청 현황은 마이페이지에서 확인하실 수 있습니다.',
  },
  failure: {
    titleText: '사연 수정 실패',
    contentText: '사연 수정에 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '사연 수정 실패',
    contentText: '필수 항목을 입력하지 않으셨습니다.',
  },
};
const modalYNContents = {
  titleText: '사연 수정 취소',
  contentText: '정말로 사연 수정을 취소하시겠습니까?',
  yesText: null,
};

const defaultContents = {
  titles: {
    main: '이벤트',
    sub: '* 이벤트 응모 결과는 모집마감 후 마이페이지에서 확인하실 수 있습니다. *',
  },
  inputContents: {
    postId: {
      inputName: 'eventId',
    },
    reportId: {
      inputName: 'eventReportId',
    },
    title: {
      labelText: '이벤트 제목',
      type: 'thin',
      inputName: 'eventName',
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
    detail: {
      labelText: '사연',
      type: 'thickTextArea',
      inputName: 'eventStory',
    },
    buttons: {
      submit: {
        text: '사연 수정하기',
        type: 'button',
        async submit(
          e,
          handleModalOpen,
          handleModalTexts,
          handleModalBtn,
          formRef,
          handleWasValidated,
          eventReportId
        ) {
          e.preventDefault();

          handleWasValidated(true);

          const inputs = Array.from(
            formRef.current.querySelectorAll(
              '.eventApplyContents input, .eventApplyContents textarea, .eventApplyContents select'
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

          try {
            const result = await fetchFormPOSTAndObj(
              `${eventApplyEditApi}?eventReportId=${eventReportId}`,
              formRef
            );

            if (result.resultMsg && result.resultMsg === '수정 완료') {
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

export default function EventApplyStoryEditPage() {
  const { eventReportId } = useParams();

  const [dataContents, updateDataContents] = useImmer({});

  useEffect(() => {
    async function fetchContents() {
      try {
        const eventStoryData = await fetchOneContentGET(
          `/event/apply/story?eventReportId=${eventReportId}`
        );
        const eventData = await fetchOneContentGET(
          `/event/event-detail/${eventStoryData.eventId}`
        );
        updateDataContents({ ...eventData, ...eventStoryData });
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [eventReportId]);

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
        <EventApplyEditContents
          labelTexts={inputContents}
          data={dataContents}
          eventType={dataContents?.eventRecruitTypeId}
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
