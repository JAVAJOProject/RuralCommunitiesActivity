import React, { useState } from 'react';
import './MypageSellerEventManagementSelect.css';
import { useNavigate } from 'react-router-dom';

export default function MypageSellerEventManagementSelect({
  data,
  images,
  styles,
  updateSelectedData,
  register,
  storyLink,
}) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const {
    eventReportId,
    userInfo: { uId, uName, uNick, uTel, uEmail },
    eventProgressStatusId,
    eventProgressStatus,
  } = data;

  return (
    <div
      className="mypageSellerEventManagementSelect"
      onClick={() => {
        navigate(storyLink ? storyLink : '');
      }}
      style={{ cursor: storyLink ? 'pointer' : 'auto' }}
    >
      <p style={styles[0].style} title={uNick}>
        {uNick}
      </p>
      <p style={styles[1].style} title={uName}>
        {uName}
      </p>
      <p style={styles[2].style} title={uTel}>
        {uTel.substr(0, 3)}-
        {uTel.length === 7 ? uTel.substr(3, 3) : uTel.substr(3, 4)}-
        {uTel.substr(-4, 4)}
      </p>
      <p style={styles[3].style} title={uEmail}>
        {uEmail}
      </p>
      <p style={styles[4].style} title={eventProgressStatus}>
        {eventProgressStatus}
      </p>
      <label
        htmlFor={`eventWinnerInfo_${eventReportId}`}
        style={styles[5].style}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={images[+checked]} alt="" />
        <input
          type="checkbox"
          name={`eventWinnerInfo_${eventReportId}`}
          id={`eventWinnerInfo_${eventReportId}`}
          value={checked}
          onChange={() => {
            if (checked) {
              updateSelectedData((draft) =>
                draft.filter((item) => item !== eventReportId)
              );
            } else {
              updateSelectedData((draft) => {
                draft.push(eventReportId);
              });
            }
            setChecked((prev) => !prev);
          }}
          style={{ display: 'none' }}
        />
        {checked && <input type="hidden" value={eventReportId} {...register} />}
      </label>
    </div>
  );
}
