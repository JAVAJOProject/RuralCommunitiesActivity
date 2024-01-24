import React from 'react';
import './RequestPageNumber.css';

export default function RequestPageNumber({requestPage, totalPage, click, isColor,setColor}) {

const pageNumberArray = [];

if(requestPage > 10){
    for(let i = 10; i < totalPage; i++) {
        pageNumberArray.push (
            <p key={i+1} 
            onClick={() => {
                click(i+1);
                setColor(i+1);  }}
            style={{ color: isColor === i+1 ? 'blue' : 'black' }}
            >{i+1}</p>
            )
    }
}else if(requestPage <= 10 && totalPage > 10){
        for(let i = 0; i < 10; i++) {
            pageNumberArray.push (
                <p key={i+1} 
                onClick={() => {
                    click(i+1);
                    setColor(i+1);  }}
                style={{ color: isColor === i+1 ? 'blue' : 'black' }}
                >{i+1}</p>
                )
        }
        
}else {
        for(let i = 0; i < totalPage; i++) {
            pageNumberArray.push (
                <p key={i+1} 
                onClick={() => {
                    click(i+1);
                    setColor(i+1);  }}
                style={{ color: isColor === i+1 ? 'blue' : 'black' }}
                >{i+1}</p>
                )
            }
    }
    

   

    return (
        <div className='pageNumberA'>
            {pageNumberArray}
        </div>
    );
}

