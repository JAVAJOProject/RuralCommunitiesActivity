import React, { useEffect, useState, createContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { fetchDataGET, fetchImgGET } from '../../../config/ApiService';

import RecTownGuideTitle from '../../../components/Service/recTown/guideTitle/RecTownGuideTitle';
import RecTownRegionMapSet from '../../../components/Service/recActivity/regionMap/RecTownRegionMapSet';
import SearchingBox from '../../../components/Service/common/UI/SearchingBox/SearchingBox';
import CardListContentBox from '../../../components/Service/common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../components/Service/common/UI/CardBoxTitleSet/CardBoxTitleSet';
import KeywordAndOrder from '../../../components/Service/recActivity/filterContext/KeywordAndOrder';
import RecGreenBoxCard from '../../../components/Service/recActivity/keywordFiltered/RecGreenBoxCard';
import RecActOrderBox from '../../../components/Service/recActivity/order/RecActOrderBox';
import RecCardContentsBox from '../../../components/Service/recActivity/keywordFiltered/RecCardContentsBox';
import RecCardImg from '../../../components/Service/recActivity/keywordFiltered/RecCardImg';
import PageNoBox from '../../../components/Service/common/PageNo/PageNoBox';

import townGuideImg from '../../../view_img/Service/recTown/townTitle.svg';
import mapTitleImg from '../../../view_img/Service/recActivity/title.svg';
import RecTownReportBtn from '../../../components/Service/recTown/button/RecTownReportBtn';

const defaultContents = {
  titles: {
    mainTitle: '마을 도감',
    subtitle: '구석구석에 있는 마을들을 소개해드릴게요',
    imgSrc: townGuideImg,
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
  button: '마을 제보하기',
};

export const RegionMapInfoContextRecTown = createContext();

export default function RecTownRegionPage() {
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
            `/recommendation/town-sido/${sidoId}/${requestPageNo}?requestOrderType=${orderUrl}`
          );
          [perPagePost, totalPost] = await fetchDataGET(
            `/recommendation/town-sido/total-count/${sidoId}`
          );
        } else if (sidoId && sigunguId) {
          data = await fetchDataGET(
            `/recommendation/town-sigungu/${sigunguId}/${requestPageNo}?requestOrderType=${orderUrl}`
          );
          [perPagePost, totalPost] = await fetchDataGET(
            `/recommendation/town-sigungu/total-count/${sigunguId}`
          );
        } else {
          data = await fetchDataGET(
            `/recommendation/town-list/${requestPageNo}?requestOrderType=${orderUrl}`
          );
          [perPagePost, totalPost] = await fetchDataGET(
            '/recommendation/town-list/total-count'
          );
        }
        const images = await fetchImgGET(
          data,
          'recTId',
          '/main/recommendation-town-image'
        );
        updateDbContents((draft) => {
          draft.length = 0;
          data.forEach((item, index) => {
            draft.push({
              postId: item.recTId,
              townId: item.townId,
              sigunguId: item.sigunguId,
              sidoId: item.sidoId,
              postTypeId: item.postTypeId,
              title: item.recTTitle,
              likesCnt: item.recTLikeCnt,
              viewCnt: item.recTViewCnt,
              textContents: item.recTContent,
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
  }, [
    regionSidoInfo?.regionId,
    regionSigunguInfo?.regionId,
    orderUrl,
    requestPageNo,
  ]);

  const { titles, contentsTitle, orders, button } = defaultContents;
  contentsTitle.title = `전체 ${totalPostNo}건`;

  return (
    <main className="appMain">
      <RecTownGuideTitle
        imgSrc={titles.imgSrc}
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
      />
      <RegionMapInfoContextRecTown.Provider
        value={{
          regionSidoInfo,
          updateRegionSidoInfo,
          regionSigunguInfo,
          updateRegionSigunguInfo,
        }}
      >
        <RecTownRegionMapSet sidoId={sidoUrl} sigunguId={sigunguUrl} />
      </RegionMapInfoContextRecTown.Provider>
      <SearchingBox style={{ margin: '3rem auto' }} />
      <CardListContentBox>
        {true && (
          <div
            style={
              dbContents?.length > 0
                ? { position: 'absolute', top: '-4rem', left: '2rem' }
                : { position: 'absolute', top: '-4rem', left: '-11rem' }
            }
          >
            <RecTownReportBtn text={button} />
          </div>
        )}
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
                      `/app/recommendation/villageGuide/detail/${item.postId}`
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
