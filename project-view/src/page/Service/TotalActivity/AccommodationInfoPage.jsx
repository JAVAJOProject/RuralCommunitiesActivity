import React from 'react';
import AccommodationBanner from '../../../components/Service/totalActivity/Accommodation/AccommodationBanner';
import RatingMiddleBox from '../../../components/Service/totalActivity/Rating/MiddleBox/RatingMiddleBox';
import RatingCategoryBoxSet from '../../../components/Service/totalActivity/Rating/CategoryBox/RatingCategoryBoxSet';
import AccommodationTable from '../../../components/Service/totalActivity/Accommodation/AccommodationTable';

import bannerImg from '../../../view_img/Service/totalActivity/accommodation/banner.svg';
import paperPlaneImg from '../../../view_img/Service/totalActivity/accommodation/paperPlane.png';
import topTownImg from '../../../view_img/Service/totalActivity/accommodation/topTown.jpg';
import typeRegion from '../../../view_img/Service/totalActivity/accommodation/region.svg';
import typeBrunch from '../../../view_img/Service/totalActivity/accommodation/brunch.svg';
import typeInternet from '../../../view_img/Service/totalActivity/accommodation/internet.jpg';
import typePayment from '../../../view_img/Service/totalActivity/accommodation/paymentCard.svg';
import { useImmer } from 'use-immer';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';
import PageNavigateBtn from '../../../components/Service/common/PageNavigateBtn/PageNavigateBtn';

const defaultContents = {
  banner: {
    backgroundImg: bannerImg,
    mainTitle: '농어촌 민박 현황',
    subtitle:
      '농식품부와 한국농어촌공사가 제공하는 농어촌민박 및 펜션의 편익정보 및 위치정보',
    miniImg: paperPlaneImg,
  },
  categoryCircleImg: [
    {
      title: '지역',
      imgSrc: typeRegion,
      imgStyle: { width: '6.375rem', height: '5.1875rem' },
    },
    {
      title: '조식제공',
      imgSrc: typeBrunch,
      imgStyle: {
        width: '6.5rem',
        borderRadius: '50%',
        mixBlendMode: 'darken',
        marginTop: '-1rem',
        marginLeft: '-0.3rem',
      },
    },
    {
      title: '인터넷',
      imgSrc: typeInternet,
      imgStyle: { width: '7.25rem', mixBlendMode: 'darken' },
    },
    {
      title: '카드결제',
      imgSrc: typePayment,
      imgStyle: { width: '6.625rem', mixBlendMode: 'darken' },
    },
  ],
  tableContents: [
    '지역',
    '민박명',
    ['기타 편의', '조식 제공', '인터넷', '카드결제'],
  ],
};

const topTown = {
  topText: '현재 으뜸촌',
  imgSrc: topTownImg,
  bottomText: '연천 푸르내 마을', //TODO: 으뜸촌 임시
};

const testContents = [
  {
    sido: '부산광역시',
    sigungu: '기장군',
    name: '별이 그린 바다',
    brunch: 'N',
    internet: 'Y',
    payment: 'Y',
  },
  {
    sido: '부산광역시',
    sigungu: '기장군',
    name: '오시리아',
    brunch: 'N',
    internet: 'Y',
    payment: 'Y',
  },
  {
    sido: '부산광역시',
    sigungu: '기장군',
    name: '골든베이 코티지',
    brunch: 'N',
    internet: 'Y',
    payment: 'Y',
  },
  {
    sido: '부산광역시',
    sigungu: '기장군',
    name: '해움',
    brunch: 'N',
    internet: 'N',
    payment: 'Y',
  },
  {
    sido: '부산광역시',
    sigungu: '기장군',
    name: '달빛펜션',
    brunch: 'N',
    internet: 'N',
    payment: 'Y',
  },
  {
    sido: '경기도',
    sigungu: '광주시',
    name: '어쩌구',
    brunch: '-',
    internet: '-',
    payment: '-',
  },
  {
    sido: '서울특별시',
    sigungu: '중구',
    name: '저쩌구',
    brunch: null,
    internet: 'N',
    payment: null,
  },
  {
    sido: '제주특별자치도',
    sigungu: '서귀포시',
    name: '오호라',
    brunch: 'Y',
    internet: 'N',
    payment: 'Y',
  },
  {
    sido: '인천광역시',
    sigungu: '남동구',
    name: '흠',
    brunch: '',
    internet: null,
    payment: 'Y',
  },
  {
    sido: '전라북도',
    sigungu: '전주시',
    name: '한옥굳',
    brunch: '',
    internet: null,
    payment: 'Y',
  },
];

export default function AccommodationInfoPage() {
  const [contents, updateContents] = useImmer(testContents);
  const { banner, categoryCircleImg, tableContents } = defaultContents;

  return (
    <main className="appMain">
      <AccommodationBanner contents={banner} />
      <RatingMiddleBox topTownInfo={topTown} />
      <RatingCategoryBoxSet categoryCircleImg={categoryCircleImg} />
      <AccommodationTable theadText={tableContents} tbodyData={contents} />
      <div style={{ marginTop: '3.5rem', marginBottom: '2rem' }}>
        <PageNoBox curr={1} total={6} />
      </div>
    </main>
  );
}
