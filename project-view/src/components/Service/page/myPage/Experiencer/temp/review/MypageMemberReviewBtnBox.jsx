import React from 'react';
import InputBtn from '../../../../communityPage/event/Registration/InputBtn/InputBtn';
import './MypageMemberReviewBtnBox.css'

const buttons = [
  { btnText: '등록하기', type: 'button' },
  { btnText: '작성 취소', type: 'reset' },
];

export default function MypageMemberReviewBtnBox() {
  return (
    <div className='mypageMemberReviewBtnBox'>
      {buttons.map((btn) => (
        <InputBtn btnText={btn.btnText} type={btn.type} />
      ))}
    </div>
  );
}
