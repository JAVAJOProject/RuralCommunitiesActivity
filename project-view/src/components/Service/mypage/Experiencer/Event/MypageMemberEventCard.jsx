import React from 'react';
import BlueCardBox from '../../UI/BlueCardBox';
import MypageMemberEventImage from './MypageMemberEventImage';
import MypageMemberEventContents from './MypageMemberEventContents';

export default function MypageMemberEventCard({ cardContents, contents }) {
  return (
    <BlueCardBox style={{ display: 'flex', alignItems: 'center' }}>
      <MypageMemberEventImage imgSrc={contents.eventThumbnailImg} />
      <MypageMemberEventContents
        cardContents={cardContents}
        contents={contents}
      />
    </BlueCardBox>
  );
}
