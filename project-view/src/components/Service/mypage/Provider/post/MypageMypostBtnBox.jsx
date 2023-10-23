import React from 'react';
import MypageBtn from '../../UI/MypageBtn';
import './MypageMypostBtnBox.css';

const buttons = {
  post: ['상세보기', '수정하기', '삭제하기'],
  review: ['체험 상세보기', '수정하기', '삭제하기'],
};

export default function MypageMypostBtnBox({ links, type }) {
  let texts;
  if (type && type === 'review') {
    texts = buttons.review;
  } else {
    texts = buttons.post;
  }

  return (
    <div className="mypageMypostBtnBox">
      {texts.map((item, index) => (
        <MypageBtn text={item} link={links[index]} />
      ))}
    </div>
  );
}