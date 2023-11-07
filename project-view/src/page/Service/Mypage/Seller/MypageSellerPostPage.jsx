import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import GreenCardBox from '../../../../components/Service/mypage/UI/GreenCardBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageMiniBoxSet from '../../../../components/Service/mypage/UI/MypageMiniBoxSet';
import MypageMypost from '../../../../components/Service/mypage/Provider/post/MypageMypost';
import MypageMypostBtnBox from '../../../../components/Service/mypage/Provider/post/MypageMypostBtnBox';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

import sellerPostImg from '../../../../view_img/Service/myPage/provider/mypost.jpg';

const title = { text: '내가 쓴 글', imgSrc: sellerPostImg };

export default function MypageSellerPostPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [data, setData] = useImmer([]);

  const { text, imgSrc } = title;

  async function fetchContents() {
    try {
      const response = await fetchDataGET(
        `/mypage/seller/community/info/${currentPage}`
      );
      setData(response);
      const [perPagePostCount, totalPostNo] = fetchDataGET(
        '/mypage/seller/community/info/total-page'
      );
      setMaxPage(Math.ceil(+totalPostNo / +perPagePostCount));
    } catch (error) {
      setData([]);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchContents();
  }, [currentPage]);

  return (
    <>
      <CardListContentBox style={{ paddingBottom: '1rem' }}>
        <CardBoxTitleSet
          imgSrc={imgSrc}
          text={text}
          circleColor="#EEF5F8"
          isDarken={true}
        />
        {data.length > 0 &&
          data.map((item) => {
            const {
              sellerCommunityPostId,
              postTypeId,
              sellerCommunityContent,
              communityLikeCnt,
              communityViewCnt,
            } = item;

            return (
              <GreenCardBox key={sellerCommunityPostId}>
                <MypageMiniBoxSet
                  on={false}
                  postId={+sellerCommunityPostId}
                  postTypeId={+postTypeId}
                  likesNum={+communityLikeCnt}
                  viewingsNum={+communityViewCnt}
                />
                <MypageMypost text={sellerCommunityContent} />
                <MypageMypostBtnBox links={['', '', '']} />
              </GreenCardBox>
            );
          })}
        <PageNoBox
          curr={currentPage}
          total={maxPage}
          handlePageNo={setCurrentPage}
        />
      </CardListContentBox>
    </>
  );
}
