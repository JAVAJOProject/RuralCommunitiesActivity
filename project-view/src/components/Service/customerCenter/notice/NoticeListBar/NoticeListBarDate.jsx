import React from 'react';
import './NoticeListBarDate.css'

export default function NoticeListBarDate({text}) {
	return (
		<div className='noticeListBarDate'>
			<p>{text}</p>
		</div>
	);
}