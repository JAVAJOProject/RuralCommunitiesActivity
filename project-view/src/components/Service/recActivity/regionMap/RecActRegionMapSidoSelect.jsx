import React, { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import './RegionMapSelect.css';

import { RegionMapInfoContextRecAct } from '../../../../page/Service/Recommendation/RecActRegionPage';
import findCentroid from '../../../../utils/findCentroid';

import sido from '../../../../content/sido.json';
const { kakao } = window;

export default function RecActRegionMapSidoSelect({ handleUrl, deleteUrl }) {
  const { regionSidoInfo, updateRegionSidoInfo } =
    useContext(RegionMapInfoContextRecAct);
  const [polygons, updatePolygons] = useImmer([]);

  useEffect(() => {
    const container = document.getElementById('regionSidoPolygonMap');
    const options = {
      center: new kakao.maps.LatLng(35.866826, 127.9786567),
      level: 13,
    };
    const map = new kakao.maps.Map(container, options);

    const displaySido = (coordinates, name, regionId) => {
      let path = [];
      let points = [];

      coordinates[0].forEach((coordinate) => {
        let point = {};
        point.x = coordinate[1];
        point.y = coordinate[0];
        points.push(point);
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
      });

      let polygon = new kakao.maps.Polygon({
        map: map,
        path: path,
        strokeWeight: 2,
        strokeColor: '#fff',
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        fillColor: regionSidoInfo?.regionId === regionId ? '#fff' : '#5CCFBE',
        fillOpacity: 0.7,
      });

      updatePolygons((draft) => {
        draft.push(polygon);
      });

      const areaPoints = findCentroid(points);
      const namePosition = new kakao.maps.LatLng(
        name === '경기' ? +areaPoints[0] - 0.15 : areaPoints[0],
        name === '경기' ? +areaPoints[1] + 0.2 : areaPoints[1]
      );

      const customOverlay = new kakao.maps.CustomOverlay({});
      customOverlay.setContent(
        `<div class="regionSidoPolygonMapName">${name}</div>`
      );
      customOverlay.setPosition(namePosition);
      customOverlay.setMap(map);
      if (regionSidoInfo?.regionId && regionSidoInfo?.regionId == regionId) {
        updateRegionSidoInfo((draft) => {
          draft.LatLng = areaPoints;
        });
      }

      kakao.maps.event.addListener(polygon, 'mouseover', function () {
        if (regionSidoInfo?.regionId === regionId) {
          polygon.setOptions({ fillColor: '#fff' });
        } else {
          polygon.setOptions({ fillColor: '#bdded9' });
        }
      });

      kakao.maps.event.addListener(polygon, 'mouseout', function () {
        if (regionSidoInfo?.regionId === regionId) {
          polygon.setOptions({ fillColor: '#fff' });
        } else {
          polygon.setOptions({ fillColor: '#5CCFBE' });
        }
      });

      kakao.maps.event.addListener(polygon, 'click', function () {
        if (regionSidoInfo?.regionId === regionId) {
          updateRegionSidoInfo((draft) => {
            draft.regionId = '';
            draft.LatLng = '';
            draft.regionName = '';
          });
          polygon.setOptions({
            fillColor: '#5CCFBE',
          });
          deleteUrl();
        } else {
          updateRegionSidoInfo((draft) => {
            draft.regionId = regionId;
            draft.LatLng = areaPoints;
            draft.regionName = name;
          });
          polygon.setOptions({
            fillColor: '#fff',
          });
          handleUrl(regionId);
        }
      });
    };

    const data = sido.features;

    data.forEach((val) => {
      const coordinates = val.geometry.coordinates;
      const name = val.properties.SIG_KOR_NM;
      const rId = val.properties.DB_ID;

      displaySido(coordinates, name, rId);
    });
  }, [regionSidoInfo?.regionId]);

  return <div id="regionSidoPolygonMap" className="regionPolygonMap"></div>;
}
