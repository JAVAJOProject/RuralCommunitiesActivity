import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import {
  fetchDataPOSTAndObj,
  fetchOneContentGET,
} from '../../../../config/ApiService';

import CommunityPickImages from '../../../../components/Service/community/community/pickImg/CommunityPickImages';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CommunityInputContent from '../../../../components/Service/community/community/contentInput/CommunityInputContent';
import CommunityMiddleBtn from '../../../../components/Service/community/community/buttons/CommunityMiddleBtn';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import AppYNModal from '../../../../components/Service/common/Modal/AppYNModal';

import pickYellow from '../../../../view_img/Service/community/community/communityYellow.png';
import pickGreen from '../../../../view_img/Service/community/community/communityGreen.png';

const communityContentEditApi = '/community/seller/post/update';

const modalConfirmContents = {
  success: {
    titleText: '게시글 수정 성공',
    contentText: '게시글이 성공적으로 수정되었습니다.',
  },
  failure: {
    titleText: '게시글 수정 실패',
    contentText: '게시글 수정을 실패하였습니다.',
  },
  invalidValueMissing: {
    titleText: '게시글 수정 실패',
    contentText: '내용을 입력하셔야합니다.',
  },
};
const modalYNContents = {
  titleText: '게시글 수정 취소',
  contentText:
    '정말로 수정을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
  yesText: '수정 취소',
};

const defaultContents = {
  editBtn: {
    text: '수정하기',
    async edit(postId, setModalOpen, setModalText, setEditSuccess, inputRef) {
      if (inputRef.current.validity.valueMissing) {
        setModalText(modalConfirmContents.invalidValueMissing);
        setModalOpen(true);
        return;
      }

      try {
        const result = await fetchDataPOSTAndObj(communityContentEditApi, {
          sellerCommunityPostId: postId,
          sellerCommunityContent: inputRef.current.value,
        });

        if (result.resultMsg === '수정 성공') {
          setEditSuccess(true);
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
    text: '수정 취소',
    cancel(navigate) {
      navigate(-1);
    },
  },
  pickImages: {
    yellow: pickYellow,
    green: pickGreen,
  },
};

export default function CommunitySellerEditPage() {
  const { sellerCommunityPostId } = useParams();
  const [dbContents, updateDbContents] = useImmer({});

  useEffect(() => {
    async function fetchContents() {
      const communityPost = await fetchOneContentGET(
        `/community/seller/post-detail/${sellerCommunityPostId}`
      );
      updateDbContents(communityPost);
    }
    fetchContents();
  }, [sellerCommunityPostId]);

  const textareaRef = useRef(null);
  const navigate = useNavigate();
  const [confirmModalText, setConfirmModalText] = useState(
    modalConfirmContents.failure
  );
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [ynModalOpen, setYnModalOpen] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [wasValidated, setWasValidated] = useState(false);

  const { editBtn, cancelBtn, pickImages } = defaultContents;

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
            text={editBtn.text}
            handleClick={() => {
              setWasValidated(true);
              editBtn.edit(
                dbContents?.sellerCommunityPostId,
                setConfirmModalOpen,
                setConfirmModalText,
                setEditSuccess,
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
            defaultValue={dbContents?.sellerCommunityContent}
          />
        </CardListContentBox>
      </div>

      <AppConfirmModal
        texts={confirmModalText}
        isOpen={confirmModalOpen}
        confirmModal={() => {
          if (editSuccess) {
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
