import React from 'react';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';

import reviewTitleImg from '../../../../view_img/Service/myPage/experiencer/review.jpg';
import YellowBigCardBox from '../../../../components/Service/mypage/UI/YellowBigCardBox';
import MypageMemberReviewBtnBox from '../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewBtnBox';
import MypageMemberReviewEditTitle from '../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewEditTitle';
import MypageMemberReviewEditLine from '../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewEditLine';
import MypageMemberReviewTextarea from '../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewTextarea';
import { useImmer } from 'use-immer';

const titleContent = {
  title: '후기 수정하기',
  imgSrc: reviewTitleImg,
  ratingTitle: '별점',
};

const test = {
  reviewTitle: '체험 후기 제목',
  ratingNum: 4,
  content: `체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체`,
};

export default function MypageMemberReviewEditPage() {
  const [reviewContent, updateReviewContent] = useImmer(test);
  const { title, imgSrc, ratingTitle } = titleContent;
  const { reviewTitle, ratingNum, content } = reviewContent;

  return (
    <div>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={imgSrc}
          text={title}
          circleColor={'#F9DCC1'}
          isDarken={true}
        />
        <YellowBigCardBox
          style={{
            width: '33.6875rem',
            height: '21rem',
            marginTop: '1.5rem',
            padding: '1.5rem',
          }}
        >
          <MypageMemberReviewEditTitle
            reviewTitle={reviewTitle}
            ratingTitle={ratingTitle}
            ratingNum={ratingNum}
            handleReviewContent={updateReviewContent}
          />
          <MypageMemberReviewEditLine />
          <MypageMemberReviewTextarea
            textContent={content}
            handleReviewContent={updateReviewContent}
          />
        </YellowBigCardBox>
        <MypageMemberReviewBtnBox />
      </CardListContentBox>
    </div>
  );
}
