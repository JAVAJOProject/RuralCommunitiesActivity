import React from 'react';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';

import memberInfoImg from '../../../../view_img/Service/myPage/experiencer/memberInfo.svg';

const defaultContents = {
  titles: {
    title: '개인정보 관리',
    imgSrc: memberInfoImg,
    backgroundColor: '#F6D1D1',
  },
};

export default function MypageMemberUserInfo() {
  const { titles } = defaultContents;

  return (
    <CardListContentBox>
      <CardBoxTitleSet
        imgSrc={titles.imgSrc}
        text={titles.title}
        circleColor={titles.backgroundColor}
      />
    </CardListContentBox>
  );
}
