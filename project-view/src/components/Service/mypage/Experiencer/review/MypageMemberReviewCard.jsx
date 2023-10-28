import React from "react";
import YellowBigCardBox from "../../UI/YellowBigCardBox";
import MypageMemberReviewImg from "./MypageMemberReviewImg";
import "./MypageMemberReviewCard.css";
import MypageMemberReivewContents from "./MypageMemberReivewContents";

export default function MypageMemberReviewCard({ contents }) {
  const { aThumbnailImg } = contents;
  return (
    <YellowBigCardBox>
      <div className="mypageMemberReviewCard">
        <MypageMemberReviewImg imgSrc={aThumbnailImg} />
        <MypageMemberReivewContents contents={contents} />
      </div>
    </YellowBigCardBox>
  );
}
