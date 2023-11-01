import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
import testImg from '../../../view_img/Service/mainPage/testImg/circleTest1.jpg';

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

const testContents = [
  {
    recAPostId: 1,
    sigunguId: 101,
    recATitle: '체험 이름',
    recAFavoriteCnt: 235169,
    recAViewCount: 235169,
    recAContent: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
    recAThumbnailImg: testImg,
  },
  {
    recAPostId: 2,
    sigunguId: 102,
    recATitle: '체험 이름',
    recAFavoriteCnt: 235169,
    recAViewCount: 235169,
    recAContent: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
    recAThumbnailImg: testImg,
  },
  {
    recAPostId: 3,
    sigunguId: 103,
    recATitle: '체험 이름',
    recAFavoriteCnt: 235169,
    recAViewCount: 235169,
    recAContent: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
    recAThumbnailImg: testImg,
  },
];

export default function RecActRegionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderUrl = searchParams.get('order');

  const navigate = useNavigate();
  const [dbContents, updateDbContents] = useImmer([]);
  const [requestPageNo, setRequestPageNo] = useState(1);
  const [totalPageNo, setTotalPageNo] = useState(1);
  const [totalPostNo, setTotalPostNo] = useState(0);

  useEffect(() => {
    updateDbContents((draft) => {
      draft.length = 0;
      testContents.forEach((item) => {
        draft.push({
          postId: item.recAPostId,
          sigunguId: item.sigunguId,
          title: item.recATitle,
          likesCnt: item.recAFavoriteCnt,
          viewCnt: item.recAViewCount,
          textContents: item.recAContent,
          thumbnailImg: item.recAThumbnailImg,
        });
      });
    });
    // updateDbContents((draft) => {
    //   draft.map((item, index) => ({
    //     ...item,
    //     thumbnailImg: testImg,
    //   }));
    // });

    setTotalPostNo(30);
  }, []);

  const { titles, contentsTitle, orders } = defaultContents;
  contentsTitle.title = `전체 ${totalPostNo}건`;

  return (
    <main className="appMain">
      <RecActRegionTitle
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
        imgSrc={titles.imgSrc}
      />
      <RecActRegionMapSet regionSido={''} regionSigungu={''} />
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
            {dbContents.map((item, index) => (
              <RecGreenBoxCard
                key={item.postId}
                style={{ display: 'flex', position: 'relative' }}
                handleClick={() => {
                  navigate(`/app/recommendation/detail/${item.postId}`);
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
        <PageNoBox
          curr={requestPageNo}
          total={totalPageNo}
          handlePageNo={setRequestPageNo}
        />
      </div>
    </main>
  );
}
