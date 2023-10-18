import React from "react";
import TotalActRatingTitle from "./TotalActRatingTitle";
import TotalActRatingText from "./TotalActRatingContent";
import "./TotalActRatingTitleSet.css";

const contents = {
  title: "농어촌 관광 등급",
  text1:
    "한국 농어촌 공사와 농식품부에서 신뢰성 있는 정보 제공을 위해 매년 실시하는 등급 평가하며",
  text2: "여러 개의 분야를 4가지 등급으로 나누어 평가",
};
export default function TotalActRatingTitleSet() {
  return (
    <div className="totalActRatingTitleSet">
      <TotalActRatingTitle title={contents.title} />
      <TotalActRatingText text1={contents.text1} />
      <TotalActRatingText text2={contents.text2} />
    </div>
  );
}
//함수()안에 들어가있으면 딴데서 가져온거
