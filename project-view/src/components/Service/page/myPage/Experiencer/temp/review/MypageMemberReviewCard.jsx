import React from 'react';
import YellowBigCardBox from '../../../UI/YellowBigCardBox';
import MypageMemberReviewImg from './MypageMemberReviewImg';
import './MypageMemberReviewCard.css';
import MypageMemberReivewContents from './MypageMemberReivewContents';
import { useNavigate } from 'react-router-dom';

export default function MypageMemberReviewCard({ contents }) {
  const { img } = contents;
  return (
    <YellowBigCardBox>
      <div className="mypageMemberReviewCard">
        <MypageMemberReviewImg imgSrc={img} />
        <MypageMemberReivewContents contents={contents} />
      </div>
    </YellowBigCardBox>
  );
}
