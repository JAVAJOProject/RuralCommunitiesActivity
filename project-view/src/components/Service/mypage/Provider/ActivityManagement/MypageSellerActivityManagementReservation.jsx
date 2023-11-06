import React, { useState } from 'react';
import './MypageSellerActivityManagementReservation.css';

export default function MypageSellerActivityManagementReservation({
  data,
  images,
  styles,
  updateSelectedData,
  register,
}) {
  const [checked, setChecked] = useState(false);
  const {
    reservationId,
    userInfo: { uId, uName, uNick, uTel, uEmail },
    reservationHeadcount,
    reservationStatus,
    reservationDate,
  } = data;

  return (
    <div className="mypageSellerActivityManagementReservation">
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
      <p style={styles[4].style} title={`${reservationHeadcount}명`}>
        {reservationHeadcount}명
      </p>
      <p
        style={styles[5].style}
        title={new Date(reservationDate).toLocaleDateString()}
      >
        {new Date(reservationDate).toLocaleDateString()}
      </p>
      <p style={styles[6].style} title={reservationStatus}>
        {reservationStatus}
      </p>
      <label
        htmlFor={`reservationInfo_${reservationId}`}
        style={styles[7].style}
      >
        <img src={images[+checked]} alt="" />
        <input
          type="checkbox"
          name={`reservationInfo_${reservationId}`}
          id={`reservationInfo_${reservationId}`}
          value={checked}
          onChange={() => {
            if (checked) {
              updateSelectedData((draft) =>
                draft.filter((item) => item !== reservationId)
              );
            } else {
              updateSelectedData((draft) => {
                draft.push(reservationId);
              });
            }
            setChecked((prev) => !prev);
          }}
          style={{ display: 'none' }}
        />
        {checked && <input type="hidden" value={reservationId} {...register} />}
      </label>
    </div>
  );
}
