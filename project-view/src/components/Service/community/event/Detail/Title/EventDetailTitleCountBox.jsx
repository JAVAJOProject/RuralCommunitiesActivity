import React from "react";
import "./EventDetailTitleCountBox.css";

import Favorites from "../../../../common/Favorite/Favorites";
import Likes from "../../../../common/Like/Likes";
import Viewings from "../../../../common/Viewings";

export default function EventDetailTitleCountBox({
  on,
  postId,
  postTypeId,
  favoritesNum,
  likesNum,
  viewNum,
}) {
  return (
    <div className="eventDetailTitleCountBox">
      {(favoritesNum === 0 || favoritesNum) && (
        <Favorites
          on={on}
          postId={+postId}
          postTypeId={+postTypeId}
          favoritesNum={+favoritesNum}
          style={{ fontFamily: "SUITE Variable", fontSize: "0.9375rem" }}
        />
      )}
      {(likesNum === 0 || likesNum) && (
        <Likes
          on={on}
          postId={+postId}
          postTypeId={+postTypeId}
          likesNum={+likesNum}
          style={{ fontFamily: "SUITE Variable", fontSize: "0.9375rem" }}
        />
      )}
      <Viewings
        viewings={+viewNum}
        style={{ fontFamily: "SUITE Variable", fontSize: "0.9375rem" }}
      />
    </div>
  );
}