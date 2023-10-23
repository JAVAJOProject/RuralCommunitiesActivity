import React, { useEffect } from 'react';
import './RegionMap.css';

const { kakao } = window;

export default function RegionMap({ addr }) {
  useEffect(() => {
    const container = document.getElementById('regionMap');

    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
    };
    const map = new kakao.maps.Map(container, options);
    if (addr !== '전체') {
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(addr, function (result, status) {
        if (status === kakao.maps.services.Status.OK && result) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          map.setCenter(coords);
        }
      });
    }
  }, [addr]);

  return addr && <div className="regionMap" id="regionMap"></div>;
}
