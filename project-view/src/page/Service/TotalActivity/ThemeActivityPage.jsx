import React, { useEffect, useState } from "react";
import TotalActTitleBox from "../../../components/Service/totalActivity/Theme/title/TotalActTitleBox";

import tractor from "../../../view_img/Service/totalActivity/theme/tractor.png";
import fishing from "../../../view_img/Service/totalActivity/theme/fishing.svg";
import tradition from "../../../view_img/Service/totalActivity/theme/plate.svg";
import plate from "../../../view_img/Service/totalActivity/theme/etcActivity.png";

import ThemeCardSet from "../../../components/Service/totalActivity/Theme/themeCard/ThemeCardSet";
import { fetchDataGET, fetchImgGET } from "../../../config/ApiService";
import { useImmer } from "use-immer";

const themeImages = [
  { themeName: "농촌 체험", imgSrc: tractor },
  { themeName: "어촌 체험", imgSrc: fishing },
  { themeName: "전통 체험", imgSrc: tradition },
  { themeName: "기타 체험", imgSrc: plate },
];

export default function ThemeActivityPage() {
  const [contents, updateContents] = useImmer([]);
  const [requestPageNoFarm, setRequestPageNoFarm] = useState(1);
  const [requestPageNoFish, setRequestPageNoFish] = useState(1);
  const [requestPageNoTrad, setRequestPageNoTrad] = useState(1);
  const [requestPageNoEtc, setRequestPageNoEtc] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const contentsArr = [];
        const themePage = [
          requestPageNoFarm,
          requestPageNoFish,
          requestPageNoTrad,
          requestPageNoEtc,
        ];

        for (let themeId = 1; themeId <= 4; themeId++) {
          const activity = await fetchDataGET(
            `/totalActivity/byThemeList/card/${themeId}/${
              themePage[themeId - 1]
            }`
          );

          const activityImg = await fetchImgGET(
            activity,
            "aId",
            "/img/totalActivityImage/one"
          );

          const activityData = activity.map((item, index) => ({
            ...item,
            aThumbnailImg: activityImg[index],
          }));

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
      <main className="appMain">
        <div style={{ marginBottom: "5rem" }}>
          <TotalActTitleBox />
          {contents.map((contentArr, index) => {
            const isLeft = index % 2 === 0 ? false : true;
            return (
              <div key={`content_${index}`}>
                <ThemeCardSet
                  titles={themeImages[index]}
                  contents={contentArr}
                  isLeft={isLeft}
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
