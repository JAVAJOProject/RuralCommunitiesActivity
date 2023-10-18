import React from 'react';
import pin from '../../../view_img/Service/common/locationPin.png';
import PinMiniBox from './PinMiniBox';

export default function LocationPin({ locationName, className, style }) {
  return (
    <PinMiniBox
      imgSrc={pin}
      content={locationName}
      className={className}
      style={style}
    />
  );
}
