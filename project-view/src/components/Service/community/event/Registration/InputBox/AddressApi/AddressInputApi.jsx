import React, { useState } from 'react';
import './AddressInputApi.css';

const { daum } = window;

export default function AddressInputApi() {
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
    <div className="addressInputApi">
      <div>
        <input type="text" value={postcode} placeholder="우편번호" />
        <button onClick={sample4_execDaumPostcode}>우편번호 찾기</button>
      </div>
      <div>
        <input type="text" value={roadAddress} placeholder="도로명주소" />
        <input type="text" value={jibunAddress} placeholder="지번주소" />
        <span style={{ color: '#999', display: guide ? 'block' : 'none' }}>
          {guide}
        </span>
        <input type="text" placeholder="상세주소" />
        <input type="text" value={extraAddress} placeholder="참고항목" />
      </div>
    </div>
  );
}