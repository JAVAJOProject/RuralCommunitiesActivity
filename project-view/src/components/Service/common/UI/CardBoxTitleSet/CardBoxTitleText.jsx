import React from 'react';
import './CardBoxTitleText.css'

export default function CardBoxTitleText({text}) {
	return (
		<div className='cardBoxTitleText'>
			<p>{text}</p>
		</div>
	);
}

