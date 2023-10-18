import React, { useEffect } from 'react';
import ContentBox from './ContentBox';
import { useImmer } from 'use-immer';
import { fetchDataGET, fetchImgGET } from '../../../../config/ApiService';

let initialContents = {
  recActivity: {
    mainTitle: '추천 체험',
    subtitle: ['농촌빛길이 직접 추천하는 멋진 체험들 어떠세요?'],
    images: [],
  },
  totalActivity: {
    mainTitle: '참여 가능한 체험 바로 확인!',
    subtitle: [
      '얼마 남지 않았어요! 참여하러 달려가요!',
      '지역별 체험 장소 보기',
    ],
    contents: {
      bigImg: {},
      smallImgs: [],
    },
  },
  recTown: {
    mainTitle: '추천 마을',
    subtitle: ['생소한 자연마을경험! 농촌빛길에서 신나고 재밌게 즐겨보자~!'],
    contents: {
      town1: {},
      town2: {},
    },
  },
  event: {
    title: '이벤트',
    eventThumbnailImg: null,
  },
  notice: {
    title: '공지사항',
    data: [],
  },
};

export default function MainPageContents() {
  const [contents, updateContents] = useImmer(initialContents);
  useEffect(() => {
    async function fetchContents() {
      try {
        const recActivity = await fetchDataGET(
          '/main/recommendation-activity-text'
        );
        const recActivityImages = await fetchImgGET(
          recActivity,
          'recAPostId',
          '/main/recommendation-activity-image'
        );

        updateContents((draft) => {
          draft.recActivity.images = recActivity.map((item, index) => {
            return {
              ...item,
              recAThumbnailImg: recActivityImages[index],
            };
          });
        });

        const activity = await fetchDataGET('/main/total-activity-text');
        const activityImages = await fetchImgGET(
          activity,
          'aPostId',
          '/main/total-activity-image'
        );

        updateContents((draft) => {
          draft.totalActivity.contents.bigImg = {
            ...activity[0],
            aThumbnailImg: activityImages[0],
          };
        });
        updateContents((draft) => {
          draft.totalActivity.contents.smallImgs = activity
            .filter((item, index) => index !== 0)
            .map((item, index) => {
              return {
                ...item,
                aThumbnailImg: activityImages[index + 1],
              };
            });
        });

        const recTown = await fetchDataGET('/main/recommendation-town-text');
        const recTownImages = await fetchImgGET(
          recTown,
          'recTId',
          '/main/recommendation-town-image'
        );

        updateContents((draft) => {
          draft.recTown.contents.town1 = {
            ...recTown[0],
            recTThumbnailImg: recTownImages[0],
          };
          draft.recTown.contents.town2 = {
            ...recTown[1],
            recTThumbnailImg: recTownImages[1],
          };
        });

        const event = await fetchDataGET('/main/event-info');
        const eventImages = await fetchImgGET(
          event,
          'eventId',
          '/main/event-image'
        );

        updateContents((draft) => {
          draft.event.eventThumbnailImg = eventImages;
        });

        const notice = await fetchDataGET('/main/notice-info');

        updateContents((draft) => {
          draft.notice.data = notice.map((item) => ({
            ...item,
            noticeDateCreated: new Date(item.noticeDateCreated),
          }));
        });

        await fetchDataGET('/site/access/visitor/record');
      } catch (error) {
        console.error(error);
      }
    }
    fetchContents();
  }, []);

  return (
    <div className="mainPageContents">
      <ContentBox contents={contents} />
    </div>
  );
}
