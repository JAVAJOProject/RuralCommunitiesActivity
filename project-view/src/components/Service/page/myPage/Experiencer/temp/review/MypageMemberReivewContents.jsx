import React from 'react';
import './MypageMemberReivewContents.css';
import MypageMemberReviewTitle from './MypageMemberReviewTitle';
import MypageMemberReviewRating from './MypageMemberReviewRating';
import MypageMemberReviewLine from './MypageMemberReviewLine';
import MypageMemberReviewContentText from './MypageMemberReviewContentText';
import MypageMypostBtnBox from '../../../Provider/temp/post/MypageMypostBtnBox';

export default function MypageMemberReivewContents({ contents }) {
  const { reviewId, title, rating, content } = contents;

  return (
    <div className="mypageMemberReivewContents">
      <div>
        <MypageMemberReviewTitle text={title} />
        <MypageMemberReviewRating rating={rating} />
      </div>
      <MypageMemberReviewLine />
      <MypageMemberReviewContentText text={content} />
      <div>
        <MypageMypostBtnBox
          links={['', `/app/myInfo/experiencer/review/edit/${reviewId}`, '']}
          type="review"
        />
      </div>
    </div>
  );
}
