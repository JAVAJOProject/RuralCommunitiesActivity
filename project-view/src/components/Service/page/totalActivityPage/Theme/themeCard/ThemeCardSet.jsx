import React from 'react';
import './ThemeCardSet.css';
import ActivityContentsBox from '../UI/ActivityContentsBox';
import TotalActThemeTitleContentBox from '../content/TotalActThemeTitleContentBox';
import YellowActivityCard from '../activityCard/YellowActivityCard';
import YellowActivityCardImg from '../activityCard/YellowActivityCardImg';
import YellowActivityText from '../activityCard/YellowActivityText';

export default function ThemeCardSet({ titles, isLeft, contents }) {
  return (
    <div>
      <ActivityContentsBox>
        <TotalActThemeTitleContentBox contents={titles} isLeft={isLeft} />
        <div className="themeActivityBox">
          {contents &&
            contents.map((item) => {
              const { aFavoriteCnt, aName, aOneLiner, aThumbnailImg } = item;
              return (
                <YellowActivityCard>
                  <YellowActivityCardImg
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
