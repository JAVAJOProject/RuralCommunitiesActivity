import React from 'react';
import './MypageMemberFavoritesTypeSet.css';
import CardListContentBox from '../../../common/UI/CardListContentBox';
import CardBoxTitleSet from '../../../common/UI/CardBoxTitleSet/CardBoxTitleSet';
import MypageMemberFavoritesCard from './MypageMemberFavoritesCard';
import PageNoBox from '../../../common/PageNo/PageNoBox';

export default function MypageMemberFavoritesTypeSet({
  defaultContents,
  dbContents,
  requestPageNo,
  totalPageNo,
  handleRequestPageNo,
}) {
  const { imgSrc, title, backgroundColor } = defaultContents;

  return (
    <CardListContentBox style={{ marginBottom: '5rem' }}>
      <CardBoxTitleSet
        imgSrc={imgSrc}
        text={title}
        circleColor={backgroundColor}
        isContain={true}
      />
      <div className="mypageMemberFavoritesCardBox">
        {dbContents.map((item) => (
          <MypageMemberFavoritesCard
            key={item.postId}
            imgSrc={item.thumbnailImg}
            title={item.postTitle}
            oneLiner={item.oneLiner}
          />
        ))}
      </div>
      <div className="mypageMemberFavoritesPageNoBox">
        <PageNoBox
          curr={requestPageNo}
          total={totalPageNo}
          handlePageNo={handleRequestPageNo}
        />
      </div>
    </CardListContentBox>
  );
}
