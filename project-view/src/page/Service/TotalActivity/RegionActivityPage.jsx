import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
import { fetchDataGET, fetchImgGET } from '../../../config/ApiService';

import TotalActTitleBox from '../../../components/Service/totalActivity/Theme/title/TotalActTitleBox';
import ActivityRegionBoxSet from '../../../components/Service/totalActivity/Region/regionBox/ActivityRegionBoxSet';
import SearchingBox from '../../../components/Service/common/UI/SearchingBox/SearchingBox';
import CardListContentBox from '../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';
import YellowActivityCard from '../../../components/Service/totalActivity/Theme/activityCard/YellowActivityCard';
import YellowActivityCardImg from '../../../components/Service/totalActivity/Theme/activityCard/YellowActivityCardImg';
import YellowActivityText from '../../../components/Service/totalActivity/Theme/activityCard/YellowActivityText';
import RegionMap from '../../../components/Service/totalActivity/Region/regionMap/RegionMap';

import titleImg from '../../../view_img/Service/totalActivity/region/title.svg';

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

export default function RegionActivityPage() {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [selectedSigungu, setSelectedSigungu] = useState('전체');
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);

  const [totalActivityCount, setTotalActivityCount] = useState(0);
  const [activityData, setActivityData] = useState([]);
  const [sidoData, setSidoData] = useState([]);
  const [sigunguData, setSigunguData] = useState([]);
  const [loadingSigungu, setLoadingSigungu] = useState(false);

  useEffect(() => {
    async function fetchSidoData() {
      try {
        const response = await fetchDataGET(`/recommendation/sido`);
        setSidoData(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSidoData();
  }, []);

  useEffect(() => {
    async function fetchSigunguData(selectedSido) {
      try {
        if (selectedSido === '전체' || selectedSido === '세종') {
          setSigunguData([]);
        } else {
          setLoadingSigungu(true);
          const selectedSidoInfo = sidoData.find(
            (sido) => sido.sidoName === selectedSido
          );
          if (selectedSidoInfo) {
            const response = await fetchDataGET(
              `/recommendation/sido-sigungu/${selectedSidoInfo.sidoId}`
            );
            setSigunguData(Array.isArray(response) ? response : [response]);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingSigungu(false);
      }
    }

    fetchSigunguData(selectedRegion);
  }, [selectedRegion, sidoData]);

  const fetchActivityData = async (page) => {
    try {
      let endpoint;
      if (selectedRegion === '전체') {
        endpoint = `/totalActivity/byTotalList/card/${page}`;
      } else {
        if (selectedSigungu === '전체') {
          endpoint = `/totalActivity/byTotalList/card/${page}`;
        } else {
          const sigunguInfo = sigunguData.find(
            (s) => s && s.sigunguName === selectedSigungu
          );
          if (sigunguInfo) {
            endpoint = `/totalActivity/byRegionList/card/${sigunguInfo.sigunguId}/${page}`;
          }
        }
      }

      if (selectedRegion === '세종') {
        endpoint = `/totalActivity/byTotalList/card/${page}`;
      }

      const totalActNum = await fetchOneContentGET(`/totalActivity/totalCount`);
      setTotalActivityCount(totalActNum);

      const activitiesData = await fetchDataGET(endpoint);

      const perPagePostCount = 8;
      setTotalPageNo(Math.ceil(totalActivityCount / perPagePostCount));

      const imageData = await fetchImgGET(
        activitiesData,
        'aId',
        '/img/totalActivityImage/one'
      );

      const activityList = activitiesData.map((activity, index) => ({
        ...activity,
        aThumbnailImg: imageData[index],
      }));

      setActivityData(activityList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchActivityData(requestPageNo);
  }, [requestPageNo, selectedRegion, selectedSigungu, sigunguData]);

  const subtitle = {
    text: `전체 ${totalActivityCount}건`,
    titleImg: titleImg,
    circleColor: '#FFAB48',
    isDarken: false,
  };

  return (
    <div>
      <TotalActTitleBox />
      <RegionMap addr={selectedRegion} />
      <ActivityRegionBoxSet
        total="전체"
        selected={selectedRegion}
        regionList={sidoData.map((sido) => sido.sidoName)}
        sigunguList={sigunguData.map((sigungu) => sigungu.sigunguName)}
        handleSelectedRegion={setSelectedRegion}
        handleSelectedSigungu={setSelectedSigungu}
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
          {activityData.map((data) => (
            <YellowActivityCard
              style={{ margin: '1rem' }}
              onClick={() => {
                navigate(`/app/activity/detail/${data.aId}/info`);
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
      <PageNoBox
        curr={requestPageNo}
        total={totalPageNo}
        handlePageNo={setRequestPageNo}
      />
    </div>
  );
}
