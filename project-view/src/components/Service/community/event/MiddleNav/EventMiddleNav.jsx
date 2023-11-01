import React, { useContext, useState } from 'react';
import GrayBarInEvent from './GrayBarInEvent';
import RecruitingCheckBar from './RecruitingCheckBar';
import MenuBtns from '../../../common/MenuBtn/MenuBtns';
import './EventMiddleNav.css';
import EventPostRequestBtn from './EventPostRequestBtn';
import { useNavigate } from 'react-router-dom';

const links = {
  cardLink: '/app/community/event/board/list/card',
  listLink: '/app/community/event/board/list/text',
  registLink: '/app/community/event/registration',
};

export default function EventMiddleNav() {
  const [activeCard, setActiveListCard] = useState(true);
  const navigate = useNavigate();
  const { cardLink, listLink, registLink } = links;

  const [temp, setTemp] = useState(true);
  const handleTemp = () => setTemp((show) => !show);

  return (
    <div className="eventMiddleNav">
      <GrayBarInEvent activeCard={activeCard} onClick={handleTemp} />
      {temp ? (
        <RecruitingCheckBar />
      ) : (
        <EventPostRequestBtn
          handleClick={() => {
            navigate(registLink);
          }}
        />
      )}
      <MenuBtns
        cardLink={cardLink}
        listLink={listLink}
        handleActiveCard={setActiveListCard}
      />
    </div>
  );
}
