import React from 'react';
import './RecCardContentsBox.css';
import RecCardTitle from './RecCardTitle';
import EventDetailTitleCountBox from '../../community/event/Detail/Title/EventDetailTitleCountBox';
import RecCardContentsLine from './RecCardContentsLine';
import RecCardContentsText from './RecCardContentsText';

export default function RecCardContentsBox({ contents }) {
  const { title, favoritesNum, viewNum, text } = contents;

  return (
    <div className="recCardContentsBox">
      <div>
        <RecCardTitle title={title} />
        <EventDetailTitleCountBox
          favoritesNum={favoritesNum}
          viewNum={viewNum}
        />
      </div>
      <RecCardContentsLine />
      <RecCardContentsText text={text} />
    </div>
  );
}