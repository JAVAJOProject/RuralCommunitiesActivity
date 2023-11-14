import React, { useEffect, useState, createContext } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetchDataGET, fetchImgGET } from '../../../config/ApiService';

import RecActRegionTitle from '../../../components/Service/recActivity/regionTitle/RecActRegionTitle';
import RecActRegionMapSet from '../../../components/Service/recActivity/regionMap/RecActRegionMapSet';
import SearchingBox from '../../../components/Service/common/UI/SearchingBox/SearchingBox';
import CardListContentBox from '../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import KeywordAndOrder from '../../../components/Service/recActivity/filterContext/KeywordAndOrder';
import RecGreenBoxCard from '../../../components/Service/recActivity/keywordFiltered/RecGreenBoxCard';
import RecActOrderBox from '../../../components/Service/recActivity/order/RecActOrderBox';
import RecCardContentsBox from '../../../components/Service/recActivity/keywordFiltered/RecCardContentsBox';
import RecCardImg from '../../../components/Service/recActivity/keywordFiltered/RecCardImg';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';

import mapClickImg from '../../../view_img/Service/recActivity/mapClick.jpg';
import mapTitleImg from '../../../view_img/Service/recActivity/title.svg';

const defaultContents = {
  titles: {
    mainTitle: '지도 콕콕',
    subtitle: '지도를 콕콕! 눌러 지역별 추천 체험을 확인해보세요!',
    imgSrc: mapClickImg,
  },
  contentsTitle: {
    imgSrc: mapTitleImg,
    backgroundColor: '#FFAB48',
  },
  orders: [
    { text: '최신순', requestOrderType: 'date' },
    { text: '좋아요순', requestOrderType: 'likes' },
    { text: '조회순', requestOrderType: 'viewCount' },
  ],
};

export const RegionMapInfoContextRecAct = createContext();

export default function RecActRegionPage() {
  const [searchParams, _] = useSearchParams();
  const orderUrl = searchParams.get('order');

  const sidoUrl = searchParams.get('sido');
  const sigunguUrl = searchParams.get('sigungu');

  const [regionSidoInfo, updateRegionSidoInfo] = useImmer({
    regionId: sidoUrl ?? '',
    regionName: '',
    LatLng: '',
  });
  const [regionSigunguInfo, updateRegionSigunguInfo] = useImmer({
    regionId: sigunguUrl ?? '',
    regionName: '',
  });

  const navigate = useNavigate();
  const [dbContents, updateDbContents] = useImmer([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);
  const [totalPostNo, setTotalPostNo] = useState(0);

  useEffect(() => {
    async function fetchContents() {
      try {
        let data = [];
        let totalPost = 0;
        let perPagePost = 0;
        const sidoId = regionSidoInfo?.regionId;
        const sigunguId = regionSigunguInfo?.regionId;

        if (sidoId && !sigunguId) {
          data = await fetchDataGET(
            `/recommendation/activity-sido/${sidoId}/${requestPageNo}?requestOrderType=${orderUrl}`
          );
          [perPagePost, totalPost] = await fetchDataGET(
            `/recommendation/activity-sido/total-count/${sidoId}`
          );
        } else if (sidoId && sigunguId) {
          data = await fetchDataGET(
            `/recommendation/activity-sigungu/${sigunguId}/${requestPageNo}?requestOrderType=${orderUrl}`
          );
          [perPagePost, totalPost] = await fetchDataGET(
            `/recommendation/activity-sigungu/total-count/${sigunguId}`
          );
        } else {
          data = await fetchDataGET(
            `/recommendation/activity-list/${requestPageNo}?requestOrderType=${orderUrl}`
          );
          [perPagePost, totalPost] = await fetchDataGET(
            '/recommendation/total-count'
          );
        }
        const images = await fetchImgGET(
          data,
          'recAPostId',
          '/main/recommendation-activity-image'
        );
        updateDbContents((draft) => {
          draft.length = 0;
          data.forEach((item, index) => {
            draft.push({
              postId: item.recAPostId,
              sigunguId: item.sigunguId,
              sidoId: item.sidoId,
              postTypeId: item.postTypeId,
              title: item.recATitle,
              likesCnt: item.recALikeCnt,
              viewCnt: item.recAViewCnt,
              textContents: item.recAContent,
              thumbnailImg: images[index],
            });
          });
        });
        setTotalPostNo(+totalPost);
        setTotalPageNo(Math.ceil(+totalPost / +perPagePost));
      } catch (error) {
        console.log(error);
      }
    }
    fetchContents();
  }, [regionSidoInfo?.regionId, regionSigunguInfo?.regionId, orderUrl, requestPageNo]);

  const { titles, contentsTitle, orders } = defaultContents;
  contentsTitle.title = `전체 ${totalPostNo}건`;

  return (
    <main className="appMain">
      <RecActRegionTitle
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
        imgSrc={titles.imgSrc}
      />
      <RegionMapInfoContextRecAct.Provider
        value={{
          regionSidoInfo,
          updateRegionSidoInfo,
          regionSigunguInfo,
          updateRegionSigunguInfo,
        }}
      >
        <RecActRegionMapSet sidoId={sidoUrl} sigunguId={sigunguUrl} />
      </RegionMapInfoContextRecAct.Provider>
      <SearchingBox style={{ margin: '3rem auto' }} />
      <CardListContentBox>
        <CardBoxTitleSet
          imgSrc={contentsTitle.imgSrc}
          circleColor={contentsTitle.backgroundColor}
          text={contentsTitle.title}
        />
        <KeywordAndOrder>
          <RecActOrderBox orders={orders} />
          <div style={{ clear: 'both' }}>
            {dbContents?.length > 0 &&
              dbContents.map((item, index) => (
                <RecGreenBoxCard
                  key={item.postId}
                  style={{ display: 'flex', position: 'relative' }}
                  handleClick={() => {
                    navigate(
                      `/app/recommendation/activity/detail/${item.postId}`
                    );
                  }}
                >
                  <RecCardImg imgSrc={item.thumbnailImg} isLeft={index !== 1} />
                  <RecCardContentsBox contents={item} isLeft={index !== 1} />
                </RecGreenBoxCard>
              ))}
          </div>
        </KeywordAndOrder>
      </CardListContentBox>
      <div style={{ margin: '2rem' }}>
        {totalPageNo && (
          <PageNoBox
            curr={requestPageNo}
            total={totalPageNo}
            handlePageNo={setRequestPageNo}
          />
        )}
      </div>
    </main>
  );
}
