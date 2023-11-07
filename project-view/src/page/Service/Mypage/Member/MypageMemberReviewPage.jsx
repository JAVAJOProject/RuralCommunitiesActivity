import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { fetchDataGET, fetchImgGET } from '../../../../config/ApiService';

import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';
import MypageMemberReviewCard from '../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewCard';

import reviewTitleImg from '../../../../view_img/Service/myPage/experiencer/review.jpg';

const title = {
  text: '내가 쓴 후기',
  imgSrc: reviewTitleImg,
};

export default function MypageMemberReviewPage() {
  const [review, updateReview] = useImmer([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    async function fetchContents() {
      try {
        const review = await fetchDataGET(
          `/mypage/member/review/activity/list/${currentPage}`
        );
        const reviewImg = await fetchImgGET(
          review,
          'aPostId',
          '/main/total-activity-image'
        );
        updateReview((draft) => {
          draft.length = 0;
          review.forEach((item, index) => {
            draft.push({ ...item, aThumbnailImg: reviewImg[index] });
          });
        });

        const [perPagePostCount, totalPostNo] = await fetchDataGET(
          '/mypage/member/review/total-page'
        );
        setMaxPage(Math.ceil(+totalPostNo / +perPagePostCount));
      } catch (error) {
        console.error(error);
      }
    }

    fetchContents();
  }, [currentPage, review.rTitle]);

  const { text, imgSrc } = title;

  return (
    <>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={imgSrc}
          text={text}
          circleColor={'#F9DCC1'}
          isDarken={true}
        />
        <div className="mypageMemberReviewCardBox">
          {review &&
            review.map((content) => (
              <MypageMemberReviewCard key={content.revId} contents={content} />
            ))}
        </div>
      </CardListContentBox>
      <PageNoBox
        curr={currentPage}
        total={maxPage}
        handlePageNo={setCurrentPage}
      />
    </>
  );
}
