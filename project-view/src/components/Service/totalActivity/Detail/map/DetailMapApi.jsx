import React, { useEffect } from 'react';
import './DetailMapApi.css';

import pin from '../../../../../view_img/Service/common/locationPin.png';

const { kakao } = window;

export default function DetailMapApi({ addr, locationName, style }) {
  useEffect(() => {
    const container = document.getElementById('kakaoMapInActivityDetail');

    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(addr, function (result, status) {
      if (status === kakao.maps.services.Status.OK && result) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        const imgSrc = pin;
        const imgSize = new kakao.maps.Size(30, 42.18);
        const imgOption = { offset: new kakao.maps.Point(15, 42.18) };

        const markerImage = new kakao.maps.MarkerImage(
          imgSrc,
          imgSize,
          imgOption
        );

        const marker = new kakao.maps.Marker({
          map,
          position: coords,
          image: markerImage,
        });
        marker.setMap(map);

        const locationContent = `<div class='detailMapApiText'><p>${locationName}</p></div>`;
        const customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: coords,
          content: locationContent,
          yAnchor: 2,
        });
        map.setCenter(coords);
      }
    });
  }, [addr, locationName]);

  return (
    addr &&
    locationName && (
      <div
        className="detailMapApi"
        id="kakaoMapInActivityDetail"
        style={style ?? {}}
      ></div>
    )
  );
}
