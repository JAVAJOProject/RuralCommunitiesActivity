import React, { useEffect, useState } from 'react';
import RatingTopBanner from '../../../components/Service/totalActivity/Rating/TopBanner/RatingTopBanner';
import RatingMiddleBox from '../../../components/Service/totalActivity/Rating/MiddleBox/RatingMiddleBox';
import RatingCategoryBoxSet from '../../../components/Service/totalActivity/Rating/CategoryBox/RatingCategoryBoxSet';
import RatingDataTable from '../../../components/Service/totalActivity/Rating/TableBox/RatingDataTable';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';
import activityImg from '../../../view_img/Service/totalActivity/rating/activityImg.jpg';
import foodImg from '../../../view_img/Service/totalActivity/rating/food.svg';
import accommodationImg from '../../../view_img/Service/totalActivity/rating/accommodation.jpg';
import tractor from '../../../view_img/Service/totalActivity/rating/tractor.svg';
import woman from '../../../view_img/Service/totalActivity/rating/woman.jpg';
import topTownImg from '../../../view_img/Service/totalActivity/rating/topTown.jpg';
import typeRegion from '../../../view_img/Service/totalActivity/rating/categoryRegion.svg';
import typeAccommodation from '../../../view_img/Service/totalActivity/rating/categoryAccommodation.svg';
import typeFood from '../../../view_img/Service/totalActivity/rating/categoryFood.svg';
import typeYear from '../../../view_img/Service/totalActivity/rating/categoryYear.jpg';
import typeActivity from '../../../view_img/Service/totalActivity/rating/categoryActivity.svg';
import medal1 from '../../../view_img/Service/totalActivity/rating/medal1.jpg';
import medal2 from '../../../view_img/Service/totalActivity/rating/medal2.jpg';
import medal3 from '../../../view_img/Service/totalActivity/rating/medal3.jpg';
import officialTopTown from '../../../view_img/Service/totalActivity/rating/topTownOfficial.jpg';

const bannerContents = {
  bannerTitle: '농어촌 관광 등급',
  bannerContent: `한국 농어촌 공사와 농식품부에서 신뢰성 있는 정보 제공을 위해 매년 실시하는 등급 평가로, 여러 개의 분야를 4가지 등급으로 나누어 평가`,
  gradeCircleContents: [
    { imgSrc: activityImg, imgText: '체험' },
    { imgSrc: foodImg, imgText: '음식' },
    { imgSrc: accommodationImg, imgText: '숙박' },
  ],
  bannerImgLeft: tractor,
  bannerImgRight: woman,
};
const categoryCircleImg = [
  {
    title: '지역',
    imgSrc: typeRegion,
    imgStyle: { width: '6.375rem', height: '5.1875rem' },
  },
  {
    title: '체험',
    imgSrc: typeActivity,
    imgStyle: { width: '5.0625rem' },
  },
  {
    title: '음식',
    imgSrc: typeFood,
    imgStyle: {
      width: '5.625rem',
      height: '5.625rem',
      borderRadius: '50%',
      objectFit: 'cover',
    },
  },
  {
    title: '숙박',
    imgSrc: typeAccommodation,
    imgStyle: { width: '7.375rem' },
  },
  {
    title: '기준연도',
    imgSrc: typeYear,
    imgStyle: { width: '4.375rem' },
  },
];
const tableContents = {
  tableHead: {
    region: '지역',
    town: '마을명',
    topTown: '으뜸촌',
    gradeType: {
      main: '등급 분류',
      subTitle: {
        activity: '체험',
        food: '음식',
        accommodation: '숙박',
      },
    },
  },
  tableBody: {
    medals: [medal1, medal2, medal3],
    topTownOfficial: officialTopTown,
  },
};

const topTown = {
  topText: '현재 으뜸촌',
  imgSrc: topTownImg,
  bottomText: '연천 푸르내 마을', //TODO: 으뜸촌 임시
};

export default function RuralRatingPage() {
  const { tableHead, tableBody } = tableContents;
  const [ratingData, setRatingData] = useState([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, _] = useState(778 / 10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/rating/getData/${requestPageNo}`);
        const data = await response.json();
        setRatingData(data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
      }
    };
    fetchData();
  }, [requestPageNo]);

  return (
    <main className="appMain">
      <RatingTopBanner bannerContents={bannerContents} />
      <RatingMiddleBox topTownInfo={topTown} />
      <RatingCategoryBoxSet categoryCircleImg={categoryCircleImg} />

      <RatingDataTable
        tableHead={tableHead}
        tableBodySource={tableBody}
        tableBodyData={ratingData}
      />
      <PageNoBox
        curr={requestPageNo}
        total={totalPageNo}
        handlePageNo={setRequestPageNo}
      />
    </main>
  );
}
