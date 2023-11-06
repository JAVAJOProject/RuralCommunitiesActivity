import React from 'react';
import './MypageCardTitleSet.css';

import MypageServiceTitle from './MypageServiceTitle';
import MypageListBtn from './MypageListBtn';

export default function MypageCardTitleSet({
  titleText,
  listBtn,
  type,
  eventStatus,
  link,
  listType,
  eventStatusId,
}) {
  let listBtnText = '';
  if (type === 'activity') {
    listBtnText = listBtn.text.participantList;
  } else if (type === 'event') {
    switch (listType) {
      case 'participate':
        listBtnText = listBtn.text.participantList;
        break;
      case 'win':
        listBtnText = listBtn.text.winnerList;
        break;
      case 'apply':
        listBtnText = listBtn.text.winnerDraw;
        break;
      case 'story':
        listBtnText = listBtn.text.storyDraw;
        break;
    }
  }

  return (
    <div className="mypageCardTitleSet">
      <MypageServiceTitle
        text={titleText}
        type={type}
        eventStatus={eventStatus}
      />
      {eventStatusId && +eventStatusId === 3 && (
        <MypageListBtn imgSrc={listBtn.imgSrc} text={listBtnText} link={link} />
      )}
    </div>
  );
}
