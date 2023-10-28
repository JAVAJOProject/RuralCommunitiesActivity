import React from 'react';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import PageNoBox from '../../../../components/Service/common/PageNo/PageNoBox';
import MypageMemberReviewCard from '../../../../components/Service/mypage/Experiencer/review/MypageMemberReviewCard';

import reviewTitleImg from '../../../../view_img/Service/myPage/experiencer/review.jpg';

import testImg from '../../../../view_img/Service/mainPage/testImg/circleTest3.jpg';

const title = {
  text: '내가 쓴 후기',
  imgSrc: reviewTitleImg,
};

const test = [
  {
    aPostId: 2,
    reviewId: 1,
    title: '체험 후기 제목',
    img: testImg,
    rating: 5,
    content: `체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체`,
  },
  {
    aPostId: 5,
    reviewId: 2,
    title: '체험 후기 제목',
    img: testImg,
    rating: 5,
    content: `체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체험 내용 후기입니다. 체`,
  },
];

export default function MypageMemberReviewPage() {
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
          {test.map((content) => (
            <MypageMemberReviewCard contents={content} />
          ))}
        </div>
      </CardListContentBox>
      <PageNoBox curr={1} total={7} />
    </>
  );
}
