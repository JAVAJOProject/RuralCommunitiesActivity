import React from "react";
import "./YellowActivityCardImg.css";
import Favorites from "../../../common/Favorite/Favorites";

export default function YellowActivityCardImg({ imgSrc, on, postId, postTypeId, favoritesNum }) {
  return (
    <div className="yellowActivityCardImg">
      <img src={imgSrc} alt="" />
      <Favorites
        on={on}
        postId={+postId}
        postTypeId={+postTypeId}
        favoritesNum={+favoritesNum}
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "0.7rem",
          opacity: "80%",
        }}
      />
    </div>
  );
}