import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CommunityPickImages from '../../../../components/Service/community/community/pickImg/CommunityPickImages';
import CommunityListBar from '../../../../components/Service/community/community/listBar/CommunityListBar';
import CommunityPageBtn from '../../../../components/Service/community/community/buttons/CommunityPageBtn';
import CommunityWritingBtn from '../../../../components/Service/community/community/buttons/CommunityWritingBtn';

import noteImg from '../../../../view_img/Service/community/community/note.svg';
import pickYellow from '../../../../view_img/Service/community/community/communityYellow.png';
import pickGreen from '../../../../view_img/Service/community/community/communityGreen.png';

const defaultContents = {
  pickImages: {
    yellow: pickYellow,
    green: pickGreen,
  },
  writingBtn: {
    text: '글쓰기',
    imgSrc: noteImg,
  },
  pageBtn: {
    text: '더보기',
  },
};

export default function CommunitySellerTextListPage() {
  const [dbContents, updateDbContents] = useImmer([]);
  const [currentPos, setCurrentPos] = useState(0);
  const [totalPostNo, setTotalPostNo] = useState(0);
  const [perPagePostNo, setPerPagePostNo] = useState(0);

  useEffect(() => {
    async function fetchContents() {
      const communityPost = await fetchDataGET(
        `/community/seller/post-list/list/${currentPos}`
      );
      if (currentPos > 0) {
        updateDbContents((draft) => {
          communityPost.forEach((item) => {
            draft.push(item);
          });
        });
      } else {
        updateDbContents(communityPost);
      }
      const [perPagePostCnt, totalPostNo] = await fetchDataGET(
        `/community/seller/post-list/total-count/list`
      );
      setPerPagePostNo(perPagePostCnt);
      setTotalPostNo(totalPostNo);
    }
    fetchContents();
  }, [currentPos]);

  const { pickImages, writingBtn, pageBtn } = defaultContents;

  return (
    <div>
      <div
        style={{
          margin: 'auto',
          position: 'relative',
          zIndex: '550',
        }}
      >
        {true && (
          <CommunityWritingBtn
            link={'../../registration'}
            imgSrc={writingBtn.imgSrc}
            text={writingBtn.text}
          />
        )}
      </div>
      <CommunityPickImages
        imgPickLeft={pickImages.yellow}
        imgPickRight={pickImages.green}
      />
      <CardListContentBox
        style={{
          width: '68.5rem',
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: '2.5rem',
          marginBottom: 0,
        }}
      >
        {dbContents?.length > 0 &&
          dbContents.map((item) => (
            <CommunityListBar
              postId={item.sellerCommunityPostId}
              postTypeId={item.postTypeId}
              likesNum={item.communityLikeCnt}
              content={item.sellerCommunityContent}
              author={item.sComName}
              dateCreated={item.sellerCommunityDateCreated}
            />
          ))}
      </CardListContentBox>
      <div
        style={{
          paddingTop: dbContents.length < totalPostNo ? '2rem' : '3.5rem',
        }}
      >
        {dbContents?.length > 0 && dbContents?.length < totalPostNo && (
          <CommunityPageBtn
            text={pageBtn.text}
            handleClick={() => {
              setCurrentPos((prev) => prev + perPagePostNo);
            }}
          />
        )}
      </div>
    </div>
  );
}
