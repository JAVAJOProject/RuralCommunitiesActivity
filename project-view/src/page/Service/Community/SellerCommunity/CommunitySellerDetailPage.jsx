import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchDataETCAndObj,
  fetchOneContentGET,
  fetchViewUpdate,
} from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CommunityPickImages from '../../../../components/Service/community/community/pickImg/CommunityPickImages';
import CommunityCumReportBtn from '../../../../components/Service/community/community/buttons/CommunityCumReportBtn';
import CommunityDetailContent from '../../../../components/Service/community/community/content/CommunityDetailContent';
import CommunityListBackBtn from '../../../../components/Service/community/community/buttons/CommunityListBackBtn';
import CommunityEditBtn from '../../../../components/Service/community/community/buttons/CommunityEditBtn';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';

import pickYellow from '../../../../view_img/Service/community/community/communityYellow.png';
import pickGreen from '../../../../view_img/Service/community/community/communityGreen.png';
import reportImg from '../../../../view_img/Service/community/community/cumReport.png';
import reportImgActive from '../../../../view_img/Service/community/community/cumReportActive.png';

const communityDeleteApi = '/community/seller/post/delete';

const modalConfirmContents = {
  empty: {
    titleText: '',
    contentText: '',
  },
  success: {
    titleText: '게시글 삭제 성공',
    contentText: '게시글이 성공적으로 삭제되었습니다.',
  },
  failure: {
    titleText: '게시글 삭제 실패',
    contentText: '게시글 삭제를 실패하였습니다.',
  },
};

const defaultContents = {
  listBackBtn: '목록보기',
  pickImages: {
    yellow: pickYellow,
    green: pickGreen,
  },
  cumReportBtn: {
    text: '신고하기',
    imgSrc: reportImg,
    activeImgSrc: reportImgActive,
    modalTexts: {
      titleText: '신고 완료',
      contentText: '신고를 완료하였습니다.',
    },
  },
  editBtn: {
    text: '편집',
    link: '',
  },
  deleteBtn: {
    text: '삭제',
    link: -1,
    async delete(postId, setOpenModal, setModalTexts, setDeleteSuccess) {
      try {
        const result = await fetchDataETCAndObj(communityDeleteApi, 'DELETE', {
          sellerCommunityPostId: postId,
        });
        if (result.resultMsg === '삭제 성공') {
          setDeleteSuccess(true);
          setModalTexts(modalConfirmContents.success);
          setOpenModal(true);
        } else {
          setModalTexts(modalConfirmContents.failure);
          setOpenModal(true);
        }
      } catch (error) {
        setModalTexts(modalConfirmContents.failure);
        setOpenModal(true);
      }
    },
  },
};

export default function CommunitySellerDetailPage() {
  const { sellerCommunityPostId } = useParams();
  const [isLogined, setIsLogined] = useState(false);
  const [dbContent, updateDbContent] = useImmer({});

  useEffect(() => {
    async function fetchContents() {
      try {
        fetchViewUpdate(sellerCommunityPostId, 6);

        const communityPost = await fetchOneContentGET(
          `/community/seller/post-detail/${sellerCommunityPostId}`
        );
        updateDbContent(communityPost);
      } catch (error) {
        console.error(error);
      }
    }
    return () => fetchContents();
  }, [sellerCommunityPostId]);

  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalTexts, setModalTexts] = useState(modalConfirmContents.empty);
  const navigate = useNavigate();

  const { listBackBtn, pickImages, cumReportBtn, editBtn, deleteBtn } =
    defaultContents;

  return (
    <div>
      <div
        style={{
          margin: 'auto',
          position: 'relative',
          zIndex: '550',
        }}
      >
        <CommunityListBackBtn
          text={listBackBtn}
          style={{ marginBottom: '-5rem' }}
        />
      </div>
      {isLogined && (
        <div
          style={{
            position: 'absolute',
            marginTop: '-3.5rem',
            marginLeft: 'calc(50% + 13rem)',
            zIndex: '650',
          }}
        >
          <CommunityEditBtn
            text={editBtn.text}
            handleClick={() => {
              navigate(`/app/community/news/edit/${sellerCommunityPostId}`);
            }}
          />
          <CommunityEditBtn
            text={deleteBtn.text}
            handleClick={() => {
              deleteBtn.delete(
                sellerCommunityPostId,
                setOpenModal,
                setModalTexts,
                setDeleteSuccess
              );
            }}
          />
        </div>
      )}
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
          {!isLogined && (
            <CommunityCumReportBtn
              imgSrc={cumReportBtn.imgSrc}
              activeImgSrc={cumReportBtn.activeImgSrc}
              text={cumReportBtn.text}
              handleClick={() => {
                setModalTexts(cumReportBtn.modalTexts);
                setOpenModal(true);
              }}
            />
          )}
          {dbContent?.sellerCommunityPostId && (
            <CommunityDetailContent
              content={dbContent.sellerCommunityContent}
              postId={dbContent.sellerCommunityPostId}
              postTypeId={dbContent.postTypeId}
              likesNum={dbContent.communityLikeCnt}
              viewsNum={dbContent.communityViewCnt}
              author={dbContent.sComName}
              dateCreated={dbContent.sellerCommunityDateCreated}
            />
          )}
        </CardListContentBox>
      </div>

      <AppConfirmModal
        texts={modalTexts}
        isOpen={openModal}
        confirmModal={
          deleteSuccess
            ? () => {
                setOpenModal(false);
                setModalTexts(modalConfirmContents.empty);
                navigate(-1);
              }
            : () => {
                setOpenModal(false);
                setModalTexts(modalConfirmContents.empty);
              }
        }
      />
    </div>
  );
}
