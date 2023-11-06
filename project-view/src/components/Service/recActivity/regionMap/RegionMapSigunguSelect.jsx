import React, { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';
import './RegionMapSelect.css';

import { RegionMapInfoContext } from './RegionMapInfoContext';
import findCentroid from '../../../../utils/findCentroid';

import sig from '../../../../content/sig.json';
const { kakao } = window;

export default function RegionMapSigunguSelect({ handleUrl, deleteUrl }) {
  const { regionSidoInfo, regionSigunguInfo, updateRegionSigunguInfo } =
    useContext(RegionMapInfoContext);
  const [polygons, updatePolygons] = useImmer([]);
  const [customOverlays, updateCustomOverlays] = useImmer([]);

  useEffect(() => {
    const container = document.getElementById('regionSigunguPolygonMap');
    let lev;
    if (regionSigunguInfo?.regionId) {
      lev = regionSidoInfo?.regionId < 8 ? 7 : 9;
    } else if (regionSidoInfo?.regionId === 15) {
      lev = 12;
    } else if (regionSidoInfo?.regionId === 16) {
      lev = 10;
    } else if ([8, 9, 10, 11, 12, 13, 14].includes(regionSidoInfo?.regionId)) {
      lev = 11;
    } else {
      lev = 9;
    }
    const options = {
      center: new kakao.maps.LatLng(
        regionSidoInfo?.LatLng[0],
        regionSidoInfo?.LatLng[1]
      ),
      level: lev,
    };
    const map = new kakao.maps.Map(container, options);

    const displaySigungu = (coordinates, name, regionId) => {
      let path = [];
      let points = [];

      coordinates[0].forEach((coordinate) => {
        let point = {};
        point.x = coordinate[1];
        point.y = coordinate[0];
        points.push(point);
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
      });

      const areaPoints = findCentroid(points);
      const namePosition = new kakao.maps.LatLng(areaPoints[0], areaPoints[1]);

      let customOverlay;
      if (
        regionSigunguInfo?.regionId &&
        regionSigunguInfo?.regionId === regionId
      ) {
        map.setCenter(namePosition);
      } else {
        customOverlay = new kakao.maps.CustomOverlay({});
        customOverlay.setContent(
          `<div class="regionSidoPolygonMapName">${name}</div>`
        );
        customOverlay.setPosition(namePosition);
        customOverlay.setMap(map);
        updateCustomOverlays((draft) => {
          draft.push(customOverlay);
        });
      }

      let polygon;
      if (
        !regionSigunguInfo?.regionId ||
        (regionSigunguInfo?.regionId &&
          regionSigunguInfo?.regionId !== regionId)
      ) {
        polygon = new kakao.maps.Polygon({
          map: map,
          path: path,
          strokeWeight: 2,
          strokeColor: '#fff',
          strokeOpacity: 0.8,
          strokeStyle: 'solid',
          fillColor: '#5CCFBE',
          fillOpacity: 0.7,
        });
      } else {
        polygon = new kakao.maps.Polygon({
          map: map,
          path: path,
          strokeWeight: 2,
          strokeColor: '#fff',
          strokeOpacity: 0.8,
          strokeStyle: 'solid',
          fillOpacity: 0,
        });
      }

      updatePolygons((draft) => {
        draft.push(polygon);
      });

      kakao.maps.event.addListener(polygon, 'mouseover', function () {
        polygon.setOptions({ fillColor: '#bdded9' });
      });

      kakao.maps.event.addListener(polygon, 'mouseout', function () {
        polygon.setOptions({ fillColor: '#5CCFBE' });
      });

      kakao.maps.event.addListener(polygon, 'click', function () {
        if (!regionSigunguInfo?.regionId) {
          updateRegionSigunguInfo((draft) => {
            draft.regionId = regionId;
            draft.regionName = name;
          });
          handleUrl(regionId);

          polygon.setMap(null);
          customOverlay.setMap(null);

          map.setCenter(namePosition);
          map.setLevel(regionSidoInfo.regionId < 8 ? 7 : 9);
        } else {
          updateRegionSigunguInfo((draft) => {
            draft.regionId = '';
            draft.regionName = '';
          });
          deleteUrl();
        }
      });
    };

    updatePolygons((draft) => {
      draft.length = 0;
    });
    updateCustomOverlays((draft) => {
      draft.length = 0;
    });

    if (regionSidoInfo?.regionId && regionSidoInfo?.LatLng) {
      container.style.display = 'block';

      const data = sig.features;

      data.forEach((val) => {
        const coordinates = val.geometry.coordinates;
        const name = val.properties.SIG_KOR_NM;
        const rId = val.properties.DB_ID;

        displaySigungu(coordinates, name, rId);
      });
    } else {
      container.style.display = 'none';
    }
  }, [regionSidoInfo?.LatLng, regionSigunguInfo?.regionId]);

  return <div id="regionSigunguPolygonMap" className="regionPolygonMap"></div>;
}
