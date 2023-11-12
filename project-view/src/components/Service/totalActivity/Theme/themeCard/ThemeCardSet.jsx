import React from "react";
import "./ThemeCardSet.css";
import ActivityContentsBox from "../UI/ActivityContentsBox";
import TotalActThemeTitleContentBox from "../content/TotalActThemeTitleContentBox";
import YellowActivityCard from "../activityCard/YellowActivityCard";
import YellowActivityCardImg from "../activityCard/YellowActivityCardImg";
import YellowActivityText from "../activityCard/YellowActivityText";
import { useNavigate } from "react-router-dom";

export default function ThemeCardSet({ titles, isLeft, contents }) {
  const navigate = useNavigate();

  return (
    <div>
      <ActivityContentsBox>
        <TotalActThemeTitleContentBox contents={titles} isLeft={isLeft} />
        <div className="themeActivityBox">
          {contents &&
            contents.map((item) => {
              const { aId, postTypeId, aFavoriteCnt, aName, aOneLiner, aThumbnailImg } =
                item;
              return (
                <YellowActivityCard
                  key={aId}
                  onClick={() => {
                    navigate(`/app/activity/detail/${aId}/info`);
                  }}
                >
                  <YellowActivityCardImg
                    on={false}
                    postId={+aId}
                    postTypeId={+postTypeId}
                    imgSrc={aThumbnailImg}
                    favoritesNum={+aFavoriteCnt}
                  />
                  <YellowActivityText title={aName} text={aOneLiner} />
                </YellowActivityCard>
              );
            })}
        </div>
      </ActivityContentsBox>
    </div>
  );
}