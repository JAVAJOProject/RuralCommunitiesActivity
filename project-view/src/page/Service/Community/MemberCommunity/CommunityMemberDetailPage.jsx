import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDataETCAndObj } from '../../../../config/ApiService';

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

const communityDeleteApi = '/community/member/post/delete';

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
          uCommunityPostId: postId,
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

const testContents = {
  uId: 1,
  uCommunityPostId: 1,
  postTypeId: 6,
  uCommunityImgId: 1,
  uNick: '이거슨잘못된거시야',
  uCommunityContent: `난 너를 믿었던 만큼 내 친구도 믿었기에 난 아무런 부담없이 널 내 친구에게 소개시켜줬고 그런 만남이 있은후부터 우린 자주 함께 만나며 즐거운 시간을 보내며 함께 어울렸던 것 뿐인데 그런 만남이 어디부터 잘못됐는지 난 알수없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내 친구에게 관심을 더 보이며 날 조금씩 멀리하던 그 어느날 너와 내가 심하게 다툰 그 날 이후로 너와 내 친구는 연락도 없고 날 피하는 것 같아 그제서야 난 느낀거야 모든것이 잘못 되있는걸 너와 내 친구는 어느새 다정한 연인이 되있었지 있을 수 없는 일이라며 난 울었어 내 사랑과 우정을 모두 버려야 했기에
또다른 내 친구는 내 어깰 두드리며 잊어버리라 했지만 잊지 못할 것 같아`,
  uCommunityDateCreated: '2023-11-01',
  communityLikeCnt: 234234,
  communityViewCnt: 12345,
};

export default function CommunityMemberDetailPage() {
  const { uCommunityPostId } = useParams();
  const [isLogined, setIsLogined] = useState(true);
  const [dbContent, updateDbContent] = useImmer({});

  useEffect(() => {
    updateDbContent(testContents);
  }, [uCommunityPostId]);

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
              navigate(`/app/community/bulletinBoard/edit/${uCommunityPostId}`);
            }}
          />
          <CommunityEditBtn
            text={deleteBtn.text}
            handleClick={() => {
              deleteBtn.delete(
                uCommunityPostId,
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
          {dbContent?.uCommunityPostId && (
            <CommunityDetailContent
              content={dbContent.uCommunityContent}
              postId={dbContent.uCommunityPostId}
              postTypeId={dbContent.postTypeId}
              likesNum={dbContent.communityLikeCnt}
              viewsNum={dbContent.communityViewCnt}
              author={dbContent.uNick}
              dateCreated={dbContent.uCommunityDateCreated}
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
