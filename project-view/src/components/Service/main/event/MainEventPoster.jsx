import React from 'react';
import './MainEventPoster.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CommunityImgRadioArrow from '../../community/memberCommunity/CommunityImgRadioArrow';

export default function MainEventPoster({ imgSrc, className }) {
  const classes = [className, 'mainEventPoster'].join(' ');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    autoplay: true,
    draggable: false,
    prevArrow: <CommunityImgRadioArrow type="prev" />,
    nextArrow: <CommunityImgRadioArrow type="next" />,
    initialSlide: 0,
  };

  return (
    <div className={classes}>
      <Slider {...settings}>
        <img src={imgSrc[0]} />
        <img src={imgSrc[1]} />
        <img src={imgSrc[2]} />
        <img src={imgSrc[3]} />
        <img src={imgSrc[4]} />
      </Slider>
    </div>
  );
}
