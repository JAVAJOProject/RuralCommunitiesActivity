import React from "react";
import farm from "../../../../../../view_img/Service/totalActivity/theme/farm.png";
import TotalActRatingTitleSet from "./TotalActRatingTitleSet";
import TotalActRatingTitleBarImg from "./TotalActRatingTitleBarImg";
import "./TotalActRatingTitleBox.css";

const content = {
  imgSrc: farm,
};

export default function TotalActRatingTitleBox() {
  return (
    <div className="totalActRatingTitleBox" style={{ display: "flex" }}>
      <TotalActRatingTitleBarImg imgSrc={content.imgSrc} />
      <TotalActRatingTitleSet />
    </div>
  );
}
