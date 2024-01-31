import React, { useEffect, useState } from 'react';
import './InputforInfo.css';

export default function InputforInfo({ inputInfoData, inputChange }) {
  return (
    <>
      <div>
        {inputInfoData.map((inputInfoItem) => (
          <div className={'inputDefaultA'} key={inputInfoItem.name}>
            <input
              type={inputInfoItem.type}
              value={inputInfoItem.value}
              readOnly={inputInfoItem.readonly}
              name={inputInfoItem.name}
              placeholder={inputInfoItem.placeholder ?? ''}
              onChange={inputChange}
              checked={inputInfoItem.checked}
              style={inputInfoItem.style}
            />
          </div>
        ))}
      </div>
    </>
  );
}
//useForm으로 관리하는 value값이 잘 업데이트 되는경우는
//inputValue값을 state값을 참조해서 리렌더링 하기 때문에 충돌없이 되는것임
//useForm에는 원래는 onChange를 따로 지정하지 않아도됨
//useForm버전은 따로 만듬 그것은 onChange가 따로 없음
