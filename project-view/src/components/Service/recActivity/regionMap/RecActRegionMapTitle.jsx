import React, { useContext, useEffect, useState } from 'react';
import './RecActRegionMapTitle.css';
import { RegionMapInfoContext } from './RegionMapInfoContext';

export default function RecActRegionMapTitle({ type }) {
  const { regionSidoInfo, regionSigunguInfo } =
    useContext(RegionMapInfoContext);
  const [text, setText] = useState('');

  useEffect(() => {
    switch (type) {
      case 'sido':
        if (regionSidoInfo?.regionName) {
          setText(regionSidoInfo?.regionName);
        } else {
          setText('전체');
        }
        break;
      case 'sigungu':
        if (regionSigunguInfo?.regionName) {
          const rName = regionSigunguInfo?.regionName;

          if (rName.includes(' ')) {
            setText(rName.substring(0, rName.indexOf(' ') - 1));
          } else {
            const rNameTrim = rName.substr(0, rName.length - 1);
            setText(rNameTrim.length === 1 ? `${rNameTrim}(구)` : rNameTrim);
          }
        } else {
          setText('');
        }
        break;
      default:
        setText('');
    }
  }, [regionSidoInfo?.regionName, regionSigunguInfo?.regionName]);

  return (
    <div className="recActRegionMapTitle">
      <p>{text}</p>
    </div>
  );
}
