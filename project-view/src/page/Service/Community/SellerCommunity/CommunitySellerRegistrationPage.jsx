import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDataPOSTAndObj } from '../../../../config/ApiService';

import CommunityPickImages from '../../../../components/Service/community/community/pickImg/CommunityPickImages';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CommunityInputContent from '../../../../components/Service/community/community/contentInput/CommunityInputContent';
import CommunityMiddleBtn from '../../../../components/Service/community/community/buttons/CommunityMiddleBtn';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

import pickYellow from '../../../../view_img/Service/community/community/communityYellow.png';
import pickGreen from '../../../../view_img/Service/community/community/communityGreen.png';

const communityContentRegistrationApi = '/community/seller/post/upload';

const modalConfirmContents = {
  success: {
    titleText: '게시글 등록 성공',
    contentText: '게시글이 성공적으로 등록되었습니다.',
  },
  failure: {
    titleText: '게시글 등록 실패',
    contentText: '게시글 등록을 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '게시글 등록 실패',
    contentText: '내용을 입력하셔야합니다.',
  },
};
const modalYNContents = {
  titleText: '게시글 등록 취소',
  contentText:
    '정말로 작성을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  yesText: '작성 취소',
};

const defaultContents = {
  registrationBtn: {
    text: '등록하기',
    async regist(setModalOpen, setModalText, setRegistSuccess, inputRef) {
      if (inputRef.current.validity.valueMissing) {
        setModalText(modalConfirmContents.invalidValueMissing);
        setModalOpen(true);
        return;
      }

      try {
        const result = await fetchDataPOSTAndObj(
          communityContentRegistrationApi,
          { sellerCommunityContent: inputRef.current.value }
        );
        
        if (result.resultMsg === '등록 성공') {
          setRegistSuccess(true);
          setModalText(modalConfirmContents.success);
          setModalOpen(true);
        } else {
          setModalOpen(true);
        }
      } catch (error) {
        setModalOpen(true);
      }
    },
  },
  cancelBtn: {
    text: '작성 취소',
    cancel(navigate) {
      navigate(-1);
    },
  },
  pickImages: {
    yellow: pickYellow,
    green: pickGreen,
  },
};

export default function CommunitySellerRegistrationPage() {
  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const [confirmModalText, setConfirmModalText] = useState(
    modalConfirmContents.failure
  );
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [ynModalOpen, setYnModalOpen] = useState(false);
  const [registSuccess, setRegistSuccess] = useState(false);
  const [wasValidated, setWasValidated] = useState(false);

  const { registrationBtn, cancelBtn, pickImages } = defaultContents;

  return (
    <div>
      <div
        style={{
          margin: 'auto',
          position: 'relative',
          zIndex: '550',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            top: '-5rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CommunityMiddleBtn
            type="submit"
            text={registrationBtn.text}
            handleClick={() => {
              setWasValidated(true);
              registrationBtn.regist(
                setConfirmModalOpen,
                setConfirmModalText,
                setRegistSuccess,
                textareaRef
              );
              setConfirmModalOpen(true);
            }}
            style={{ marginBottom: '-5rem' }}
          />
          <CommunityMiddleBtn
            type="button"
            text={cancelBtn.text}
            handleClick={() => {
              setYnModalOpen(true);
            }}
            style={{ marginBottom: '-5rem' }}
          />
        </div>
      </div>
      <CommunityPickImages
        imgPickLeft={pickImages.yellow}
        imgPickRight={pickImages.green}
      />
      <div style={{ paddingBottom: '3.5rem' }}>
        <CardListContentBox
          style={{
            width: '68.5rem',
            paddingLeft: 0,
            paddingRight: 0,
            marginBottom: 0,
          }}
        >
          <CommunityInputContent
            textareaRef={textareaRef}
            wasValidated={wasValidated}
          />
        </CardListContentBox>
      </div>

      <AppConfirmModal
        texts={confirmModalText}
        isOpen={confirmModalOpen}
        confirmModal={() => {
          if (registSuccess) {
            setConfirmModalOpen(false);
            navigate(-1);
          } else {
            setConfirmModalOpen(false);
          }
          setConfirmModalText(modalConfirmContents.failure);
        }}
      />
      <AppYNModal
        texts={modalYNContents}
        isOpen={ynModalOpen}
        yesAction={() => {
          setYnModalOpen(false);
          cancelBtn.cancel(navigate);
        }}
        noAction={() => {
          setYnModalOpen(false);
        }}
      />
    </div>
  );
}
