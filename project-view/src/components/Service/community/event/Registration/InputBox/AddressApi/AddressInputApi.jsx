import React, { useState } from 'react';
import './AddressInputApi.css';
import InputHidden from '../TextBox/InputHidden';

const { daum } = window;

export default function AddressInputApi({ inputName, isRequired, className }) {
  const [detailAddress, setDetailAddress] = useState('');

  const [postcode, setPostcode] = useState('');
  const [roadAddress, setRoadAddress] = useState('');
  const [jibunAddress, setJibunAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const [guide, setGuide] = useState('');

  function sample4_execDaumPostcode() {
    new daum.Postcode({
      oncomplete: (data) => {
        const roadAddr = data.roadAddress;
        let extraRoadAddr = '';

        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }

        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraRoadAddr +=
            extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName;
        }

        if (extraRoadAddr !== '') {
          extraRoadAddr = ' (' + extraRoadAddr + ')';
        }

        setPostcode(data.zonecode);
        setRoadAddress(roadAddr);
        setJibunAddress(data.jibunAddress);
        setExtraAddress(extraRoadAddr);

        let guideText = '';
        if (data.autoRoadAddress) {
          const expRoadAddr = data.autoRoadAddress + extraRoadAddr;
          guideText = '(예상 도로명 주소 : ' + expRoadAddr + ')';
        } else if (data.autoJibunAddress) {
          guideText = '(예상 지번 주소 : ' + data.autoJibunAddress + ')';
        }

        setGuide(guideText);
      },
    }).open();
  }

  return (
    <div className={className ? className : 'addressInputApi'}>
      <div>
        <input
          type="text"
          value={postcode}
          placeholder="우편번호"
          onChange={(e) => {
            setPostcode(e.target.value);
          }}
          readOnly
          required={isRequired}
        />
        <button onClick={sample4_execDaumPostcode}>주소 찾기</button>
      </div>
      <div>
        <input
          type="text"
          value={roadAddress}
          placeholder="도로명주소"
          onChange={(e) => {
            setRoadAddress(e.target.value);
          }}
          readOnly
          required={isRequired}
        />
        <input
          type="text"
          value={jibunAddress}
          placeholder="지번주소"
          onChange={(e) => {
            setJibunAddress(e.target.value);
          }}
          readOnly
          required={isRequired}
        />
        <span style={{ color: '#999', display: guide ? 'block' : 'none' }}>
          {guide}
        </span>
        <input
          type="text"
          value={detailAddress}
          placeholder="상세주소"
          onChange={(e) => {
            setDetailAddress(e.target.value);
          }}
          required={isRequired}
        />
        <input
          type="text"
          value={extraAddress}
          placeholder="참고항목"
          onChange={(e) => {
            setExtraAddress(e.target.value);
          }}
          readOnly
        />
      </div>
      <span>
        <InputHidden
          inputInfo={{ inputName, value: `${roadAddress} ${detailAddress}` }}
        />
      </span>
    </div>
  );
}
