import React from 'react';
import BlueCardBox from '../../../UI/BlueCardBox';
import MypageCardRectImg from './MypageCardRectImg';
import './MypageServiceCard.css';
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
            eventStatus={eventStatus}
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
                    content={detailListContent[index]}
                  />
                ))}
            </div>
          </ul>
          {
            <MypageMypostBtnBox
              links={['', '', '']}
            /> /* //TODO: 링크도 넣고 이벤트별 렌더링 조건도 넣기 */
          }
        </div>
      </div>
    </BlueCardBox>
  );
}
