import React from 'react';
import './MypageMemberReivewContents.css';
import MypageMemberReviewTitle from './MypageMemberReviewTitle';
import MypageMemberReviewRating from './MypageMemberReviewRating';
import MypageMemberReviewLine from './MypageMemberReviewLine';
import MypageMemberReviewContentText from './MypageMemberReviewContentText';
import MypageMypostBtnBox from '../../Provider/post/MypageMypostBtnBox';
import { fetchDataETCAndObj } from '../../../../../config/ApiService';

export default function MypageMemberReivewContents({ contents }) {
  const { aPostId, revId, rTitle, rStarRating, rContent } = contents;

  return (
    <div className="mypageMemberReivewContents">
      <div>
        <MypageMemberReviewTitle text={rTitle} />
        <MypageMemberReviewRating rating={rStarRating} />
      </div>
      <MypageMemberReviewLine />
      <MypageMemberReviewContentText text={rContent} />
      <div>
        <MypageMypostBtnBox
          links={[
            `/app/activity/detail/${aPostId}/info`,
            `/app/myInfo/experiencer/review/edit/${revId}`,
            '',
          ]}
          handleDelete={async () => {
            const result = await fetchDataETCAndObj(
              `/mypage/member/review/cancel/${revId}`,
              'DELETE',
              true
            );
            if (result === '삭제하였습니다.') {
              window.location.reload();
            }
          }}
          type="review"
        />
      </div>
    </div>
  );
}
