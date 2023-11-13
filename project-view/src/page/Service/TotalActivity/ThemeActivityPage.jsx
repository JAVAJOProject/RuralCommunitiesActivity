import React, { useEffect, useState } from 'react';
import { fetchDataGET, fetchImgGET } from '../../../config/ApiService';
import { useImmer } from 'use-immer';

import ThemeCardSet from '../../../components/Service/totalActivity/Theme/themeCard/ThemeCardSet';

import tractor from '../../../view_img/Service/totalActivity/theme/tractor.png';
import fishing from '../../../view_img/Service/totalActivity/theme/fishing.svg';
import tradition from '../../../view_img/Service/totalActivity/theme/plate.svg';
import plate from '../../../view_img/Service/totalActivity/theme/etcActivity.png';
import PageNavigateBtn from '../../../components/Service/common/PageNavigateBtn/PageNavigateBtn';

const themeImages = [
  { themeName: '농촌 체험', imgSrc: tractor },
  { themeName: '어촌 체험', imgSrc: fishing },
  { themeName: '전통 체험', imgSrc: tradition },
  { themeName: '기타 체험', imgSrc: plate },
];

export default function ThemeActivityPage() {
  const [contents, updateContents] = useImmer([]);

  const [requestPageNoFarm, setRequestPageNoFarm] = useState(1);
  const [requestPageNoFish, setRequestPageNoFish] = useState(1);
  const [requestPageNoTrad, setRequestPageNoTrad] = useState(1);
  const [requestPageNoEtc, setRequestPageNoEtc] = useState(1);
  const themePage = [
    { curr: requestPageNoFarm, setter: setRequestPageNoFarm },
    { curr: requestPageNoFish, setter: setRequestPageNoFish },
    { curr: requestPageNoTrad, setter: setRequestPageNoTrad },
    { curr: requestPageNoEtc, setter: setRequestPageNoEtc },
  ];

  const [totalPostNoFarm, setTotalPostNoFarm] = useState(1);
  const [totalPostNoFish, setTotalPostNoFish] = useState(1);
  const [totalPostNoTrad, setTotalPostNoTrad] = useState(1);
  const [totalPostNoEtc, setTotalPostNoEtc] = useState(1);
  const themeTotalPost = [
    { total: totalPostNoFarm, setter: setTotalPostNoFarm },
    { total: totalPostNoFish, setter: setTotalPostNoFish },
    { total: totalPostNoTrad, setter: setTotalPostNoTrad },
    { total: totalPostNoEtc, setter: setTotalPostNoEtc },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const contentsArr = [];

        for (let themeId = 1; themeId <= 4; themeId++) {
          const activity = await fetchDataGET(
            `/totalActivity/byThemeList/card/${themeId}/${
              themePage[themeId - 1].curr
            }`
          );

          const activityImg = await fetchImgGET(
            activity,
            'aId',
            '/img/totalActivityImage/one'
          );

          const activityData = activity.map((item, index) => ({
            ...item,
            aThumbnailImg: activityImg[index],
          }));

          const [perPagePostNo, totalPostNo] = await fetchDataGET(
            `/totalActivity/byThemeList/card/total-count/${themeId}`
          );
          themeTotalPost[themeId - 1].setter(+totalPostNo / +perPagePostNo);

          contentsArr.push(activityData);
        }

        updateContents((draft) => {
          draft.length = 0;
          draft.push(...contentsArr);
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [
    requestPageNoFarm,
    requestPageNoFish,
    requestPageNoTrad,
    requestPageNoEtc,
  ]);

  return (
    <>
      {contents.map((contentArr, index) => {
        const isLeft = index % 2 === 0 ? false : true;
        return (
          <div
            key={`content_${index}`}
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              margin: 'auto',
            }}
          >
            <PageNavigateBtn
              text="<"
              curr={themePage[index].curr}
              total={themeTotalPost[index].total}
              handleCurr={themePage[index].setter}
            />
            <ThemeCardSet
              titles={themeImages[index]}
              contents={contentArr}
              isLeft={isLeft}
            />
            <PageNavigateBtn
              text=">"
              curr={themePage[index].curr}
              total={themeTotalPost[index].total}
              handleCurr={themePage[index].setter}
            />
          </div>
        );
      })}
    </>
  );
}
