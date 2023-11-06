import React from 'react';
import './MypageServiceCard.css';

import BlueCardBox from '../../UI/BlueCardBox';
import MypageCardRectImg from './MypageCardRectImg';
import MypageServiceBar from './MypageServiceBar';
import MypageCardTitleSet from './MypageCardTitleSet';
import MypageCardDetailList from './MypageCardDetailList';
import MypageMypostBtnBox from '../post/MypageMypostBtnBox';

export default function MypageServiceCard({
  imgSrc,
  title,
  listBtn,
  detailListTitle,
  detailListContent,
  type,
  eventStatus,
  detailLink,
  editLink,
  handleDelete,
  listLink,
  listType,
  eventStatusId
}) {
  return (
    <BlueCardBox>
      <div className="mypageServiceCard">
        <MypageCardRectImg imgSrc={imgSrc} />
        <div className="mypageServiceCardContent">
          <MypageCardTitleSet
            titleText={title}
            listBtn={listBtn}
            type={type}
            eventStatus={eventStatus ?? ''}
            link={listLink}
            listType={listType ?? ''}
            eventStatusId={eventStatusId ?? ''}
          />
          <MypageServiceBar />
          <ul className="mypageServiceCardUl">
            <div>
              {detailListTitle
                .filter((_, index) => index < 2)
                .map((item, index) => (
                  <MypageCardDetailList
                    title={item}
                    content={detailListContent[index]}
                  />
                ))}
            </div>
            <div>
              {detailListTitle
                .filter((_, index) => index >= 2)
                .map((item, index) => (
                  <MypageCardDetailList
                    title={item}
                    content={detailListContent[index + 2]}
                  />
                ))}
            </div>
          </ul>
          <MypageMypostBtnBox
            links={[detailLink, editLink]}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </BlueCardBox>
  );
}
