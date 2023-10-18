import React from 'react';
import MypageServiceTitle from './MypageServiceTitle';
import MypageListBtn from './MypageListBtn';
import './MypageCardTitleSet.css';

export default function MypageCardTitleSet({
  titleText,
  listBtn,
  type,
  eventStatus,
}) {
  let listBtnText;
  if (type === 'activity') {
    listBtnText = listBtn.text.participantList;
  } else if (type === 'event') {
    listBtnText = listBtn.text.participantList; //조건:participantList, winnerList, storyDraw, winnerDraw
  }

  return (
    <div className="mypageCardTitleSet">
      <MypageServiceTitle
        text={titleText}
        type={type}
        eventStatus={eventStatus}
      />
      <MypageListBtn imgSrc={listBtn.imgSrc} text={listBtnText} />
    </div>
  );
}
