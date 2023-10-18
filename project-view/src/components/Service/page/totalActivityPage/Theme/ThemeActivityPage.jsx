import React, { useEffect, useState } from "react";
import TotalActTitleBox from "./title/TotalActTitleBox";

import tractor from "../../../../../view_img/Service/totalActivity/theme/tractor.png";
import fishing from "../../../../../view_img/Service/totalActivity/theme/fishing.svg";
import tradition from "../../../../../view_img/Service/totalActivity/theme/plate.svg";
import plate from "../../../../../view_img/Service/totalActivity/theme/etcActivity.png";

import ThemeCardSet from "./themeCard/ThemeCardSet";
import { fetchDataGET, fetchImgGET } from "../../../../../config/ApiService";

const themeImages = [
  { themeName: "농촌 체험", imgSrc: tractor },
  { themeName: "어촌 체험", imgSrc: fishing },
  { themeName: "전통 체험", imgSrc: tradition },
  { themeName: "기타 체험", imgSrc: plate },
];

const testDBContents = [
  { eventId: 1 },
  { eventId: 2 },
  { eventId: 3 },
  { eventId: 4 },
];

export default function ThemeActivityPage() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const contentsArr = [];
        for (let themeId = 1; themeId <= 4; themeId++) {
          const activity = await fetchDataGET(
            `/totalActivity/byThemeList/card/${themeId}/${1}`
          );
          const activityImg = await fetchImgGET(
            testDBContents,
            "eventId",
            "/main/event-image"
          );

          contentsArr.push(
            activity.map((item, index) => {
              return {
                ...item,
                aThumbnailImg: activityImg[index],
              };
            })
          );
        }
        setContents(contentsArr);
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