import React, { useState } from 'react';
// import PropTypes from "prop-types";
import './AdminTopSearchInput.css';
// import { useAsyncValue } from 'react-router-dom';
// import SelectDate from '../Select/SelectDate';

// const OPTIONDATE = [
//   { value: "a_start_date" ,name: "체험시작일" },
//   { value: "a_end_date" ,name: "체험종료일" },
//   { value: "a_reservation_deadline" ,name: "예약마감일" }
// ];



// name: PropTypes.string.isRequired,
// value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// type: PropTypes.oneOf(["text", "number", "date","search","file","hidden","checkbox","textarea","submit","reset"]),

export default function InputTest({inputData}) {


  const [ inputs, setInputs] = useState({});


  const [ inputStore, setInputStore] = useState ([]);
  //초기화 이게 맞는지 여러개 저장해야 하는데 어케?

  //입력값 inputs 에 저장
  const onInputChange = (event) => {
    const {name , value} = event.target;

    setInputs({...inputs,[name]: value,});//타켓밸류가 맞나?
  }

  //inputs를 다 저장
  const onSubmit = (event) => {
    event.preventDefault();
    const updatedInputStore = [...inputStore,inputs];
    setInputStore(updatedInputStore);
  }

  //리셋
  const onReset = () => {
    setInputs({});
  }

  return (
    <>
    {/* <div className='AdminSearchInput'> */}
    {inputData.map((inputItem) => 
    // <div className='AdminSearchInput'>
    <input
    key={inputItem.name}
    type={inputItem.type}
    name={inputItem.name}
    value={inputs[inputItem.name] || ''}
    placeholder={inputItem.placeholder || ''}
    onChange={onInputChange}
    />
    
    )}
    {/* </div> */}

  </>
  );  
}
