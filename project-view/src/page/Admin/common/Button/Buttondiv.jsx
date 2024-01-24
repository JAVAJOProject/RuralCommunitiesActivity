import React,{useEffect, useState} from 'react';
import './Buttondiv.css';

export default function Buttondiv({ type, text, imgSrc,style ,click }) {


    const [classText, setClassText] = useState('buttonFullAdmin');

    useEffect(()=> {
    switch(text){
        case '삭 제' : setClassText('deleteBtnA'); break;
        case '더보기+' : setClassText('inquiryMoreA'); break;
        case '이전달 보기' : setClassText('monthMoreA'); break;
        default : setClassText('deleteBtnA');
        }
    },[text]);
        

    
    return (
        <div 
        className={classText} 
        style={style}
        onClick={click}>
        {imgSrc && <img src={imgSrc} alt='ImgBtn'/>}
        {text}</div>
    );
}

