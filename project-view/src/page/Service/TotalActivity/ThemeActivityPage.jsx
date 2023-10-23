import React, { useEffect, useState } from "react";
import TotalActTitleBox from "./title/TotalActTitleBox";

import tractor from "../../../../../view_img/Service/totalActivity/theme/tractor.png";
import fishing from "../../../../../view_img/Service/totalActivity/theme/fishing.svg";
import tradition from "../../../../../view_img/Service/totalActivity/theme/plate.svg";
import plate from "../../../../../view_img/Service/totalActivity/theme/etcActivity.png";

import testImg from "../../../../../view_img/Service/mainPage/testImg/totalActivityTest1.jpg";
import ThemeCardSet from "./themeCard/ThemeCardSet";
import { fetchDataGET, fetchImgGET } from "../../../../../config/ApiService";

const themeImages = [
  { themeName: "농촌 체험", imgSrc: tractor },
  { themeName: "어촌 체험", imgSrc: fishing },
  { themeName: "전통 체험", imgSrc: tradition },
  { themeName: "기타 체험", imgSrc: plate },
];

const testDBContents = [
  { activityId: 1 },
  { activityId: 2 },
  { activityId: 3 },
  { activityId: 4 },
  { activityId: 5 },
  { activityId: 6 },
  { activityId: 7 },
  { activityId: 8 },
  { activityId: 9 },
  { activityId: 10 },
  { activityId: 11 },
  { activityId: 12 },
  { activityId: 13 },
  { activityId: 14 },
  { activityId: 15 },
  { activityId: 16 },
];

export default function ThemeActivityPage() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const contentsArr = [];

        // Fetch data for each theme
        for (let themeId = 1; themeId <= 4; themeId++) {
          const activity = await fetchDataGET(
            `/totalActivity/byThemeList/card/${themeId}/${1}`
          );
          contentsArr.push(activity);
        }

        const activityImg = await fetchImgGET(
          testDBContents,
          "activityId",
          "/img/totalActivityImage/one"
        );

        const combinedData = contentsArr.map((activity, index) => {
          return activity.map((item, itemIndex) => {
            return {
              ...item,
              aThumbnailImg: activityImg[index * 4 + itemIndex],
            };
          });
        });

        setContents(combinedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

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