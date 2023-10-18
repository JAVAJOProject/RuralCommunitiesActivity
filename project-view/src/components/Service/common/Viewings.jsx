import React from 'react';
import views from '../../../view_img/Service/common/views.svg';
import MiniBox from './MiniBox';

export default function Viewings({ viewings, style }) {
  return <MiniBox imgSrc={views} content={viewings} style={style} />;
}
