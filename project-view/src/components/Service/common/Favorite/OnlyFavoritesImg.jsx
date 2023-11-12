import React, { useState } from "react";
import fullHeart from "../../../../view_img/Service/common/fullHeart.jpg";
import emptyHeart from "../../../../view_img/Service/common/emptyHeart.jpg";
import "./OnlyFavoritesImg.css";

export default function OnlyFavoritesImg({ on, postId, postTypeId, favoritesNum, style }) {
  const [temp, setTemp] = useState(false);

  return (
    <div className="onlyFavoritesImg" style={style} onClick={(e)=>{e.stopPropagation()}}>
      <img
        src={temp ? fullHeart : emptyHeart}
        title={`${(+favoritesNum).toLocaleString()}❣`}
        onClick={(e) => {
          setTemp((show) => !show);
          e.stopPropagation();
        }}
        // src={on ? fullHeart : emptyHeart}
      />
    </div>
  );
}