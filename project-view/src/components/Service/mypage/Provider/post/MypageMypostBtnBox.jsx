import React from 'react';
import MypageBtn from '../../UI/MypageBtn';
import './MypageMypostBtnBox.css';

const buttons = {
  post: ['상세보기', '수정하기', '삭제하기'],
  review: ['체험 상세보기', '수정하기', '삭제하기'],
};

export default function MypageMypostBtnBox({
  links,
  type,
  handleDelete,
}) {
  let texts;
  if (type && type === 'review') {
    texts = buttons.review;
  } else {
    texts = buttons.post;
  }

  return (
    <div className="mypageMypostBtnBox">
      <MypageBtn text={texts[0]} link={links[0]} />
      <MypageBtn text={texts[1]} link={links[1]} />
      <MypageBtn
        text={texts[2]}
        handleDelete={handleDelete}
      />
    </div>
  );
}
