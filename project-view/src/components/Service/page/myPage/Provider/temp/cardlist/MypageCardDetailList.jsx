import React from 'react';
import './MypageCardDetailList.css'

export default function MypageCardDetailList({title, content}) {
	return (
		<div className='mypageCardDetailList'>
			<div></div>
			<p>{title} : {content}</p>
		</div>
	);
}

