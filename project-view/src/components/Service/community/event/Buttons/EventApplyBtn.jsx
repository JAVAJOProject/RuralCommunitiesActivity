import React from 'react';
import './EventApplyBtn.css';
import participation from '../../../../../view_img/Service/community/event/check.jpg';
import apply from '../../../../../view_img/Service/community/event/applyCheck.jpg';
import story from '../../../../../view_img/Service/community/event/pencil.jpg';
import { useNavigate } from 'react-router-dom';

const btnContent = [
  { text: '참여하기', image: participation },
  { text: '응모하기', image: apply },
  { text: '응모하기', image: apply },
  { text: '사연보내기', image: story },
];

export default function EventApplyBtn({ size, type, link }) {
  const navigate = useNavigate();

  let classNameBtnBox = ['eventApplyBtnBox'];
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

  if (type && type === 4) {
    classNameBtnCircle.push('eventApplyBtnCircleBack');
  }

  return (
    type && (
      <div
        className={classNameBtnBox.join(' ')}
        onClick={(e) => {
          e.stopPropagation();
          navigate(link, {
            state: { type: type },
          });
          window.scrollTo(0, 0);
        }}
      >
        <div className={classNameBtnCircle.join(' ')}>
          <img src={btnContent[type - 1].image} />
        </div>
        <p>{btnContent[type - 1].text}</p>
      </div>
    )
  );
}
