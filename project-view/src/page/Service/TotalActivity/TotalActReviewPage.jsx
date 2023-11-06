import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { fetchDataGET } from '../../../config/ApiService';

import TotalActReviewMainTitle from '../../../components/Service/totalActivity/review/title/TotalActReviewMainTitle';
import TotalActReviewBox from '../../../components/Service/totalActivity/review/reviewBox/TotalActReviewBox';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';

import pencil from '../../../view_img/Service/totalActivity/review/pencil.jpg';

const titles = {
  mainTitle: { title: '체험 후기', imgSrc: pencil },
};

export default function TotalActReviewPage() {
  const { mainTitle } = titles;
  const { aPostId } = useParams();
  const [reviewContents, updateReviewContents] = useImmer([]);

  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1); // 총 페이지 수

  const reviewsPerPage = 4; // 한 페이지당 리뷰 수

  useEffect(() => {
    async function fetchContents() {
      try {
        const reviews = await fetchDataGET(
          `/review/list/list/${aPostId}/${requestPageNo}`
        );
        if (reviews && Array.isArray(reviews) && reviews.length > 0) {
          updateReviewContents((draft) => {
            draft.splice(0, draft.length); // 이전 데이터 삭제
            draft.push(
              ...reviews.map((review) => ({
                title: review.rTitle,
                rating: review.rStarRating,
                content: review.rContent,
                author: review.uNick,
                dateCreated: review.rDateCreated,
              }))
            );
          });

          // 리뷰 갯수에 따라 페이지 수 계산
          const totalPages = Math.ceil(reviews.length / reviewsPerPage);
          setTotalPageNo(totalPages);
        } else {
          console.error('No review data received.');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, [aPostId, requestPageNo]);

  return (
    <div>
      <TotalActReviewMainTitle
        title={mainTitle.title}
        imgSrc={mainTitle.imgSrc}
      />
      <div
        style={{
          width: '70rem',
          display: 'flex',
          flexWrap: 'wrap',
          margin: 'auto',
          justifyContent: 'center',
        }}
      >
        {reviewContents
          .slice(
            (requestPageNo - 1) * reviewsPerPage,
            requestPageNo * reviewsPerPage
          )
          .map((review, index) => (
            <TotalActReviewBox reviewContents={review} key={index} />
          ))}
      </div>
      <PageNoBox
        curr={requestPageNo}
        total={totalPageNo}
        handlePageNo={setRequestPageNo}
      />
    </div>
  );
}
