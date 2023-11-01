import React from 'react';
import CardListContentBox from '../../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';

import analyticsTitleImg from '../../../../view_img/Service/myPage/provider/analytics.jpg';

const defaultContents = {
  titles: {
    text: '서비스 통계',
    imgSrc: analyticsTitleImg,
    backgroundColor: '#CEE8F6',
  },
};

export default function MypageSellerAnalyticsPage() {
  const { titles } = defaultContents;
  return (
    <CardListContentBox>
      <CardBoxTitleSet
        imgSrc={titles.imgSrc}
        text={titles.text}
        circleColor={titles.backgroundColor}
        isContain={true}
      />
    </CardListContentBox>
  );
}
