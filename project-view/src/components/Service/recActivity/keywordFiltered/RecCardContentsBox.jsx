import React from "react";
import "./RecCardContentsBox.css";
import RecCardTitle from "./RecCardTitle";
import EventDetailTitleCountBox from "../../community/event/Detail/Title/EventDetailTitleCountBox";
import RecCardContentsLine from "./RecCardContentsLine";
import RecCardContentsText from "./RecCardContentsText";

export default function RecCardContentsBox({ contents }) {
  const { recATitle, recAFavoriteCnt, recAViewCount, recAContent } = contents;

  return (
    <div className="recCardContentsBox">
      <div>
        <RecCardTitle title={recATitle} />
        <EventDetailTitleCountBox
          favoritesNum={recAFavoriteCnt}
          viewNum={recAViewCount}
        />
      </div>
      <RecCardContentsLine />
      <RecCardContentsText text={recAContent} />
    </div>
  );
}
