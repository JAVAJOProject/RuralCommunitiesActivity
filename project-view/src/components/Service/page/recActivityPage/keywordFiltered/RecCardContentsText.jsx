import React from 'react';
import './RecCardContentsText.css'

export default function RecCardContentsText({text}) {
	return (
		<div className='recCardContentsText'>
			<p>{text}</p>
		</div>
	);
}

