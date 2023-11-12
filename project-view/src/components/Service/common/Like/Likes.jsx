import React, { useState } from "react";
import "./Likes.css";

import LikeMiniBox from "./LikeMiniBox";
import fullHeart from "../../../../view_img/Service/common/fullHeart.jpg";
import emptyHeart from "../../../../view_img/Service/common/emptyHeart.jpg";

export default function Likes({
  on,
  postId,
  postTypeId,
  likesNum,
  style,
  fontSize,
}) {
  const [temp, setTemp] = useState(false);

  return (
    <LikeMiniBox
      onClick={(e) => {
        setTemp((show) => !show);
        e.stopPropagation();
      }}
      // imgSrc={on ? fullHeart : emptyHeart}
      imgSrc={temp ? fullHeart : emptyHeart}
      content={(+likesNum).toLocaleString()}
      imgClassName="like"
      style={style}
      fontSize={fontSize}
    />
  );
}