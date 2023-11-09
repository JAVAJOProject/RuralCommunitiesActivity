import React, { useState } from 'react';
import './CommunityMemberCardImgRadio.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CommunityImgRadioArrow from './CommunityImgRadioArrow';

import img1 from '../../../../view_img/Service/community/community/memo1.png';
import img2 from '../../../../view_img/Service/community/community/memo2.png';
import img3 from '../../../../view_img/Service/community/community/memo3.png';
import img4 from '../../../../view_img/Service/community/community/memo4.png';
import img5 from '../../../../view_img/Service/community/community/memo5.png';
import img6 from '../../../../view_img/Service/community/community/memo6.png';
import img7 from '../../../../view_img/Service/community/community/memo7.png';
import img8 from '../../../../view_img/Service/community/community/memo8.png';
import img9 from '../../../../view_img/Service/community/community/memo9.png';
import img10 from '../../../../view_img/Service/community/community/memo10.png';

export default function CommunityMemberCardImgRadio({
  radioRef,
  text,
  inputName,
  defaultValue,
}) {
  const [selectedImg, setSelectedImg] = useState(defaultValue ?? 1);
  const memos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerPadding: '0',
    autoplay: false,
    draggable: true,
    prevArrow: <CommunityImgRadioArrow type="prev" />,
    nextArrow: <CommunityImgRadioArrow type="next" />,
    initialSlide: selectedImg < 6 ? 0 : 5,
  };

  return (
    <div className="communityMemberCardImgRadio">
      <p>{text}</p>
      <input
        ref={radioRef}
        type="hidden"
        name={inputName}
        value={selectedImg}
      />
      <div>
        <Slider {...settings}>
          {memos.map((item, index) => (
            <div key={index + 1}>
              <label
                className="sliderMemoLabel"
                htmlFor={`${inputName}_${index + 1}`}
              >
                <input
                  className="sliderMemoInput"
                  type="radio"
                  name={inputName}
                  id={`${inputName}_${index + 1}`}
                  value={index + 1}
                  checked={selectedImg === index + 1}
                  onChange={() => {
                    setSelectedImg(index + 1);
                  }}
                />
                <img className="sliderMemoImg" src={item} alt="" />
              </label>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
