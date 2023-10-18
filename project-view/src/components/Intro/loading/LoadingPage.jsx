import React, { useEffect, useState } from 'react';
import LoadingBackground from './LoadingBackground';

import loading1 from '../../../view_img/Service/common/loading/loading9.jpg';
import loading2 from '../../../view_img/Service/common/loading/loading4.jpg';
import loading3 from '../../../view_img/Service/common/loading/loading3.jpg';
import loading4 from '../../../view_img/Service/common/loading/loading10.jpg';
import loading5 from '../../../view_img/Service/common/loading/loading1.jpg';
import loading6 from '../../../view_img/Service/common/loading/loading7.jpg';
import loading7 from '../../../view_img/Service/common/loading/loading6.jpg';
import loading8 from '../../../view_img/Service/common/loading/loading2.jpg';
import loading9 from '../../../view_img/Service/common/loading/loading5.jpg';
import loading10 from '../../../view_img/Service/common/loading/loading8.jpg';

const images = [
  loading1,
  loading2,
  loading3,
  loading4,
  loading5,
  loading6,
  loading7,
  loading8,
  loading9,
  loading10,
];

export default function LoadingPage() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((idx) => (idx === images.length - 1 ? 0 : idx + 1));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <LoadingBackground image={images[index]} />;
}
