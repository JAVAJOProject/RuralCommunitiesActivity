import React from 'react';

import titleImg from '../../../../view_img/Service/myPage/experiencer/event.jpg';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';

const defaultContents = {
  titles: {
    title: '이벤트 참여 목록',
    imgSrc: titleImg,
    backgroundColor: '#EAD8CE',
  },
};

export default function MypageMemberEventPage() {
  const { titles } = defaultContents;

  return (
    <main className="appMain">
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={titles.imgSrc}
          text={titles.title}
          circleColor={titles.backgroundColor}
        />
      </CardListContentBox>
    </main>
  );
}
