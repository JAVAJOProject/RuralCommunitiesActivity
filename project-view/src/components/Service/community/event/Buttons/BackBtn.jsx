import React from 'react';
import './EventApplyBtn.css';
import back from '../../../../../view_img/Service/community/event/cancel.jpg';
import { useLocation, useNavigate } from 'react-router-dom';

const btnContent = { text: '목록보기', image: back };

export default function BackBtn({ size, link }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { boardType } = location?.state ?? '';

  const { text, image } = btnContent;
  let classNameBtnBox = ['eventApplyBtnBox', 'eventApplyBtnBoxRed'];
  let classNameBtnCircle = ['eventApplyBtnCircle'];

  switch (size) {
    case 'big':
      classNameBtnBox.push('eventApplyBtnBoxBig');
      classNameBtnCircle.push('eventApplyBtnCircleBig');
      break;
    case 'small':
      classNameBtnBox.push('eventApplyBtnBoxSmall');
      classNameBtnCircle.push('eventApplyBtnCircleSmall');
      break;
  }

  return (
    <div
      className={classNameBtnBox.join(' ')}
      onClick={() => {
        navigate(link || boardType === 'card' ? '..' : -1);
      }}
    >
      <div className={classNameBtnCircle.join(' ')}>
        <img src={image} />
      </div>
      <p>{text}</p>
    </div>
  );
}