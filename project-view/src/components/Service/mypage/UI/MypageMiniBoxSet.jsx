import React from "react";
import "./MypageMiniBoxSet.css";

import Favorites from "../../common/Favorite/Favorites";
import Likes from "../../common/Like/Likes";
import Viewings from "../../common/Viewings";

export default function MypageMiniBoxSet({
  on,
  postId,
  postTypeId,
  likesNum,
  favoriteNum,
  viewingsNum,
}) {
  return (
    <div className="mypageMiniBoxSet">
      {(favoriteNum === 0 || favoriteNum) && (
        <Favorites favoritesNum={+favoriteNum} style={{ fontFamily: "Jua" }} />
      )}
      {(likesNum === 0 || likesNum) && (
        <Likes likesNum={+likesNum} style={{ fontFamily: "Jua" }} />
      )}
      <Viewings viewings={+viewingsNum} style={{ fontFamily: "Jua" }} />
    </div>
  );
}
