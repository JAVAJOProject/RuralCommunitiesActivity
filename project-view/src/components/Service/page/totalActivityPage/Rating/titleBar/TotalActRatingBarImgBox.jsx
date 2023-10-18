import React from "react";
import activity from "../../../../../../view_img/Service/totalActivity/theme/activity.png";
import food from "../../../../../../view_img/Service/totalActivity/theme/food.png";
import acc from "../../../../../../view_img/Service/totalActivity/theme/acc.png";
import TotalActRatingBarImg from "./TotalActRatingBarImg";

import "./TotalActRatingBarImgBox.css";

export default function TotalActRatingBarImgBox() {
  const contentData = [
    { image: activity, text: "체험" },
    { image: food, text: "음식" },
    { image: acc, text: "숙박" },
  ];

  return (
    <div className="totalActRatingBarImgBox">
      {contentData.map((content, index) => (
        <TotalActRatingBarImg
          key={index}
          image={content.image}
          text={content.text}
        />
      ))}
    </div>
  );
}
