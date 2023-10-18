import React from 'react';
import CardListContentBox from '../../../../common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../common/UI/CardBoxTitleSet/CardBoxTitleSet';

import reviewTitleImg from '../../../../../../view_img/Service/myPage/experiencer/review.jpg';
import YellowBigCardBox from '../../UI/YellowBigCardBox';
import MypageMemberReviewBtnBox from './review/MypageMemberReviewBtnBox';
import MypageMemberReviewEditTitle from './review/MypageMemberReviewEditTitle';
import MypageMemberReviewEditLine from './review/MypageMemberReviewEditLine';
import MypageMemberReviewTextarea from './review/MypageMemberReviewTextarea';

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
  const { title, imgSrc, ratingTitle } = titleContent;
  const { reviewTitle, ratingNum, content } = test;

  return (
    <div>
      <CardListContentBox>
        <CardBoxTitleSet imgSrc={imgSrc} text={title} circleColor={'#F9DCC1'} />
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
          />
          <MypageMemberReviewEditLine />
          <MypageMemberReviewTextarea textContent={content} />
        </YellowBigCardBox>
        <MypageMemberReviewBtnBox />
      </CardListContentBox>
    </div>
  );
}
