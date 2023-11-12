import React from 'react';
import CardListContentBox from '../../common/UI/CardListContentBox';
import YellowActivityCard from '../Theme/activityCard/YellowActivityCard';
import YellowActivityCardImg from '../Theme/activityCard/YellowActivityCardImg';
import YellowActivityText from '../Theme/activityCard/YellowActivityText';
import { useNavigate } from 'react-router-dom';

export default function TotalActivityCalendarContents({ dataList }) {
  const navigate = useNavigate();

  return (
    <CardListContentBox
      style={{
        marginTop: '5rem',
        width: '62.7rem',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {dataList.map((data) => (
        <YellowActivityCard
          key={data.aPostId}
          style={{ margin: '1rem' }}
          onClick={() => {
            navigate(`/app/activity/detail/${data.aPostId}/info`);
          }}
        >
          <YellowActivityCardImg
            imgSrc={data.aThumbnailImg}
            on={false}
            postId={+data.aPostId}
            postTypeId={+data.postTypeId}
            favoritesNum={+data.aFavoriteCnt}
          />
          <YellowActivityText title={data.aName} text={data.aOneLiner} />
        </YellowActivityCard>
      ))}
    </CardListContentBox>
  );
}