import React from 'react';
import './RatingTopBanner.css';
import RatingTopBannerTitle from './RatingTopBannerTitle';
import RatingTopBannerContent from './RatingTopBannerContent';
import RatingTopBannerCircleImgBox from './RatingTopBannerCircleImgBox';
import RatingTopBannerLeftImg from './RatingTopBannerLeftImg';
import RatingTopBannerRightImg from './RatingTopBannerRightImg';

export default function RatingTopBanner({ bannerContents }) {
  const {
    bannerTitle,
    bannerContent,
    gradeCircleContents,
    bannerImgLeft,
    bannerImgRight,
  } = bannerContents;

  return (
    <div className="ratingTopBanner">
      <div>
        <div>
          <RatingTopBannerLeftImg imgSrc={bannerImgLeft} />
        </div>
        <div>
          <RatingTopBannerTitle bannerTitle={bannerTitle} />
          <RatingTopBannerContent bannerContent={bannerContent} />
          <RatingTopBannerCircleImgBox
            gradeCircleContents={gradeCircleContents}
          />
        </div>
        <div>
          <RatingTopBannerRightImg imgSrc={bannerImgRight} />
        </div>
      </div>
    </div>
  );
}
