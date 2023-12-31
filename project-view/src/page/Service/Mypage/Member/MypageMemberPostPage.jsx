import React, { useState, useEffect } from 'react';
import {
  fetchDataETCAndObj,
  fetchDataGET,
} from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import GreenCardBox from '../../../../components/Service/mypage/UI/GreenCardBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageMiniBoxSet from '../../../../components/Service/mypage/UI/MypageMiniBoxSet';
import MypageMypost from '../../../../components/Service/mypage/Provider/post/MypageMypost';
import MypageMypostBtnBox from '../../../../components/Service/mypage/Provider/post/MypageMypostBtnBox';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';

import memberPostImg from '../../../../view_img/Service/myPage/provider/mypost.jpg';

const title = { text: '내가 쓴 글', imgSrc: memberPostImg };

export default function MypageMemberPostPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [maxPage, setMaxPage] = useState(1);

  const { text, imgSrc } = title;

  async function fetchContents() {
    try {
      const response = await fetchDataGET(
        `/mypage/member/community/list/${currentPage}`
      );

      setData(response);

      const [perPagePostCount, totalPostNo] = await fetchDataGET(
        '/mypage/member/community/total-page'
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
        <CardBoxTitleSet imgSrc={imgSrc} text={text} isDarken={true} />
        {data.length > 0 &&
          data.map((item) => {
            const {
              uCommunityPostId,
              postTypeId,
              uCommunityContent,
              communityLikeCnt,
              communityViewCnt,
            } = item;

            return (
              <GreenCardBox key={uCommunityPostId}>
                <MypageMiniBoxSet
                  on={false}
                  postId={+uCommunityPostId}
                  postTypeId={+postTypeId}
                  likesNum={+communityLikeCnt}
                  viewingsNum={+communityViewCnt}
                />
                <MypageMypost text={uCommunityContent} />
                <MypageMypostBtnBox
                  links={[
                    `/app/community/bulletinBoard/detail/${uCommunityPostId}`,
                    `/app/community/bulletinBoard/edit/${uCommunityPostId}`,
                  ]}
                  handleDelete={async () => {
                    const result = await fetchDataETCAndObj(
                      `/community/member/post/delete/${uCommunityPostId}`,
                      'DELETE'
                    );
                    if (result.resultMsg === '삭제 성공') {
                      window.location.reload();
                    }
                  }}
                />
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
