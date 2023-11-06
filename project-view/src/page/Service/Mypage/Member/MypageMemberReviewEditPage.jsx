import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import { fetchOneContentGET } from "../../../../config/ApiService";

import CardListContentBox from "../../../../components/Service/common/UI/CardListContentBox";
import CardBoxTitleSet from "../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet";
import YellowBigCardBox from "../../../../components/Service/mypage/UI/YellowBigCardBox";
import MypageMemberReviewBtnBox from "../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewBtnBox";
import MypageMemberReviewEditTitle from "../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewEditTitle";
import MypageMemberReviewEditLine from "../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewEditLine";
import MypageMemberReviewTextarea from "../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewTextarea";

import reviewTitleImg from "../../../../view_img/Service/myPage/experiencer/review.jpg";

const titleContent = {
  title: "후기 수정하기",
  imgSrc: reviewTitleImg,
  ratingTitle: "별점",
};

const test = {
  reviewTitle: "체험 후기 제목",
  ratingNum: 4,
  content: `체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체`,
};

export default function MypageMemberReviewEditPage() {
  const { reviewId } = useParams();
  const [review, updateReview] = useImmer({});

  async function fetchContents() {
    try {
      const data = await fetchOneContentGET(
        `/mypage/member/review/activity/${reviewId}`
      );
      updateReview(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchContents();
  }, [reviewId, review.rTitle]);

  const { title, imgSrc, ratingTitle } = titleContent;

  return (
    <div>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={imgSrc}
          text={title}
          circleColor={"#F9DCC1"}
          isDarken={true}
        />
        <YellowBigCardBox
          style={{
            width: "33.6875rem",
            height: "21rem",
            marginTop: "1.5rem",
            padding: "1.5rem",
          }}
        >
          {review.rTitle && review.rStarRating && (
            <MypageMemberReviewEditTitle
              reviewTitle={review.rTitle}
              ratingTitle={ratingTitle}
              ratingNum={review.rStarRating}
              handleReviewContent={updateReview}
            />
          )}
          <MypageMemberReviewEditLine />
          {review.rContent && (
            <MypageMemberReviewTextarea
              textContent={review.rContent}
              handleReviewContent={updateReview}
            />
          )}
        </YellowBigCardBox>
        <MypageMemberReviewBtnBox />
      </CardListContentBox>
    </div>
  );
}
