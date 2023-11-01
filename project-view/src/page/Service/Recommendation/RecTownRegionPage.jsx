import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useImmer } from 'use-immer';

import RecTownGuideTitle from '../../../components/Service/recTown/guideTitle/RecTownGuideTitle';
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

import townGuideImg from '../../../view_img/Service/recTown/townTitle.svg';
import mapTitleImg from '../../../view_img/Service/recActivity/title.svg';
import testImg from '../../../view_img/Service/mainPage/testImg/circleTest1.jpg';

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
};

const testContents = [
  {
    recTId: 1,
    townId: 1,
    recTTitle: '체험 이름',
    recTFavoriteCnt: 235169,
    recTViewCnt: 235169,
    recTContent: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
    recTThumbnailImg: testImg,
  },
  {
    recTId: 2,
    townId: 2,
    recTTitle: '체험 이름',
    recTFavoriteCnt: 235169,
    recTViewCnt: 235169,
    recTContent: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
    recTThumbnailImg: testImg,
  },
  {
    recTId: 3,
    townId: 3,
    recTTitle: '체험 이름',
    recTFavoriteCnt: 235169,
    recTViewCnt: 235169,
    recTContent: `여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉.
여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. 여기는 체험 소개입니다. 신나는 어쩌고를 할수 있는 어쩌구 저꺼꾸 머라머라머라 하기. 아 예시 내용 채우기도 어렵다잉. `,
    recTThumbnailImg: testImg,
  },
];

export default function RecTownRegionPage() {
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
          postId: item.recTId,
          townId: item.townId,
          title: item.recTTitle,
          likesCnt: item.recTFavoriteCnt,
          viewCnt: item.recTViewCnt,
          textContents: item.recTContent,
          thumbnailImg: item.recTThumbnailImg,
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
      <RecTownGuideTitle
        imgSrc={titles.imgSrc}
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
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
