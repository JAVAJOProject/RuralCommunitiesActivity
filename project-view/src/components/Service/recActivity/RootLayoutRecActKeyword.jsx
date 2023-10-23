import React from 'react';
import KeywordMainTitle from './keyword/KeywordMainTitle';

import keywordImg from '../../../view_img/Service/recActivity/keywordClick.jpg';
import subtitleImg from '../../../view_img/Service/recActivity/title.svg';
import KeywordBoxSet from './keyword/KeywordBoxSet';
import CardListContentBox from '../common/UI/CardListContentBox';
import CardBoxTitleSet from '../common/UI/CardBoxTitleSet/CardBoxTitleSet';
import RecActOrderBox from './order/RecActOrderBox';
import { Outlet } from 'react-router-dom/dist';
import KeywordAndOrder from './filterContext/KeywordAndOrder';
import PageNoBox from '../common/PageNo/PageNoBox';

const contents = {
  mainTitle: {
    mainTitle: '키워드 추천',
    subtitle: '끌리는 키워드를 클릭해보세요',
    imgSrc: keywordImg,
  },
  subtitle: {
    text: '',
    imgSrc: subtitleImg,
    circleColor: '#FFAB48',
  },
  order: ['최신순', '좋아요순', '조회순'],
};

const keywords = [
  '여름',
  '드라이브',
  '계곡',
  '바다',
  '버스여행',
  '방송촬영지',
  '기차여행',
  '공원',
  '숲',
  '맛집',
  '자연휴양림',
  '겨울',
];

export default function RootLayoutRecActKeyword() {
  const { mainTitle, subtitle, order } = contents;
  subtitle.text = `전체 ${30}건`;

  return (
    <KeywordAndOrder>
      <KeywordMainTitle contents={mainTitle} />
      <KeywordBoxSet keywords={keywords} />
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={subtitle.imgSrc}
          text={subtitle.text}
          circleColor={subtitle.circleColor}
          isDarken={false}
        />
        <RecActOrderBox orders={order} />
        <div style={{ clear: 'both' }}>
          <Outlet />
        </div>
      </CardListContentBox>
      <PageNoBox curr={1} total={6} />
    </KeywordAndOrder>
  );
}