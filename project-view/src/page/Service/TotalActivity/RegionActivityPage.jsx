import React, { useState, useEffect } from 'react';
import TotalActTitleBox from '../../../components/Service/totalActivity/Theme/title/TotalActTitleBox';
import ActivityRegionBoxSet from '../../../components/Service/totalActivity/Region/regionBox/ActivityRegionBoxSet';
import { useImmer } from 'use-immer';
import SearchingBox from '../../../components/Service/common/UI/SearchingBox/SearchingBox';
import CardListContentBox from '../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';
import YellowActivityCard from '../../../components/Service/totalActivity/Theme/activityCard/YellowActivityCard';
import YellowActivityCardImg from '../../../components/Service/totalActivity/Theme/activityCard/YellowActivityCardImg';
import YellowActivityText from '../../../components/Service/totalActivity/Theme/activityCard/YellowActivityText';

import titleImg from '../../../view_img/Service/totalActivity/region/title.svg';

import testImg from '../../../view_img/Service/mainPage/testImg/recTown1.jpg';
import RegionMap from '../../../components/Service/totalActivity/Region/regionMap/RegionMap';
import { useNavigate } from 'react-router-dom';

const contents = {
  regionSido: '전체',
  subtitle: {
    text: '',
    titleImg: titleImg,
    circleColor: '#FFAB48',
    isDarken: false,
  },
  order: ['최신순', '좋아요순', '조회순'],
};

const testContents = {
  region: {
    sido: [
      '서울',
      '경기',
      '인천',
      '충북',
      '세종',
      '대전',
      '충남',
      '전북',
      '전남',
      '광주',
      '강원',
      '경북',
      '대구',
      '경남',
      '부산',
      '울산',
      '제주',
    ],
    seoul: [
      '도봉',
      '노원',
      '강북',
      '중랑',
      '성북',
      '종로',
      '동대문',
      '은평',
      '서대문',
      '용산',
      '중(구)',
      '성동',
      '광진',
      '강동',
      '송파',
      '강남',
      '서초',
      '관악',
      '동작',
      '금천',
      '영등포',
      '양천',
      '구로',
      '강서',
      '마포',
    ],
  },
};
const testData = [
  {
    aPostId: 1,
    aName: '체험 이름',
    aOneLiner: '체험 한 줄 소개',
    aThumbnailImg: testImg,
    aFavoriteCnt: 215468,
  },
  {
    aPostId: 2,
    aName: '체험 이름',
    aOneLiner: '체험 한 줄 소개',
    aThumbnailImg: testImg,
    aFavoriteCnt: 215468,
  },
  {
    aPostId: 3,
    aName: '체험 이름',
    aOneLiner: '체험 한 줄 소개',
    aThumbnailImg: testImg,
    aFavoriteCnt: 215468,
  },
  {
    aPostId: 4,
    aName: '체험 이름',
    aOneLiner: '체험 한 줄 소개',
    aThumbnailImg: testImg,
    aFavoriteCnt: 215468,
  },
  {
    aPostId: 5,
    aName: '체험 이름',
    aOneLiner: '체험 한 줄 소개',
    aThumbnailImg: testImg,
    aFavoriteCnt: 215468,
  },
  {
    aPostId: 6,
    aName: '체험 이름',
    aOneLiner: '체험 한 줄 소개',
    aThumbnailImg: testImg,
    aFavoriteCnt: 215468,
  },
  {
    aPostId: 7,
    aName: '체험 이름',
    aOneLiner: '체험 한 줄 소개',
    aThumbnailImg: testImg,
    aFavoriteCnt: 215468,
  },
  {
    aPostId: 8,
    aName: '체험 이름',
    aOneLiner: '체험 한 줄 소개',
    aThumbnailImg: testImg,
    aFavoriteCnt: 215468,
  },
];

export default function RegionActivityPage() {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState(contents.regionSido);
  const [regionList, updateRegionList] = useImmer([
    ...testContents.region.sido,
  ]);
  const [totalPost, setTotalPost] = useState(30); // 임시

  useEffect(() => {
    if (
      selectedRegion === '서울' ||
      testContents.region.seoul.includes(selectedRegion)
    ) {
      // 임시
      updateRegionList([...testContents.region.seoul]);
    } else {
      updateRegionList([...testContents.region.sido]);
    }
  }, [selectedRegion]);

  const { regionSido, subtitle, order } = contents;
  subtitle.text = `전체 ${totalPost}건`;

  return (
    <div>
      <TotalActTitleBox />
      <RegionMap addr={selectedRegion} />
      <ActivityRegionBoxSet
        total={regionSido}
        selected={selectedRegion}
        regionList={regionList}
        handleSelectedRegion={setSelectedRegion}
      />
      <div
        style={{
          margin: '1rem auto',
          width: 'fit-content',
          marginBottom: '3rem',
        }}
      >
        <SearchingBox />
      </div>
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={subtitle.titleImg}
          text={subtitle.text}
          circleColor={subtitle.circleColor}
          isDarken={subtitle.isDarken}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '71rem' }}>
          {testData.map((data) => (
            <YellowActivityCard
              style={{ margin: '1rem' }}
              onClick={() => {
                navigate(`/app/activity/detail/${data.aPostId}/info`);
              }}
            >
              <YellowActivityCardImg
                imgSrc={data.aThumbnailImg}
                favoritesNum={+data.aFavoriteCnt}
              />
              <YellowActivityText title={data.aName} text={data.aOneLiner} />
            </YellowActivityCard>
          ))}
        </div>
      </CardListContentBox>
      <PageNoBox curr={1} total={6} />
    </div>
  );
}