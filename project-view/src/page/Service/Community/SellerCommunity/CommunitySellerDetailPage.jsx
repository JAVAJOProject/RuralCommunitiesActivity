import React, { useState } from 'react';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CommunityPickImages from '../../../../components/Service/community/community/pickImg/CommunityPickImages';
import CommunityCumReportBtn from '../../../../components/Service/community/community/buttons/CommunityCumReportBtn';

import pickYellow from '../../../../view_img/Service/community/community/communityYellow.png';
import pickGreen from '../../../../view_img/Service/community/community/communityGreen.png';
import reportImg from '../../../../view_img/Service/community/community/cumReport.png';
import reportImgActive from '../../../../view_img/Service/community/community/cumReportActive.png';
import AppConfirmModal from '../../../../components/Service/common/Modal/AppConfirmModal';
import CommunityDetailContent from '../../../../components/Service/community/community/content/CommunityDetailContent';

const defaultContents = {
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
};

export default function CommunitySellerDetailPage() {
  const [openModal, setOpenModal] = useState(false);
  const { pickImages, cumReportBtn } = defaultContents;

  return (
    <div>
      <CommunityPickImages
        imgPickLeft={pickImages.yellow}
        imgPickRight={pickImages.green}
      />
      <CardListContentBox
        style={{
          width: '68.5rem',
          paddingLeft: 0,
          paddingRight: 0,
          marginBottom: 0,
        }}
      >
        <CommunityCumReportBtn
          imgSrc={cumReportBtn.imgSrc}
          activeImgSrc={cumReportBtn.activeImgSrc}
          text={cumReportBtn.text}
          handleClick={() => {
            setOpenModal(true);
          }}
        />
        <CommunityDetailContent
          content={'askjdfjkahdgkadbfkajsdfkajsfkajfhkajfkjjksdka'}
          postId={1}
          postTypeId={6}
          likesNum={123123}
          viewsNum={234234}
        />
      </CardListContentBox>

      <AppConfirmModal
        texts={cumReportBtn.modalTexts}
        isOpen={openModal}
        confirmModal={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
}
