import React from 'react';
import DetailYellowBoxUI from '../UI/DetailYellowBoxUI';

export default function EventImageBox({ images }) {
  return (
    images.length > 0 && (
      <DetailYellowBoxUI>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </DetailYellowBoxUI>
    )
  );
}
