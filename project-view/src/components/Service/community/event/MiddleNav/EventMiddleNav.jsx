import React, { useContext, useState } from 'react';
import GrayBarInEvent from './GrayBarInEvent';
import RecruitingCheckBar from './RecruitingCheckBar';
import MenuBtns from '../../../common/MenuBtn/MenuBtns';
import './EventMiddleNav.css';
import EventPostRequestBtn from './EventPostRequestBtn';

const links = {
  cardLink: '/app/community/event/board/list/card',
  listLink: '/app/community/event/board/list/text',
};

export default function EventMiddleNav() {
  const [activeCard, setActiveListCard] = useState(true);
  const { cardLink, listLink } = links;

  const [temp, setTemp] = useState(true);
  const handleTemp = () => setTemp((show) => !show);

  return (
    <div className="eventMiddleNav">
      <GrayBarInEvent activeCard={activeCard} onClick={handleTemp} />
      {temp ? <RecruitingCheckBar /> : <EventPostRequestBtn />}
      <MenuBtns
        cardLink={cardLink}
        listLink={listLink}
        handleActiveCard={setActiveListCard}
      />
    </div>
  );
}