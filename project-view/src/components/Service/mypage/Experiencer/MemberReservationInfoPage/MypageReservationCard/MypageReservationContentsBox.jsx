import React from "react";
import MypageReservationCard from "./MypageReservationCard";
import MypageReservationImg from "./MypageReservationImg";
import MypageReservationContents from "./MypageReservationContents";

export default function MypageReservationContentsBox({
  subtitles,
  data,
  imgSrc,
}) {
  return (
    <MypageReservationCard>
      <div className="mypageReservationContentsBox">
        <MypageReservationImg imgSrc={imgSrc} />
        <MypageReservationContents
          mainTitle={data.activityInfo.aName}
          subtitles={subtitles}
          contents={data}
        />
      </div>
    </MypageReservationCard>
  );
}
