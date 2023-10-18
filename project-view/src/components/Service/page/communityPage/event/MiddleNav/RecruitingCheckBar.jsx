import React, { useContext } from 'react';
import { EventNavContext } from './EventNavContext/EventNav';
import './RecruitingCheckBar.css';

import fullCheckBox from '../../../../../../view_img/Service/community/event/fullCheckBox.png';
import emptyCheckBox from '../../../../../../view_img/Service/community/event/emptyCheckBox.png';

const text = '마감된 이벤트 제외';

export default function RecruitingCheckBar() {
  const { navState, handleIsRecruiting } = useContext(EventNavContext);

  return (
    <div className="isRecruitingCheckBox">
      <img
        src={navState.isRecruiting ? fullCheckBox : emptyCheckBox}
        onClick={handleIsRecruiting}
      />
      <p>{text}</p>
    </div>
  );
}
